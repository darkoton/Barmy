//< " CONNECTING JS COMPONENTS " >=============================================================================================================>//

import isWebp from "./modules/webp.js";

import isDevice from './modules/device.js';

import "./modules/preloader.js"  // PRELOADER

// import "./modules/spoiler.js"  // SPOILERS

// import "./modules/spoiler.js"  // SPOILERS

// import "./modules/dynamic_adap.js"  // DYNAMIC ADAPTIVE

// import "./modules/scroll_header.js"  // SCROLL HEADER

// import "./modules/swiper.js"  // SLIDER SWIPER

// import "./modules/animate_scroll.js"  // ANIMATE WITH SCROLL

// import "./modules/tabs.js"  // TABS

// import "./modules/parallax.js"  // PARALLAX EFFECT


//< " СКРИПТЫ " >=============================================================================================================>//
isWebp()
isDevice()

const mySlider = document.querySelector('.gallery');
const slides = mySlider.querySelectorAll('.gallery__slide');



slides.forEach(slide => {
  slide.onclick = event => {
    slides.forEach(el => {
      if (event.target != el) {
        el.classList.remove('select');
      }
    });
    event.target.classList.add('select');


    for (let i = 1; i <= slides.length; i++) {
      if (i != event.target.dataset.slide) {
        mySlider.classList.remove('gallery-' + i)
      }
    }

    mySlider.classList.add('gallery-' + event.target.dataset.slide)
  };
});


//burger

const burger = document.querySelector(".header__burger")

burger.addEventListener('click', () => {
  document.body.classList.toggle("_lock-scroll")
  document.querySelector('.header__nav-bg').classList.toggle('active')
  document.querySelector('.header__nav').classList.toggle('active')
})

document.querySelector('.header__nav').querySelectorAll("a").forEach(el => {
  el.onclick = () => {
    document.body.classList.remove("_lock-scroll")
    document.querySelector('.header__nav-bg').classList.remove('active')
    document.querySelector('.header__nav').classList.remove('active')
  }
})

new WOW({
  animateClass: '_animate',
  offset: 0
}).init();