// CODE HERE

const loginForm = document.getElementById("newform");
const loginButton = document.getElementById("submitLogin");

console.log(loginForm);
console.log(loginButton);

const validation = {
  user: "codesmith",
  thenarwhal: "baconsatmidnight",
  dragon: "nighthawk",
  shake: "nbake",
};

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  if (validation[username] && validation[username] === password) {
    alert("You have successfully logged in.");
    window.location.href = "feed.html";
  } else {
    alert("Incorrect Username and/or Password");
  }
});
