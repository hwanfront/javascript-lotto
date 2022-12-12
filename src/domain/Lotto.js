const LottoNumberValidator = require('../validate/LottoNumberValidator');
const LottoValidator = require('../validate/LottoValidator');

class Lotto {
  #numbers;

  constructor(numbers) {
    LottoValidator.validate(numbers);
    numbers.forEach(LottoNumberValidator.validate);
    this.#numbers = numbers;
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
