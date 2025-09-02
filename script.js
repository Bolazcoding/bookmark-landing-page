"use strict";

const contentheader1 = document.querySelector(".content-header1");
const contentheader2 = document.querySelector(".content-header2");
const contentheader3 = document.querySelector(".content-header3");
const content1El = document.querySelector(".content1");
const content2El = document.querySelector(".content2");
const content3El = document.querySelector(".content3");
const contentFeatures1 = document.querySelector(".features-details1");
const contentFeatures2 = document.querySelector(".features-details2");
const contentFeatures3 = document.querySelector(".features-details3");

const bg_animation = document.querySelector(".features");

// Show the pseudo-element
// content1El.style.setProperty("--before-display", "block");

// Hide it again
// content1El.style.setProperty("--before-display", "none");

// contentFeatures2.style.display = "none";
// contentFeatures3.style.display = "none";

contentheader1.addEventListener("click", function () {
  content1El.style.setProperty("--before-display", "block");
  content2El.style.setProperty("--before-display", "none");
  content3El.style.setProperty("--before-display", "none");

  contentFeatures1.style.display = "flex";
  contentFeatures2.style.display = "none";
  contentFeatures3.style.display = "none";
});

contentheader2.addEventListener("click", function () {
  content2El.style.setProperty("--before-display", "block");
  content1El.style.setProperty("--before-display", "none");
  content3El.style.setProperty("--before-display", "none");

  contentFeatures1.style.display = "none";
  contentFeatures2.style.display = "flex";
  contentFeatures3.style.display = "none";

  bg_animation.style.setProperty("--before-display", "none");
  bg_animation.style.setProperty("--before-display", "block");
});

contentheader3.addEventListener("click", function () {
  content3El.style.setProperty("--before-display", "block");
  content1El.style.setProperty("--before-display", "none");
  content2El.style.setProperty("--before-display", "none");

  contentFeatures1.style.display = "none";
  contentFeatures2.style.display = "none";
  contentFeatures3.style.display = "flex";
});
