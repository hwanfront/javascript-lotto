class Judgment {
  static compareNumbers({ lotto, winningLotto }) {
    return winningLotto.findSameNumbers(lotto);
  }

  static findBonus({ lotto, winningLotto }) {
    return winningLotto.checkBonus(lotto);
  }
}

module.exports = Judgment;
