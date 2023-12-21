export default function header() {
  const header = document.querySelector('.header');

  // const burger = document.querySelector('.header__burger');
  // const mobileNavigation = document.querySelector('.header__mobile')
  //
  // burger.addEventListener('click', function (e) {
  //   e.currentTarget.classList.toggle('active');
  //   mobileNavigation.classList.toggle('active');
  //   header.classList.toggle('active');
  // })

  checkScroll();
  window.addEventListener('scroll', checkScroll);

  function checkScroll() {
    if (header.getBoundingClientRect().top > document.documentElement.getBoundingClientRect().top + 300) {
      header.classList.add('is-visible');
    } else {
      header.classList.remove('is-visible');
    }
  }
}