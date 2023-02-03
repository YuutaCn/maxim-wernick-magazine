function SwiperInit(el = '.rewiews__technic', destroy = false) {
  new Swiper(el, {
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
    // slidesPerGroupAuto: true,
    breakpoints: {
      1126: {
        slidesPerGroup: 3,
      },
      768: {
        slidesPerGroup: 2,
      }

    },
    speed: 400,
  });

  document.querySelector(el).style.display = '';

  if (destroy == true) {
    if (el === '.rewiews__technic') {
      document.querySelector('.rewiews__restaurants').swiper.destroy();
      document.querySelector('.rewiews__restaurants').style.display = 'none';
      document.querySelector('.buttons__restaurants').classList.remove('buttons__restaurants_active');
      document.querySelector('.buttons__technic').classList.add('buttons__technic_active');
    } else {
      document.querySelector('.rewiews__technic').swiper.destroy();
      document.querySelector('.rewiews__technic').style.display = 'none';
      document.querySelector('.buttons__technic').classList.remove('buttons__technic_active');
      document.querySelector('.buttons__restaurants').classList.add('buttons__restaurants_active');
    };
  };
};

SwiperInit();
