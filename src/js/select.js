const selectWrapper = document.querySelectorAll('[data-select-wrapper]');

selectWrapper.forEach(select => {
  const selectInput = select.querySelector('input'),
    selectCurrent = select.querySelector('.current'),
    selectList = select.querySelector('.list');
    currentCheck();

    selectCurrent.addEventListener('click', () => {
      select.classList.toggle('select-wrapper_show')
    });

    selectList.querySelectorAll('li').forEach(listItem => {
      listItem.addEventListener('click', () => {
        selectInput.value = listItem.getAttribute('data-value');
        selectCurrent.innerHTML = listItem.innerHTML;
        currentCheck();
        selectClose();
      });
    });

    // закрываем по клику вне
    document.addEventListener('click', el => {
      if (!select.contains(el.target)){
        selectClose();
      };
    });

    // закрываем по клику на esc
    document.addEventListener('keydown', el => {
      if (el.keyCode == 27) {
        selectClose();
      };
    });

    function currentCheck() {
      if (selectInput.value == '' || selectInput.value == '0') {
        selectCurrent.classList.add('current_disable');
      } else {
        selectCurrent.classList.remove('current_disable');
      };
    };

    function selectClose() {
      select.classList.remove('select-wrapper_show');
    };
  });
