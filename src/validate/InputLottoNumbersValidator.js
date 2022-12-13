const CommonValidator = require('./CommonValidator');
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
      CommonValidator.checkIsNumber(number);
      LottoNumberValidator.validate(number);
    });
  },
};

module.exports = InputLottoNumbersValidator;
