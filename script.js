// NAVIGATION


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

function handleSmoothScroll(e) {
  e.preventDefault();
  //substring(1) après le 1er caractère
  const linkHref = e.target.getAttribute("href").substring(1);

  // Juste le nom de l'id (plus pratique)
  // console.log(linkHref); 

  // tout l'url avec http..etc.
  // console.log(e.target.href); 

  // On ajoute une valeur "* 0.95," pour avoir un peu plus d'espace ! 
  window.scrollTo({
    top: document.getElementById(linkHref).offsetTop * 0.95,
    behavior: "smooth"
  })
  // C'est la distance depuis le haut de la page jusqu'à l'élément
  // console.log(document.getElementById(linkHref).offsetTop);
  // console.log(document.location.pathname);
  window.history.pushState("", "", `${document.location.pathname}#${linkHref}`)
}