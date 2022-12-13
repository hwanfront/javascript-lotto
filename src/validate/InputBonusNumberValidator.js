const CommonValidator = require('./CommonValidator');
const LottoNumberValidator = require('./LottoNumberValidator');

const InputBonusNumberValidator = {
  validate(value) {
    const number = Number(value);
    CommonValidator.checkIsNumber(number);
    LottoNumberValidator.validate(number);
  },
};

module.exports = InputBonusNumberValidator;
