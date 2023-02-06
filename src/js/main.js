document.addEventListener('DOMContentLoaded', () => {

  // Поиск открываем
  document.querySelector('[data-search]').addEventListener('click', () => {
    if (window.screen.availWidth < 1024) {
      document.querySelector('.header__title').classList.toggle('visually-hidden');
    };
    document.querySelector('.header__search').classList.toggle('search_active');
    document.querySelector('.search__result').classList.remove('result_active');
  });

  // Поиск закрываем по кнопке
  document.querySelector('.search__input').addEventListener('input', () => {
    let inputData = document.querySelector('.search__input').value.valueOf();
    let searchZone = document.querySelector('.search__result');
    if (inputData === '') {
      searchZone.classList.remove('result_active');
    } else if (inputData.length > 0) {
      searchZone.classList.add('result_active');
    };
  });

  // Поиск закрываем по клику вне
  document.addEventListener('click', el => {
    if (!document.querySelector('.header__search').contains(el.target)) {
      document.querySelector('.header__search').classList.remove('search_active');
      document.querySelector('.search__result').classList.remove('result_active');
      if (window.screen.availWidth < 1024) {
        document.querySelector('.header__title').classList.remove('visually-hidden');
      };
    };

    if (document.querySelector('[data-close-checkbox]')) {
      if (!document.querySelector('[data-close-checkbox]').contains(el.target)) {
        document.querySelector('[data-close-checkbox] input').checked = false;
      }
    }
  });

  // Поиск закрываем на "Esc"
  document.addEventListener('keydown', function (e) {
    if (e.keyCode == 27) {
      if (window.screen.availWidth < 1024) {
        document.querySelector('.header__title').classList.toggle('visually-hidden');
      };
      document.querySelector('.header__search').classList.remove('search_active');
      document.querySelector('.search__result').classList.remove('result_active');

      if (document.querySelector('[data-close-checkbox]')) {
        document.querySelector('[data-close-checkbox] input').checked = false;
      }
    }
  });
});

const headerHtml = document?.querySelector('.header'),
  headerHeight = headerHtml.offsetHeight;

window.onscroll = () => (window.scrollY > headerHeight / 1.5) ? headerHtml.classList.add('header_active') : headerHtml.classList.remove('header_active');

