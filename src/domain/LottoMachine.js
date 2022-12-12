const Lotto = require('./Lotto');
const RandomLottoGenerator = require('./RandomLottoGenerator');

class LottoMachine {
  static #PRICE = 1000;

  static insert(money) {
    const lottoCount = LottoMachine.#count(money);
    return Array.from({ length: lottoCount }, LottoMachine.#create);
  }

  static #count(money) {
    return Number(money) / LottoMachine.#PRICE;
  }

  static #create() {
    return new Lotto(RandomLottoGenerator.generate());
  }
}

module.exports = LottoMachine;
