'use strict';

/**
 * PRELOADER
 */
const preloader = document.querySelector("[data-preload]");

window.addEventListener("load", function() {
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
});


/** * ADD EVENT LISTENER ON MULTIPLE ELEMENTS
 * Fixed: Changed function name, fixed query typo, and updated event.length to elements.length
 */
const addEventOnElements = function(elements, eventType, callback) {
    for (let i = 0, len = elements.length; i < len; i++) {
        elements[i].addEventListener(eventType, callback);
    }
}


/**
 * NAVBAR
 * Fixed: Changed querySelector to querySelectorAll for navTogglers
 */
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]"); // Target all close/open buttons
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}

// This will now loop through your buttons and overlay perfectly!
addEventOnElements(navTogglers, "click", toggleNavbar);


/**
 * HEADER
 */
const header = document.querySelector("[data-header]");

let lastScrollPos = 0;

const hideHeader = function() {
    const currentScrollPos = window.scrollY;

    if (lastScrollPos < currentScrollPos && currentScrollPos > 50) {
        header.classList.add("hide");
    } else {
        header.classList.remove("hide");
    }

    if (currentScrollPos >= 50) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }

    lastScrollPos = currentScrollPos;
}

window.addEventListener("scroll", function(){
    if (window.scrollY >= 50) {
        header.classList.add("active");
        hideHeader();
    } else {
        header.classList.remove("active");
    }
});