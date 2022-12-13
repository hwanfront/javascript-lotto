const { LOTTO_PRICE } = require('../static/constant');
const Exception = require('./Exception');

class LottoMoneyNotDividedException extends Exception {
  static #ERROR_MESSAGE = `로또 가격이 ${LOTTO_PRICE}으로 나누어지지 않습니다.`;

  constructor() {
    super(LottoMoneyNotDividedException.#ERROR_MESSAGE);
  }
}

module.exports = LottoMoneyNotDividedException;
