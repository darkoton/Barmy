const parallax = document.querySelector('.main__parallax');

function parallaxFn() {
  parallax.style.backgroundPosition = `50% -${window.pageYOffset * 0.3}px`;
}

window.addEventListener('load', parallaxFn);

window.addEventListener('scroll', parallaxFn);

window.addEventListener('orientationchange', parallaxFn, false);
