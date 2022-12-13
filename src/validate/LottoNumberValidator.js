const LottoNumberRangeException = require('../exception/LottoNumberRangeException');
const { LOTTO_RANGE } = require('../static/constant');

const LottoNumberValidator = {
  validate(number) {
    this.checkMinRange(number);
    this.checkMaxRange(number);
  },
  checkMinRange(number) {
    if (number < LOTTO_RANGE.min) {
      throw new LottoNumberRangeException();
    }
  },
  checkMaxRange(number) {
    if (number > LOTTO_RANGE.max) {
      throw new LottoNumberRangeException();
    }
  },
};

module.exports = LottoNumberValidator;
