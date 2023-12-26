// eslint-disable-next-line import/no-extraneous-dependencies
/*import 'focus-visible';*/
import lazyIMages from './modules/lazyIMages';
import documenReady from './helpers/documenReady';
import initModal from './modules/initModal';
import './helpers/lazyload';

import detectTouch from './helpers/detectTouch';
import setScrollbarWidth from './helpers/setScrollbarWidth';
import anchorLinks from './helpers/anchorLinks';

import initSliders from "./modules/initSliders";
import fancybox from "./helpers/fancybox";
import validation from "./helpers/validation";
import masks from "./helpers/masks";
import yandexMap from "./helpers/yandexMap";
import fileInputs from "./helpers/fileInputs";
import alignHeights from "./modules/alignHeights";
import inputPlaceholder from "./helpers/inputPlaceholder";
import customSelects from "./helpers/customSelects";
import accordions from "./helpers/accordions";
import newsSlider from "./helpers/newsSlider";
import contactsMap from "./helpers/contactsMap";
import header from "./helpers/header";
import introSlider from "./helpers/introSlider";
import projectsSlider from "./helpers/projectsSlider";
import locomotiveScroll from "./helpers/locomotiveScroll";
import splitting from "./helpers/splitting";
import animations from "./helpers/animations";

// setTimeout(() => {
//   if (document.body.classList.contains('animatable')) return
//   document.body.classList.add('animatable')
//   animations();
// },  3000)

documenReady(() => {
  window.imba_API = { };

  lazyIMages();
  initModal();
  initSliders();

  detectTouch();
  setScrollbarWidth();
  anchorLinks();
  validation();
  masks();
  fancybox();
  yandexMap();
  fileInputs();
  inputPlaceholder();
  customSelects();
  accordions();

  locomotiveScroll();
  introSlider();
  newsSlider();
  contactsMap();
  projectsSlider();
  splitting();
  header();
});

document.fonts.ready.then((res) => {
  alignHeights(".licenses", ".licenses__item img");
  alignHeights(".news__slider", ".news-card__content");
})

window.addEventListener('load', function () {
  document.body.classList.add('loaded');

  if (document.body.classList.contains('animatable')) return
  document.body.classList.add('animatable');
  animations();
});

window.addEventListener('resize', () => {
  alignHeights(".licenses", ".licenses__item img");
  alignHeights(".news__slider", ".news-card__content");
})
