//< " CONNECTING JS COMPONENTS " >=============================================================================================================>//

// import isDevice from './modules/device.js';

// import "./modules/spoiler.js"  // SPOILERS

// import "./modules/dynamic_adap.js"  // DYNAMIC ADAPTIVE

// import "./modules/scroll_header.js"  // SCROLL HEADER

// import "./modules/swiper.js"  // SLIDER SWIPER

// import "./modules/animate_scroll.js"  // ANIMATE WITH SCROLL

// import "./modules/tabs.js"  // TABS

// import "./modules/parallax.js"  // PARALLAX EFFECT


//< " СКРИПТЫ " >=============================================================================================================>//

function isDevice() {
  let isMobile = {
    Android: function () { return navigator.userAgent.match(/Android/i); },
    BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
    iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
    Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
    Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
    any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
  };

  if (isMobile.any()) {
    document.body.classList.add("_touch");
  } else {
    document.body.classList.add("_pc");
  }
}

isDevice()

const mySlider = document.querySelector('.gallery');
const slides = mySlider.querySelectorAll('.gallery__slide');

let src = slides[slides.length - 1].querySelector('img').src;
slides[slides.length - 1].classList.add('select');
mySlider.style.backgroundImage = `url(${src})`;

slides.forEach(slide => {
  slide.onclick = event => {
    slides.forEach(el => {
      if (event.target != el) {
        el.classList.remove('select');
      }
    });
    if (event.target.tagName == 'IMG') {
      src = event.target.src;
      event.target.offsetParent.classList.add('select');
    } else {
      src = event.target.querySelector('img').src;
      event.target.classList.add('select');
    }

    mySlider.style.backgroundImage = `url(${src})`;
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

