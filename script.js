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
const slideshowImages = document.querySelectorAll(".slideshow-images-container img");
const fadeSlideDots = document.querySelectorAll(".fade-slide-dots .dot");

fadeSlideDots.forEach(dot => dot.addEventListener("click", fadeSlideshow));

let currentFadeIndex = 1;
let fadeIntervalID;

function fadeSlideshow(e) {

  slideshowImages[currentFadeIndex - 1].classList.remove("active");
  fadeSlideDots[currentFadeIndex - 1].classList.remove("active");
  fadeSlideDots[currentFadeIndex - 1].ariaDisabled = "false";

  if (e) {
    currentFadeIndex = e.target.getAttribute("data-fadeIndex");
    clearInterval(fadeIntervalId);
    fadeIntervalId = window.setInterval(fadeSlideshow, 3500);
  }
  else {
    currentFadeIndex++;
    if (currentFadeIndex > slideshowImages.length) {
      currentFadeIndex = 1;
    }
  }

  slideshowImages[currentFadeIndex - 1].classList.add("active");
  fadeSlideDots[currentFadeIndex - 1].classList.add("active");
  fadeSlideDots[currentFadeIndex - 1].ariaDisabled = "true";
}

fadeIntervalId = window.setInterval(fadeSlideshow, 3500);

// Smooth scroll links

const smoothScrollLinks = [
  ...navLinks,
  ...document.querySelectorAll(".hero a")
]

// console.log(smoothScrollLinks);

// Pour chaque liens on execute cette fonction callback qui rajoute un écouteur d'événement addEventListener le "click" qui va lancer, déclencher la fonction handleSmoothScroll
smoothScrollLinks.forEach(link => link.addEventListener("click", handleSmoothScroll));