const LottoMoneyLessThanException = require('../exception/LottoMoneyLessThanException');
const LottoMoneyNotDividedException = require('../exception/LottoMoneyNotDividedException');
const { LOTTO_PRICE } = require('../static/constant');

const LottoMoneyValidator = {
  validate(number) {
    this.checkLessThan(number);
    this.checkNotDivided(number);
  },
  checkLessThan(number) {
    if (number < LOTTO_PRICE) {
      throw new LottoMoneyLessThanException();
    }
  },
  checkNotDivided(number) {
    if (number % LOTTO_PRICE !== 0) {
      throw new LottoMoneyNotDividedException();
    }
  },
};

module.exports = LottoMoneyValidator;
