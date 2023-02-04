let burgeMenuStatus = false;
(function () {
  const burger = document?.querySelector('[data-burger]');
  const menu = document?.querySelector('[data-burger-menu]');
  const menuItems = document?.querySelectorAll('[data-menu-item]');
  const overlay = document?.querySelector('[data-menu-overlay]');

  function openMenu() {
    burger?.classList.toggle('burger_active');
    menu?.classList.toggle('burger-menu_active');
    document.querySelector('.header').classList.add('header_active');
    burgeMenuStatus = true;

    if (menu?.classList.contains('burger-menu_active')) {
      burger?.setAttribute('aria-expanded', 'true');
      burger?.setAttribute('aria-label', 'Закрыть меню');
      document.querySelector('.header').classList.add('header_active');
      burgeMenuStatus = true;
    } else {
      burger?.setAttribute('aria-expanded', 'false');
      burger?.setAttribute('aria-label', 'Открыть меню');
      document.querySelector('.header').classList.add('header_active');
      burgeMenuStatus = false;
    }
  }

  function closeMenu() {
    burger?.setAttribute('aria-expanded', 'false');
    burger?.setAttribute('aria-label', 'Открыть меню');
    burger.classList.remove('burger_active');
    menu.classList.remove('burger-menu_active');
    document.querySelector('.header').classList.remove('header_active');
    burgeMenuStatus = false;
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
      // enableScroll();
      burgeMenuStatus = false;
    });
  });

  document.addEventListener('touchstart', handleTouchStart, false);
  document.addEventListener('touchmove', handleTouchMove, false);
  var xDown = null;
  var yDown = null;
  function getTouches(evt) {
    return evt.touches ||             // browser API
      evt.originalEvent.touches; // jQuery
  }
  function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
  };
  function handleTouchMove(evt) {
    if (!xDown || !yDown) {
      return;
    }
    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;
    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
    if (Math.abs(xDiff) > Math.abs(yDiff)) {/*most significant*/
      if (xDiff > 0) {
        /* right swipe */
        if (burgeMenuStatus === true) {
          closeMenu()
        }
      }
    } else {
      if (yDiff > 0) {
        /* down swipe */
        if (burgeMenuStatus === true) {
          closeMenu()
        }
      } else {
        /* up swipe */
        if (burgeMenuStatus === true) {
          closeMenu()
        }
      }
    }
    /* reset values */
    xDown = null;
    yDown = null;
  };
})();
