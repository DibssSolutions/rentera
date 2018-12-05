document.addEventListener("DOMContentLoaded", function() {
  let dropdown = document.querySelector(".js-dropdown");

  dropdown.addEventListener("click", function() {
    this.classList.toggle("is-open");
  });

  const mobBtn = document.querySelector(".js-mob-btn");
  const BODY = document.querySelector("body");
  const HEADER = document.querySelector(".js-header");

  mobBtn.addEventListener("click", function() {
    this.classList.toggle("is-active");
    BODY.classList.toggle("is-overflow");
    HEADER.classList.toggle("is-open");
  });
});

import "./components";

// import is_touch_device from './lib/detectTouch.js';
// is_touch_device();
