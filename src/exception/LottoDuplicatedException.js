const Exception = require('./Exception');

class LottoDuplicatedException extends Exception {
  static #ERROR_MESSAGE = '[ERROR]';

  constructor() {
    super(LottoDuplicatedException.#ERROR_MESSAGE);
  }
}

module.exports = LottoDuplicatedException;
