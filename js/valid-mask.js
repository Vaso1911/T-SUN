const inputTel = document.querySelector('input[type="tel"]');
let inputMaskTel = new Inputmask('+7 (999) 999-99-99');
inputMaskTel.mask(inputTel);

const validation = new JustValidate('#form-modal');

validation
.addField('#name', [
  {
    validator: (value) => value[value.length - 1] === '.',
    errorMessage: 'ведите имя',
  },
  {
    rule: 'customRegexp',
    value: '[А-я]+\S*',
    errorMessage: 'ведите имя',
  },

  {
    rule: 'minLength',
    value: 3,
    errorMessage: 'минимум 3 буквы',
  },
  {
    rule: 'maxLength',
    value: 30,
    errorMessage: 'максимум 30 букв',
  },
])
.addField('#tel', [
  {
    rule: 'required',
    errorMessage: 'ведите телефон',
    
  },
  {
    rule: 'minNumber',
    value: 10,
    errorMessage: 'ведите телефон',
  },
])