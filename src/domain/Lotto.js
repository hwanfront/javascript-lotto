const LottoNumberValidator = require('../validate/LottoNumberValidator');
const LottoValidator = require('../validate/LottoValidator');

class Lotto {
  #numbers;

  constructor(numbers) {
    LottoValidator.validate(numbers);
    numbers.forEach(LottoNumberValidator.validate);
    this.#numbers = numbers;
  }

  countSameNumbers(lotto) {
    return this.#numbers.filter((number) => lotto.has(number)).length;
  }

  has(value) {
    return this.#numbers.includes(value);
  }

  toString() {
    return `[${this.#numbers.join(', ')}]`;
  }
}

module.exports = Lotto;
