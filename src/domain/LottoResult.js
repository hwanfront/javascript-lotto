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

  calculatePrize({ count, hasBonus }) {
    const prize = Prize.calculate({ count, hasBonus });
    if (!this.prizes.has(prize)) {
      return;
    }

    const prevPrizeCount = this.prizes.get(prize);
    this.prizes.set(prize, prevPrizeCount + 1);
  }

  calculateProfit(lottoCount) {
    return (this.#calculateTotalPrizeAmount() * 100) / (lottoCount * 1000);
  }

  #calculateTotalPrizeAmount() {
    return [...this.prizes].reduce((total, prize) => {
      const [name, count] = prize;
      return total + Prize.getAmount(name) * count;
    }, 0);
  }
}

module.exports = LottoResult;
