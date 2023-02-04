if (document.querySelector('[data-pages]')) {
  if (window.innerWidth <= 768) {
    const contentItems = document.querySelectorAll('.content__item');
    for (i = 6; i < document.querySelectorAll('.content__item').length; i++) {
      contentItems[i].style.display = 'none';
    }
    document.querySelector('[data-more]').addEventListener('click', el => {
      contentItems.forEach(e=> {
        e.style.display = '';
        // пока что оставлю так, есть вопросы как это должно работать
      })
    })
  }
}
