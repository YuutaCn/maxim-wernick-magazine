//Получаем все "select" по селектору
const selects = document.querySelectorAll('.select-wrapper')
//переборка по полученным "select"
for (let i = 0; i < selects.length; i++) {
  const select = selects[i]
  //получаем все "option" внутри "select"
  const options = select.querySelectorAll('option')

  //создаем кастомный "select"
  const cSelect = document.createElement('div')
  const cSelectList = document.createElement('ul')
  const cSelectCurrent = document.createElement('div')

  // select.setAttribute('tabindex', '1')
  //задем классы и атрибуты кастомному "select"
  cSelect.className = 'custom-select'
  cSelectList.className = 'custom-select__list list'
  cSelectCurrent.className = 'custom-select__current current'

  //создаем вложенность созданных элементов
  cSelect.append(cSelectCurrent, cSelectList)

  //добавляем кастоный "select" сразу после оргинального "select"
  select.after(cSelect)

  //получаем список и значения "option" из "select", затем создаём кастомный "option" для кастоного "select"
  const createCustomDom = (x, y) => {
    let selectItems = ''
    for (var i = 0; i < options.length; i++) {
      if (options[i].value != 'null') {
        selectItems += '<li class="list__item" data-value="' + options[i].value + '">' + options[i].text + '</li>'
      } else {
        selectItems += '<li class="list__item list__item_disabled" data-value="null">' + options[i].text + '</li>'
      }
    }
    cSelectList.innerHTML = selectItems
    x(), y();
  }

  //открываем-закрываем выпадающий список по клику
  const toggleClass = () => { cSelect.classList.toggle('custom-select_show') }

  //присваиваем текстовое первое значение "option" в кастомном "select"
  const currentTextValue = () => cSelectCurrent.textContent = cSelectList.children[0].textContent

  //получаем и задаем значения text/value
  const currentValue = () => {
    const items = cSelectList.children
    for (var el = 0; el < items.length; el++) {
      let selectValue = items[el].getAttribute('data-value')
      let selectText = items[el].textContent
      items[el].addEventListener('click', () => {
        cSelect.classList.remove('custom-select_show')
        cSelectCurrent.textContent = selectText
        select.value = selectValue
      })
    }
  }

  const desctopFn = () => {
    cSelectCurrent.addEventListener('click', toggleClass)
  }

  const mobileFn = () => {
    for (let j = 0; j < selects.length; j++) {
      let mobileSelect = selects[j]
      mobileSelect.addEventListener('change', () => {
        mobileSelect.nextElementSibling.querySelector('.custom-select__current').textContent = mobileSelect.value
      })
    }
  }

  createCustomDom(currentTextValue, currentValue)


  //закрываем выпадающий список по клику вне области кастомного селекта
  document.addEventListener('mouseup', (e) => {
    if (!cSelect.contains(e.target)) cSelect.classList.remove('custom-select_show')
  })

  detectmob(mobileFn, desctopFn)

  function detectmob(x, y) {
    if (navigator.userAgent.match(/Android/i)
      || navigator.userAgent.match(/webOS/i)
      || navigator.userAgent.match(/iPhone/i)
      || navigator.userAgent.match(/iPad/i)
      || navigator.userAgent.match(/iPod/i)
      || navigator.userAgent.match(/BlackBerry/i)
      || navigator.userAgent.match(/Windows Phone/i)
    ) {
      y();
    }
    else {
      y();
    }
  }
}
