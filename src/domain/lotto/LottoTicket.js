const Lotto = require('./Lotto');
const InstanceException = require('../../exception/InstanceException');
const { createRandomNumbers } = require('../generator/NumberGenerator');

class LottoTicket {
  #lottos;

  constructor(count) {
    const lottos = LottoTicket.createRandomLotto(count);
    LottoTicket.validate(lottos);
    this.#lottos = lottos;
  }

  static of(count) {
    return new LottoTicket(count);
  }

  static validate(lottos) {
    lottos.forEach(LottoTicket.validateIsTicket);
  }

  static validateIsTicket(lotto) {
    if (!(lotto instanceof Lotto)) {
      throw new InstanceException('Lotto');
    }
  }

  static createRandomLotto(count) {
    return Array.from({ length: count }, () => Lotto.of(createRandomNumbers()));
  }

  forEach(callback) {
    this.#lottos.forEach(callback);
  }

  toString() {
    return `${this.#lottos.map(((lotto) => lotto.toString())).join('\n')}\n`;
  }
}

module.exports = LottoTicket;
