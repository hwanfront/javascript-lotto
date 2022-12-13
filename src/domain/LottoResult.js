const { PRIZE } = require('../static/constant');
const Prize = require('./Prize');

class LottoResult {
  prizes = new Map();

  constructor() {
    this.prizes = new Map(LottoResult.#initializePrizeMap());
  }

  static #initializePrizeMap() {
    return Object.values(PRIZE).map((name) => [name, 0]);
  }

  addPrize(prize) {
    if (!this.prizes.has(prize)) {
      return;
    }

    const prevPrizeCount = this.prizes.get(prize);
    this.prizes.set(prize, prevPrizeCount + 1);
  }

  calculateProfit(spendMoney) {
    return (this.#calculateTotalPrizeAmount() * 100) / spendMoney;
  }

  #calculateTotalPrizeAmount() {
    return [...this.prizes].reduce(
      (total, [name, count]) => total + Prize.getAmount(name) * count,
      0,
    );
  }

  toString() {
    return [...this.prizes].map(([name, count]) => Prize.toString(name, count)).join('\n');
  }
}

module.exports = LottoResult;
