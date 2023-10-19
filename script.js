// NAVIGATION

const nav = document.querySelector(".main-nav");
const navToggler = document.querySelector(".nav-toggler");
const togglerImg = navToggler.querySelector("img");
const navLinks = document.querySelectorAll(".main-nav a");

// L'écoute d'un événement sur le bouton
navToggler.addEventListener("click", toggleNav);

function toggleNav() {
  nav.classList.toggle("active");
  if (togglerImg.src.includes("hamburger")) {
    togglerImg.src = "ressources/cross.svg";
    navToggler.ariaExpanded = "true";
  }
  else {
    togglerImg.src = "ressources/hamburger.svg";
    navToggler.ariaExpanded = "false";
  }
}


/* Fonctionnalité : les 3 petits points qui permet de se déplacer dans le slider (slideshow) */
const slideshowImages = document.querySelectorAll("slideshow-images-container img");
const fadeSlideDots = document.querySelectorAll(".fade-slide-dots");

fadeSlideDots.forEach(dot => dot.addEventListener("click", fadeSlideshow));


function fadeSlideshow(e) {
}