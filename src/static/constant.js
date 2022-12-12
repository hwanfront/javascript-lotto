const LOTTO_RANGE = Object.freeze({
  min: 1,
  max: 45,
  size: 6,
});

const PRIZE = Object.freeze({
  fifth: 'FIFTH',
  fourth: 'FOURTH',
  third: 'THIRD',
  second: 'SECOND',
  first: 'FIRST',
});

const PRIZE_MATCH_COUNT = Object.freeze({
  fifth: 3,
  fourth: 4,
  third: 5,
  second: 5,
  first: 6,
});

module.exports = {
  LOTTO_RANGE,
  PRIZE,
  PRIZE_MATCH_COUNT,
};
