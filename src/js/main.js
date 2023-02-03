document.addEventListener('DOMContentLoaded', () => {

  // Поиск открываем
  document.querySelector('.search__button').addEventListener('click', () => {
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
    if (!document.querySelector('.header__search').contains(el.target)){
      document.querySelector('.header__search').classList.remove('search_active');
      document.querySelector('.search__result').classList.remove('result_active');
      if (window.screen.availWidth < 1024) {
        document.querySelector('.header__title').classList.toggle('visually-hidden');
      };
    };
  });

  // Поиск закрываем на "Esc"
  document.addEventListener('keydown', function (e) {
    if (e.keyCode == 27) {
      if (window.screen.availWidth < 1024) {
        document.querySelector('.header__title').classList.toggle('visually-hidden');
      };
      document.querySelector('.header__search').classList.remove('search_active');
      document.querySelector('.search__result').classList.remove('result_active');
    }
  });
});
