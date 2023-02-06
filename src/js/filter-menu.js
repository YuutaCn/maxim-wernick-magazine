(function () {
  const filter = document?.querySelector('[data-filter]');
  const filterMenu = document?.querySelector('[data-filter-menu]');
  const filterItems = document?.querySelectorAll('[data-filter-item]');

  function openFilterMenu() {
    filter?.classList.toggle('filter_active');
    filterMenu?.classList.toggle('filter-menu_active');
    document.querySelector('body').classList.add('page__body_disabled');

    if (filterMenu?.classList.contains('filter-menu_active')) {
      filter?.setAttribute('aria-expanded', 'true');
      filter?.setAttribute('aria-label', 'Закрыть меню');
      document.querySelector('body').classList.add('page__body_disabled');
    } else {
      filter?.setAttribute('aria-expanded', 'false');
      filter?.setAttribute('aria-label', 'Открыть меню');
      document.querySelector('body').classList.remove('page__body_disabled');
    }
  }

  filter?.addEventListener('click', (e) => {
    openFilterMenu();
  });

  filterItems?.forEach(el => {
    el.addEventListener('click', () => {
      filter?.setAttribute('aria-expanded', 'false');
      filter?.setAttribute('aria-label', 'Открыть меню');
      filter.classList.remove('filter_active');
      filterMenu.classList.remove('filter-menu_active');
      filterItems?.forEach(el => el.classList.remove('filter-menu_active'));
      document.querySelector('body').classList.remove('page__body_disabled');
    });
  });
})();
