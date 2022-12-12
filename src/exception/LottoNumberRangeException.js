const Exception = require('./Exception');

class LottoNumberRangeException extends Exception {
  static #ERROR_MESSAGE = '로또 번호가 범위에 포함되지 않습니다.';

  constructor() {
    super(LottoNumberRangeException.#ERROR_MESSAGE);
  }
}

module.exports = LottoNumberRangeException;
