import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function animations() {
  /*  Анимация для списка партнеров  */
  // const partnerLists = document.querySelectorAll('.partners-list');
  // partnerLists.forEach(list => {
  //   const images = list.querySelectorAll('.partners-list__item img');
  //
  //   gsap.from(images, {
  //     scrollTrigger: {
  //       trigger: list,
  //       start: "bottom 10%",
  //     },
  //     opacity: 0,
  //     stagger: {
  //       amount: 0.2,
  //       from: "random"
  //     }
  //   })
  // })

  /*  Анимация интро-блока */
  const introHeader = document.querySelector('.intro-header');
  if (!introHeader) return

  const intro = document.querySelector('.intro');
  if (!intro) return;

  const titleChars = introHeader.querySelectorAll('.intro-header__title .char');
  const menuItems = introHeader.querySelectorAll('.intro-header__menu-item');
  const leftContent = intro.querySelector('.intro__bottom-left');
  const rightContent = intro.querySelector('.intro__bottom-right');
  const sliderImg = intro.querySelector('.intro__slide:first-child img')

  const tl = gsap.timeline();

  tl.from(titleChars, {
    yPercent: 100,
    delay: 0.2,
    duration: 0.4,
    ease: "power3.out"
  })

  menuItems.forEach((item, index) => {
    tl.from(item, {
        y: index * 25,
        duration: 0.4,
        stagger: 0,
        delay: -0.4,
        ease: "power3.out"
      })
  })

  tl.from(leftContent, {
    duration: 0.7,
    delay: 0,
    ease: "power3.out",
    opacity: 0,
    y: 100
  }, ).from(rightContent, {
    duration: 0.7,
    ease: "power3.out",
    opacity: 0,
    y: 100
  }, "-=0.7").from(sliderImg, {
    duration: 0.7,
    delay: -0.7,
    ease: "power3.out",
    scale: 1.3
  })
}
