const loginForm = document.querySelector("#login-form");
const loginContent = document.querySelector("#login-form input:first-child");
const loginBtn = document.querySelector("#login-form input:last-child");
const helloUser = document.querySelector("#hello-user");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function loginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginContent.value;
    localStorage.setItem(USERNAME_KEY, username);
    sayHelloUser(username);
}

function sayHelloUser(username) {
    helloUser.innerText = `Hello, My master ${username}`;
    helloUser.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", loginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", loginSubmit);
} else {
    loginForm.classList.add(HIDDEN_CLASSNAME);
    sayHelloUser(savedUsername);
}