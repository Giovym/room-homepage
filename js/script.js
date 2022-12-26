"use strict";

const navBar = document.getElementById("nav-bar");
const closeMenu = document.getElementById("menu-close");
const openMenu = document.getElementById("menu-open");
const sectionPhoto = document.getElementById("section-photo");
const sectionH1 = document.getElementById("section-h1");
const sectionAbout = document.getElementById("section-about");
const headingPrimary = document.getElementById("heading-primary");
const paragraph = document.getElementById("paragraph");
const arrowLeft = document.getElementById("arrow-left");
const arrowRight = document.getElementById("arrow-right");

let currentSlide = 1;
const maxSlide = 3;

const currentHeadingPrimary = function (slide) {
  if (slide === 1) {
    headingPrimary.textContent = "Discover innovative ways to decorate";
  }
  if (slide === 2) {
    headingPrimary.textContent = "We are available all across the globe";
  }
  if (slide === 3) {
    headingPrimary.textContent = "Manufactured with the best materials";
  }
};

const currentParagraph = function (slide) {
  if (slide === 1) {
    paragraph.textContent =
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.";
  }
  if (slide === 2) {
    paragraph.textContent =
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.";
  }
  if (slide === 3) {
    paragraph.textContent =
      "Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.";
  }
};

currentHeadingPrimary();

arrowRight.addEventListener("click", function () {
  if (currentSlide >= maxSlide) {
    currentSlide = 1;
  } else {
    currentSlide++;
  }
  sectionPhoto.style.backgroundImage = `url("https://github.com/Giovym/room-homepage/blob/main/images/desktop-image-hero-${currentSlide}.jpg")`;
  
  currentHeadingPrimary(currentSlide);
  currentParagraph(currentSlide);
});
arrowLeft.addEventListener("click", function () {
  if (currentSlide === 1) {
    currentSlide = maxSlide;
  } else {
    currentSlide--;
  }
  sectionPhoto.style.backgroundImage = `url("https://github.com/Giovym/room-homepage/blob/main/images/desktop-image-hero-${currentSlide}.jpg")`;
  currentHeadingPrimary(currentSlide);
  currentParagraph(currentSlide);
});

openMenu.addEventListener("click", function () {
  navBar.style.display = "flex";
  sectionPhoto.style.opacity = "0.5";
  sectionH1.style.opacity = "0.5";
  sectionAbout.style.opacity = "0.5";
});

closeMenu.addEventListener("click", function () {
  navBar.style.display = "none";
  sectionPhoto.style.opacity = "1";
  sectionH1.style.opacity = "1";
  sectionAbout.style.opacity = "1";
});
