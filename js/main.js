document.addEventListener('DOMContentLoaded', () => {

  const burger = document.querySelector('.burger');
  const mediaQuery = window.matchMedia('(max-width: 560px)');
  const mediaQueryTablet = window.matchMedia('(max-width: 700px)');
  const linksSliderServices = document.querySelectorAll('.services-card__link');
  let buttonNumberPlus = document.querySelectorAll('.plus-btn');
  let buttonNumberMinus = document.querySelectorAll('.minus-btn');
  let textContactsEmailOne = document.getElementById('text-email-1');
  let textContactsEmailTwo = document.getElementById('text-email-2');
  let textContactsSchedule = document.getElementById('text-schedule');

  function linksEffect() {
    linksSliderServices.forEach((e) => {
      e.classList.add('link-mobile');
    });
  }
  if (mediaQuery.matches) {
    linksEffect();
    
    buttonNumberPlus.forEach(e => {
      e.textContent = '+'
    });
    buttonNumberMinus.forEach(e => {
      e.textContent = '-'
    });
  }

  if (mediaQueryTablet.matches) {
    textContactsEmailOne.textContent = 'бронирование';
    textContactsEmailTwo.textContent = 'сотрудничество';
    textContactsSchedule.textContent = 'Пн-Пт, с 10:00 до 19:00';
  }

  burger.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('burger--active');
    document.querySelector('.nav-block').classList.toggle('visible');
    document.querySelector('.personal').classList.toggle('visible');
    if (mediaQuery.matches) {
      document.querySelector('.logo-tel').classList.toggle('visible');
    }
  });

  const choicesList = document.querySelectorAll('[role="listbox"]');
  choicesList.forEach(el => {
    el.setAttribute('data-simplebar', true),
    el.setAttribute('aria-label', 'выпадающий список городов')
    new SimpleBar((el), { autoHide: false });
  });

  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  if (month < 10) month = "0" + month;
  if (day < 10) day = "0" + day;

  let today = year + "-" + month + "-" + day;

  document.getElementById('theDate').value = today;
  document.getElementById('theDate').setAttribute("min", today);
})


