document.addEventListener('DOMContentLoaded', () => {
  const travelsBlock = document.querySelector('.travels'),
    buttonsChange = travelsBlock.querySelectorAll('.buttons__change'),
    travelsContent = travelsBlock.querySelectorAll('.travels__content');

  buttonsChange.forEach((el, i) => {

    el.addEventListener('click', () => {

      buttonsChange.forEach(e => {
        e.classList.remove('buttons__change_active');
      });

      el.classList.add('buttons__change_active');
      
      travelsContent.forEach(e => {
        e.classList.remove('content_active')
      });

      travelsContent[i].classList.add('content_active');
    });

  });
});
