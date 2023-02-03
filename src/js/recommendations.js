new Swiper('.recommendations__swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  spaceBetween: 20,
  loop: true,
  preventClicks: true,
  breakpoints: {
    1210: {
      slidesPerGroup: 2,
      slidesPerView: 'auto',
    },
    768: {
      slidesPerView: 'auto',
    },
    320: {
      slidesPerView: 1,
    },
  },
  speed: 400,
});
