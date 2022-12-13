const { LOTTO_PRICE } = require('../static/constant');
const LottoAmountValidator = require('../validate/LottoAmountValidator');
const Lotto = require('./Lotto');
const RandomLottoGenerator = require('./RandomLottoGenerator');

class LottoMachine {
  static countPurchase(money) {
    LottoAmountValidator.validate(money);
    return Number(money) / LOTTO_PRICE;
  }

  static insert(count) {
    return Array.from({ length: count }, LottoMachine.#create);
  }

  static #create() {
    return new Lotto(RandomLottoGenerator.generate());
  }
}

module.exports = LottoMachine;
