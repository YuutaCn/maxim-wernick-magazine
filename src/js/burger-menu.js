(function () {
  const burger = document?.querySelector('[data-burger]');
  const menu = document?.querySelector('[data-burger-menu]');
  const menuItems = document?.querySelectorAll('[data-menu-item]');
  const overlay = document?.querySelector('[data-menu-overlay]');

  function openMenu() {
    burger?.classList.toggle('burger_active');
    menu?.classList.toggle('burger-menu_active');
    document.querySelector('.header').classList.add('header_active');

    if (menu?.classList.contains('burger-menu_active')) {
      burger?.setAttribute('aria-expanded', 'true');
      burger?.setAttribute('aria-label', 'Закрыть меню');
      document.querySelector('.header').classList.add('header_active');
    } else {
      burger?.setAttribute('aria-expanded', 'false');
      burger?.setAttribute('aria-label', 'Открыть меню');
      document.querySelector('.header').classList.add('header_active');
    }
  }

  function closeMenu() {
    burger?.setAttribute('aria-expanded', 'false');
    burger?.setAttribute('aria-label', 'Открыть меню');
    burger.classList.remove('burger_active');
    menu.classList.remove('burger-menu_active');
    document.querySelector('.header').classList.remove('header_active');
  }

  burger?.addEventListener('click', (e) => {
    openMenu();
  });

  overlay?.addEventListener('click', () => {
    closeMenu()
  });

  menuItems?.forEach(el => {
    el.addEventListener('click', () => {
      burger?.setAttribute('aria-expanded', 'false');
      burger?.setAttribute('aria-label', 'Открыть меню');
      burger.classList.remove('burger_active');
      menu.classList.remove('burger-menu_active');
      menuItems?.forEach(el => el.classList.remove('burger-menu_active'));
    });
  });
})();
