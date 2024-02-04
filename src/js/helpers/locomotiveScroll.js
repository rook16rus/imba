import LocomotiveScroll from "locomotive-scroll";

export default function locomotiveScroll() {
  const scroll = new LocomotiveScroll({
    el: document.querySelector('.page-wrapper'),
    smooth: true,
    multiplier: 1,
    lerp: 0.2,
    resetNativeScroll: false
  });

  new ResizeObserver(() => scroll.update()).observe(document.querySelector("[data-scroll-container]"))

  const noScrollElements = document.querySelectorAll('.js-no-scroll');
  noScrollElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      scroll.stop();
    })

    el.addEventListener('mouseleave', () => {
      scroll.start();
    })
  })

  window.locomotiveScroll = scroll;
}
