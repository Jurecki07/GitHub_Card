
let info = document.querySelector(".info");
let bio = document.querySelector(".bio");
let profile = document.querySelector(".img");
let title = document.querySelector(".title");
var request = require('ajax-request');

// Ajax Request To My GitHub
let req = new XMLHttpRequest();
req.open("GET", "https://api.github.com/users/Jurecki07");
req.addEventListener("load", reqListener);
req.send();

function reqListener() {
    let data = JSON.parse(this.responseText);
}