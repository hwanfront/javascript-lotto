const BonusNumberDuplicatedException = require('../exception/BonusNumberDuplicatedException');

const BonusNumberValidator = {
  validate({ numbers, bonusNumber }) {
    this.checkDuplicated({ numbers, bonusNumber });
  },
  checkDuplicated({ numbers, bonusNumber }) {
    if (numbers.includes(bonusNumber)) {
      throw new BonusNumberDuplicatedException();
    }
  },
};

module.exports = BonusNumberValidator;
