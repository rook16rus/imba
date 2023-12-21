import Swiper, {Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode} from "swiper/swiper-bundle";

Swiper.use([Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode]);

export default function introSlider() {
  const section = document.querySelector('.intro');
  if (!section) return

  const swiper = new Swiper('.intro__slider', {
    slidesPerView: "auto",
    spaceBetween: 20,
    breakpoints: {
      1024: {
        spaceBetween: 0,
        slidesPerView: 1
      }
    },
    navigation: {
      nextEl: section.querySelector('.js-next-slide'),
      prevEl: section.querySelector('.js-prev-slide'),
    },
  })
}
