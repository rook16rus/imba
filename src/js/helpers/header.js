import {disableScroll, enableScroll} from "./disableScroll";

export default function header() {
  const header = document.querySelector('.header');

  const burger = document.querySelector('.header__burger-button');
  const burgerClose = document.querySelector('.header__burger-close');
  const mobileNavigation = document.querySelector('.header__burger')

  burger.addEventListener('click', function (e) {
    mobileNavigation.classList.add('is-active');
    header.classList.add('is-active');

    disableScroll();
  })
  burgerClose.addEventListener('click', () => {
    mobileNavigation.classList.remove('is-active');
    header.classList.remove('is-active');

    enableScroll();
  })

  const locoScroll = window.locomotiveScroll;

  checkScroll(locoScroll.initPosition.y);
  locoScroll.on("scroll", (obj) => checkScroll(obj.scroll.y));

  function checkScroll(scrollPosition) {
    let topOffset = 400;

    if (window.innerWidth <= 1024) {
      topOffset = 0;
    }

    if (scrollPosition > topOffset) {
      header.classList.add('is-visible');
    } else {
      header.classList.remove('is-visible');
    }
  }

  if (window.innerWidth <= 1024) {
      const introHeader = document.querySelector('.intro-header');

      introHeader.style.setProperty('--header-height', header.clientHeight + 'px')
  }
}
