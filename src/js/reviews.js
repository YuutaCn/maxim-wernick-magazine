

const reviewsSection = document.querySelector('.reviews'),
  buttonsChange = reviewsSection.querySelectorAll('.buttons__change'),
  reviewsContent = reviewsSection.querySelectorAll('.reviews__content');

function SwiperInit() {

  buttonsChange.forEach((el, i) => {
    el.addEventListener('click', () => {
      buttonsChange.forEach(e => {
        e.classList.remove('buttons__change_active');
      });
      el.classList.add('buttons__change_active');
      reviewsContent.forEach(e => {
        e.style.display = 'none'
      });
      reviewsContent[i].style.display = '';
      let swiper = reviewsContent[i];
      if (!swiper.classList.contains('swiper-initialized')) {
        new Swiper(swiper, {
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
          slidesPerGroupAuto: true,
          speed: 400,
        });
      };
    });
  });
};

new Swiper(reviewsContent[0], {
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
  slidesPerGroupAuto: true,
  speed: 400,
});
