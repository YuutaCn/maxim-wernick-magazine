new Swiper('.opinions__swiper', {
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
  slidesPerView: 'auto',
  speed: 400
});
