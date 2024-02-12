import Swiper, {Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode} from "swiper/swiper-bundle";

Swiper.use([Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode]);

export default function projectsSlider() {
  const sections = document.querySelectorAll('.projects');

  sections.forEach(section => {
    const slider = section.querySelector('.projects__slider');
    const swiper = new Swiper(slider, {
      slidesPerView: 1.1,
      spaceBetween: 15,
      breakpoints: {
        891: {
          slidesPerView: 'auto',
          spaceBetween: 0
        }
      }
    })
  })
}
