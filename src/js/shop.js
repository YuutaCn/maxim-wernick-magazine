new Swiper('.shop__swiper', {
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
  spaceBetween: 30,
  slidesPerView: 'auto',
  loop: true,
  preventClicks: true,
  speed: 400
});
