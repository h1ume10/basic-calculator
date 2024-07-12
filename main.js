"use strict";

document.addEventListener("DOMContentLoaded", function () {
  let display = document.getElementsByClassName("display");
  let equal = document.getElementsByClassName("equal");

  equal.addEventListener("click", function () {
    display.value = eval(display.value);
  });
});
