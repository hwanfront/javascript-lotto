const NotNumberException = require('../exception/NotNumberException');
const LottoNumberValidator = require('./LottoNumberValidator');
const LottoValidator = require('./LottoValidator');

const InputLottoNumbersValidator = {
  validate(value) {
    const numbers = value.split(',').map(Number);
    LottoValidator.checkSize(numbers);
    this.checkNumbers(numbers);
  },
  checkNumbers(numbers) {
    numbers.forEach((number) => {
      this.checkIsNumber(number);
      LottoNumberValidator.validate(number);
    });
  },
  checkIsNumber(number) {
    if (Number.isNaN(parseInt(number, 10)) || typeof number !== 'number') {
      throw new NotNumberException();
    }
  },
};

module.exports = InputLottoNumbersValidator;
