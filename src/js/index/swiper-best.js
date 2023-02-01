new Swiper('.best__swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    1440: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 'auto',
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 'auto',
      spaceBetween: 30,
    },
  },
  loop: true,
  preventClicks: true,
  speed: 400
});
