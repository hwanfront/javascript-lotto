const { LOTTO_PRICE } = require('../static/constant');
const LottoMoneyValidator = require('../validate/LottoMoneyValidator');
const Lotto = require('./Lotto');
const RandomLottoGenerator = require('./RandomLottoGenerator');

class LottoMachine {
  static purchase(money) {
    LottoMoneyValidator.validate(money);
    return Number(money) / LOTTO_PRICE;
  }

  static createLottos(count) {
    return Array.from({ length: count }, LottoMachine.#createLotto);
  }

  static #createLotto() {
    return new Lotto(RandomLottoGenerator.generate());
  }
}

module.exports = LottoMachine;
