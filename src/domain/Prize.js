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
}

module.exports = Prize;
