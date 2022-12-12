const LottoDuplicatedException = require('../exception/LottoDuplicatedException');
const LottoSizeException = require('../exception/LottoSizeException');
const { LOTTO_RANGE } = require('../static/constant');

const LottoValidator = {
  validate(numbers) {
    this.checkSize(numbers);
    this.checkDuplicate(numbers);
  },
  checkSize(numbers) {
    if (numbers.length !== LOTTO_RANGE.size) {
      throw new LottoSizeException();
    }
  },
  checkDuplicated(numbers) {
    if (new Set(numbers).size !== LOTTO_RANGE.size) {
      throw new LottoDuplicatedException();
    }
  },
};

LottoValidator.validate([1, 2, 3, 4, 4]);

module.exports = LottoValidator;
