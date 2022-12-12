const { PRIZE_MATCH_COUNT, PRIZE } = require('../static/constant');

class Prize {
  static calculate({ count, hasBonus }) {
    return [
      { name: 'NONE', match() { return count < PRIZE_MATCH_COUNT.fifth; } },
      { name: PRIZE.fifth, match() { return count === PRIZE_MATCH_COUNT.fifth; } },
      { name: PRIZE.fourth, match() { return count === PRIZE_MATCH_COUNT.fourth; } },
      { name: PRIZE.third, match() { return count === PRIZE_MATCH_COUNT.third && !hasBonus; } },
      { name: PRIZE.second, match() { return count === PRIZE_MATCH_COUNT.second && hasBonus; } },
      { name: PRIZE.first, match() { return count === PRIZE_MATCH_COUNT.first; } },
    ].find(({ match }) => match())?.name ?? 'NONE';
  }

  static getAmount(name) {
    return {
      [PRIZE.fifth]: 5_000,
      [PRIZE.fourth]: 50_000,
      [PRIZE.third]: 1_500_000,
      [PRIZE.second]: 30_000_000,
      [PRIZE.first]: 2_000_000_000,
    }[name];
  }

  static toString(name, count) {
    return {
      [PRIZE.fifth]: `5등: ${PRIZE_MATCH_COUNT.fifth}개 번호 일치 / ${this.getAmount(name).toLocaleString()}원 - ${count}개`,
      [PRIZE.fourth]: `4등: ${PRIZE_MATCH_COUNT.fourth}개 번호 일치 / ${this.getAmount(name).toLocaleString()}원 - ${count}개`,
      [PRIZE.third]: `3등: ${PRIZE_MATCH_COUNT.third}개 번호 일치 / ${this.getAmount(name).toLocaleString()}원 - ${count}개`,
      [PRIZE.second]: `2등: ${PRIZE_MATCH_COUNT.second}개 번호 + 보너스 번호 일치 / ${this.getAmount(name).toLocaleString()}원 - ${count}개`,
      [PRIZE.first]: `1등: ${PRIZE_MATCH_COUNT.first}개 번호 일치 / ${this.getAmount(name).toLocaleString()}원 - ${count}개`,
    }[name];
  }
}

module.exports = Prize;
