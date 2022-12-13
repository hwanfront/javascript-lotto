const Exception = require('./Exception');

class NotNumberException extends Exception {
  static #ERROR_MESSAGE = '값이 숫자가 아닙니다.';

  constructor() {
    super(NotNumberException.#ERROR_MESSAGE);
  }
}

module.exports = NotNumberException;
