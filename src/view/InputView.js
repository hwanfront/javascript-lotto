const { Console } = require('@woowacourse/mission-utils');
const InputLottoNumbersValidator = require('../validate/InputLottoNumbersValidator');

const InputView = {
  message(type) {
    return {
      INPUT_LOOTO_PRICE: '구입금액을 입력해 주세요.\n',
      INPUT_LOTTO_NUMBERS: '당첨 번호를 입력해 주세요.\n',
      INPUT_BONUS_NUMBER: '보너스 번호를 입력해 주세요.\n',
    }[type] ?? '해당 없음';
  },
  readLottoPrice(callback) {
    Console.readLine(InputView.message('INPUT_LOOTO_PRICE'), callback);
  },
  readLottoNumbers(callback) {
    Console.readLine(InputView.message('INPUT_LOTTO_NUMBERS'), (value) => {
      InputLottoNumbersValidator.validate(value);
      callback(value);
    });
  },
  readBonusNumber(callback) {
    Console.readLine(InputView.message('INPUT_BONUS_NUMBER'), callback);
  },
};

InputView.readLottoNumbers((message) => { console.log(message); });

module.exports = InputView;
