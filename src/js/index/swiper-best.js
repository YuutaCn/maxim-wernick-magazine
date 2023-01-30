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
  spaceBetween: 20,
  loop: true,
  preventClicks: true,
  slidesPerView: 1,
  speed: 400
});
