const CommonValidator = require('./CommonValidator');
const LottoMoneyValidator = require('./LottoMoneyValidator');

const InputLottoMoneyValidator = {
  validate(value) {
    const money = Number(value);
    CommonValidator.checkIsNumber(money);
    LottoMoneyValidator.validate(money);
  },
};

module.exports = InputLottoMoneyValidator;
