const { LOTTO_PRICE } = require('../static/constant');
const Exception = require('./Exception');

class LottoMoneyLessThanException extends Exception {
  static #ERROR_MESSAGE = `로또 가격이 ${LOTTO_PRICE}보다 작습니다.`;

  constructor() {
    super(LottoMoneyLessThanException.#ERROR_MESSAGE);
  }
}

module.exports = LottoMoneyLessThanException;
