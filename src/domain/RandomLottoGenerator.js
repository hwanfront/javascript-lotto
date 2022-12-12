const { Random } = require('@woowacourse/mission-utils');

const RandomLottoMaker = {
  LOTTO_NUMBER_MIN: 1,
  LOTTO_NUMBER_MAX: 45,
  LOTTO_LENGTH: 6,
  generate() {
    return Random.pickUniqueNumbersInRange(
      RandomLottoMaker.LOTTO_NUMBER_MIN,
      RandomLottoMaker.LOTTO_NUMBER_MAX,
      RandomLottoMaker.LOTTO_LENGTH,
    );
  },
};

module.exports = RandomLottoMaker;
