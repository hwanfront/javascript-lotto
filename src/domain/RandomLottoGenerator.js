const { Random } = require('@woowacourse/mission-utils');
const { LOTTO_RANGE } = require('../static/constant');

const RandomLottoGenerator = {
  LOTTO_RANGE,
  generate() {
    return Random.pickUniqueNumbersInRange(
      RandomLottoGenerator.LOTTO_RANGE.min,
      RandomLottoGenerator.LOTTO_RANGE.max,
      RandomLottoGenerator.LOTTO_RANGE.size,
    ).sort(this.sortByNumber);
  },
  sortByNumber(a, b) {
    return a - b;
  },
};

module.exports = RandomLottoGenerator;
