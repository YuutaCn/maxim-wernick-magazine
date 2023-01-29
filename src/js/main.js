document.addEventListener('DOMContentLoaded', () => {

  // Поиск
  document.querySelector('.search__btn').addEventListener('click', () => {
    if (window.screen.availWidth < 1024) {
      document.querySelector('.header__title').classList.toggle('visually-hidden');
    };
    document.querySelector('.header__search').classList.toggle('active');
    document.querySelector('.search__result').classList.remove('active');
  });

  document.querySelector('.search__input').addEventListener('input', () => {
    let inputData = document.querySelector('.search__input').value.valueOf();
    let searchZone = document.querySelector('.search__result');
    if (inputData === '') {
      searchZone.classList.remove('active');
    } else if (inputData.length > 0) {
        searchZone.classList.add('active');
      };
  });
});
