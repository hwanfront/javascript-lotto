const Lotto = require('./Lotto');
const LottoNumberValidator = require('../validate/LottoNumberValidator');
const BonusNumberValidator = require('../validate/BonusNumberValidator');

class WinningLotto extends Lotto {
  #bonusNumber;

  constructor(numbers, bonusNumber) {
    super(numbers);
    LottoNumberValidator.validate(bonusNumber);
    BonusNumberValidator.validate({ numbers, bonusNumber });
    this.#bonusNumber = bonusNumber;
  }

  checkBonus(lotto) {
    return lotto.has(this.#bonusNumber);
  }
}

module.exports = WinningLotto;
