document.addEventListener('DOMContentLoaded', () => {
  const travelsBlock = document.querySelector('.travels'),
    countriesBlock = document.querySelector('.travels__countries'),
    citiesBlock = document.querySelector('.travels__cities'),
    countriesButton = document.querySelector('.buttons__countries'),
    citiesButton = document.querySelector('.buttons__cities');

    travelsBlock.querySelector('.buttons__countries').addEventListener('click', () => {
      citiesButton.classList.remove('buttons__cities_active');
      countriesButton.classList.add('buttons__countries_active');
      citiesBlock.classList.remove('cities_active');
      countriesBlock.classList.add('countries_active');
    });

    travelsBlock.querySelector('.buttons__cities').addEventListener('click', () => {
      citiesButton.classList.add('buttons__cities_active');
      countriesButton.classList.remove('buttons__countries_active');
      citiesBlock.classList.add('cities_active');
      countriesBlock.classList.remove('countries_active');
    });
});
