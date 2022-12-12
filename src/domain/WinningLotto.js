const Lotto = require('./Lotto');
const LottoNumberValidator = require('../validate/LottoNumberValidator');

class WinningLotto extends Lotto {
  #bonusNumber;

  constructor(numbers, bonusNumber) {
    super(numbers);
    LottoNumberValidator.validate(bonusNumber);
    this.#bonusNumber = bonusNumber;
  }
}

module.exports = WinningLotto;
