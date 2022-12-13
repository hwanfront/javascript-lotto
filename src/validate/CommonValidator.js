const NotNumberException = require('../exception/NotNumberException');

const CommonValidator = {
  checkIsNumber(number) {
    if (Number.isNaN(parseInt(number, 10)) || typeof number !== 'number') {
      throw new NotNumberException();
    }
  },
};

module.exports = CommonValidator;
