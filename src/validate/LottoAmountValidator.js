const LottoAmountLessThanException = require('../exception/LottoAmountLessThanException');
const LottoAmountNotDividedException = require('../exception/LottoAmountNotDividedException');
const { LOTTO_PRICE } = require('../static/constant');

const LottoAmountValidator = {
  validate(number) {
    this.checkLessThan(number);
  },
  checkLessThan(number) {
    if (number < LOTTO_PRICE) {
      throw new LottoAmountLessThanException();
    }
  },
  checkNotDivided(number) {
    if (number % LOTTO_PRICE !== 0) {
      throw new LottoAmountNotDividedException();
    }
  },
};

module.exports = LottoAmountValidator;
