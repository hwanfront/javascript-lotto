const Exception = require('./Exception');

class LottoSizeException extends Exception {
  static #ERROR_MESSAGE = '로또 번호는 6개여야 합니다.';

  constructor() {
    super(LottoSizeException.#ERROR_MESSAGE);
  }
}

module.exports = LottoSizeException;
