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

  countSameNumbers(lotto) {
    return this.#numbers.filter((number) => lotto.has(number)).length;
  }

  has(value) {
    return this.#numbers.includes(value);
  }
}

module.exports = Lotto;
