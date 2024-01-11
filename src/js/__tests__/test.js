import Validator from '../app';

test.each([ 
  ['Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)', 'hhkjk111-_!kdsjg'], 
  ['Имя не должно содержать подряд более трёх цифр', 'hhkjk1111kdsjg'], 
  ['Имя не должно начинаться цифрами','1hhkjk11-_kdsjg'], 
  ['Имя не должно заканчиваться цифрами','hhkjk11-_kdsjg1'], 
  ['Имя не должно начинаться символами подчёркивания','_hhkjk1_-kdsjg'], 
  ['Имя не должно заканчиваться символами подчёркивания','hhkjk1_-kdsjg_'],
  ['Имя не должно начинаться тире','-hhkjk1-_kdsjg'], 
  ['Имя не должно заканчиваться тире','hhkjk1_-kdsjg-'], 
])( 
  ('%s'), 
  (errorType, name) => { 
    const validatorInstance = new Validator(name);
    expect(() => {
      validatorInstance.validateUsername()
    }).toThrow(); 
  }
);