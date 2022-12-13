const Prize = require('./Prize');

class Judgment {
  static calculatePrize({ count, hasBonus }) {
    return Prize.calculate({ count, hasBonus });
  }

  static compareNumbers({ lotto, winningLotto }) {
    return winningLotto.countSameNumbers(lotto);
  }

  static findBonus({ lotto, winningLotto }) {
    return winningLotto.checkBonus(lotto);
  }
}

module.exports = Judgment;
