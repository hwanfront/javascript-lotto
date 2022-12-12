const Lotto = require('./Lotto');
const LottoNumberValidator = require('../validate/LottoNumberValidator');

class WinningLotto extends Lotto {
  #bonusNumber;

  constructor(numbers, bonusNumber) {
    super(numbers);
    LottoNumberValidator.validate(bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  checkBonus(lotto) {
    return lotto.has(this.#bonusNumber);
  }
}

module.exports = WinningLotto;
