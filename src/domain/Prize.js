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
}

module.exports = Prize;
