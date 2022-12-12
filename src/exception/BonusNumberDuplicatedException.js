const Exception = require('./Exception');

class BonusNumberDuplicatedException extends Exception {
  static #ERROR_MESSAGE = '보너스 번호가 로또 번호와 중복됩니다.';

  constructor() {
    super(BonusNumberDuplicatedException.#ERROR_MESSAGE);
  }
}

module.exports = BonusNumberDuplicatedException;
