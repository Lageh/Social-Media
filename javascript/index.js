const form = document.querySelector("#login-form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  username.classList.add("shake");
  password.classList.add("shake");

  setTimeout(() => {
    username.classList.remove("shake");
    password.classList.remove("shake");
  }, 1000);
});
