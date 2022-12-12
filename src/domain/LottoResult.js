const { PRIZE, LOTTO_PRICE } = require('../static/constant');
const Prize = require('./Prize');

class LottoResult {
  prizes = new Map();

  constructor() {
    this.prizes = new Map(LottoResult.#initializePrizeMap());
  }

  static #initializePrizeMap() {
    return Object.values(PRIZE).map((name) => [name, 0]);
  }

  calculatePrize({ count, hasBonus }) {
    const prize = Prize.calculate({ count, hasBonus });
    if (!this.prizes.has(prize)) {
      return;
    }

    const prevPrizeCount = this.prizes.get(prize);
    this.prizes.set(prize, prevPrizeCount + 1);
  }

  calculateProfit(lottoCount) {
    return (this.#calculateTotalPrizeAmount() * 100) / (lottoCount * LOTTO_PRICE);
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
