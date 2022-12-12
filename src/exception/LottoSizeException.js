const Exception = require('./Exception');

class LottoSizeException extends Exception {
  static #ERROR_MESSAGE = '로또 번호 중 중복된 값들이 있습니다.';

  constructor() {
    super(LottoSizeException.#ERROR_MESSAGE);
  }
}

module.exports = LottoSizeException;
