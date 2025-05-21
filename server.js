const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3000;

app.use(express.static('public')); // serve browser.html

app.get('/browse/*', async (req, res) => {
    const url = decodeURIComponent(req.params[0]);
    
    try {
        const response = await fetch(`https://${url}`);
        let html = await response.text();

        // Optionally rewrite links to go through proxy again
        html = html.replace(/href="(.*?)"/g, (match, href) => {
            if (href.startsWith('http')) return `href="/browse/${encodeURIComponent(href.replace(/^https?:\/\//, ''))}"`;
            return match;
        });

        res.send(html);
    } catch (err) {
        res.status(500).send('Error fetching the page.');
    }
});

app.listen(port, () => {
    console.log(`Proxy server running at http://localhost:${port}`);
});
