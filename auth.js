function login() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;

  // Set your login credentials
  if (user === "ahmad" && pass === "salim") {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "dashboard.html";
  } else {
    alert("Incorrect credentials");
  }
}

function checkLogin() {
  if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "index.html";
  }
}

function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "index.html";
}
