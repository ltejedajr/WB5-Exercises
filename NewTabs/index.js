"use strict";

window.onload = function () {
    const googleBtn = document.getElementById("googleBtn");
    const w3SchoolsBtn = document.getElementById("w3SchoolsBtn");
    const imagesBtn = document.getElementById("imagesBtn");

    googleBtn.onclick = googleBtnClicked;
    w3SchoolsBtn.onclick = w3SchoolsBtnClicked;
    imagesBtn.onclick = imagesBtnClicked;

};

function googleBtnClicked() {
    console.log("google");
    window.open("https://www.google.com");
};

function w3SchoolsBtnClicked() {
    console.log("w3schools");
    window.open("https://www.w3schools.com");
};

function imagesBtnClicked() {
    console.log("images");
    window.open("images.html", "_self");
};
