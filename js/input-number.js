let minusOne = document.querySelector('.minus-btn-1');
let plusOne = document.querySelector('.plus-btn-1');
let inputOne = document.querySelector('.input-number-1');
let minusTwo = document.querySelector('.minus-btn-2');
let plusTwo = document.querySelector('.plus-btn-2');
let inputTwo = document.querySelector('.input-number-2');

minusOne.addEventListener('click', function (e) {
    e.preventDefault();
    inputOne.stepDown();
});

plusOne.addEventListener('click', function (e) {
    e.preventDefault();
    inputOne.stepUp();
});

minusTwo.addEventListener('click', function (e) {
  e.preventDefault();
  inputTwo. stepDown();
});

plusTwo.addEventListener('click', function (e) {
  e.preventDefault();
  inputTwo.stepUp();
});