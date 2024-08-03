"use strict";

/*
 * About us ANIMATION
 */

const button = document.getElementById("au-button"),
  wrap = document.getElementById("au-wrap");

let AboutUsBool = Boolean(true);

button.addEventListener("click", function () {
  if (AboutUsBool === true) {
    wrap.style.height = "auto";
    wrap.style.padding = "2rem 0";
    wrap.style.marginBottom = "2rem";

    AboutUsBool = false;
  } else {
    wrap.style.height = "0";
    wrap.style.padding = "0";
    wrap.style.marginBottom = "0";

    AboutUsBool = true;
  }
});

/*
 * Nav ANIMATION
 */

const navButton = document.getElementById("nav-button"),
  navUl = document.getElementById("nav-ul"),
  body = document.getElementById("body");

let NavBool = true;

navButton.addEventListener("click", function () {
  if (NavBool === true) {
    navUl.style.left = "0";
    body.style.overflow = "hidden";

    NavBool = false;
  } else {
    navUl.style.left = "-100%";
    body.style.overflow = "visible";

    NavBool = true;
  }
});
