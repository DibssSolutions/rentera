import { WIN, FIXED } from "../constants";

// const header = document.querySelector(".js-header");
const header = $(".js-header");

WIN.on("scroll", () => {
  WIN.scrollTop() > header.outerHeight()
    ? header.addClass(FIXED)
    : header.removeClass(FIXED);
  //   console.log(WIN.scrollTop());
});
