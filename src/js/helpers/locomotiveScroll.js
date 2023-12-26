import LocomotiveScroll from "locomotive-scroll";

export default function locomotiveScroll() {
  const scroll = new LocomotiveScroll({
    el: document.querySelector('.page-wrapper'),
    smooth: true,
  });

  new ResizeObserver(() => scroll.update()).observe(document.querySelector("[data-scroll-container]"))

  window.locomotiveScroll = scroll;
}
