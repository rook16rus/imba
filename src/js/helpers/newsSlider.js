import Swiper, {Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode} from "swiper/swiper-bundle";

Swiper.use([Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode]);

export default function newsSlider() {
  const sections = document.querySelectorAll('.news');

  sections.forEach(section => {
    const slider = section.querySelector('.news__slider');
    const swiper = new Swiper(slider, {
      slidesPerView: "auto",
      spaceBetween: 15,
      navigation: {
        nextEl: section.querySelector('.js-next-slide'),
        prevEl: section.querySelector('.js-prev-slide'),
      },
      pagination: {
        el: section.querySelector('.swiper-pagination'),
        type: "fraction",
        renderFraction: function (currentClass, totalClass) {
          return `<span class='${currentClass}'></span>/<span class="${totalClass}"></span>`;
        },
        formatFractionCurrent: function (number) {
          return String(number).length > 1 ? number : '0' + number;
        },
        formatFractionTotal: function (number) {
          return String(number).length > 1 ? number : '0' + number;
        }
      },
      breakpoints: {
        768: {
          spaceBetween: 20
        },
        1025: {
          slidesPerView: 3,
          spaceBetween: 30
        }
      }
    })
  })
}
