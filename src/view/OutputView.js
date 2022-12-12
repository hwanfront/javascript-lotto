const { Console } = require('@woowacourse/mission-utils');

const OutputView = {

  message(type) {
    return {
      LOTTO_COUNT: '개를 구매했습니다.\n',
      PRIZE_RESULT_TITLE: '당첨 통계\n---\n',
      PROFIT_PREFIX: '총 수익률은',
      PROFIT_SUFFIX: '%입니다.\n',
    }[type] ?? '해당 없음';
  },
  printLottoCount(count) {
    Console.print(`${count}${OutputView.message('LOTTO_COUNT')}`);
  },
  printLottos(lotto) {
    Console.print(`${lotto}\n`);
  },
  printPrizeResult(prizes) {
    Console.print(OutputView.message('PRIZE_RESULT_TITLE'));
    Console.print(`${prizes}\n`);
  },
  printProfit(profit) {
    Console.print(`${OutputView.message('PROFIT_PREFIX')} ${profit}${OutputView.message('PROFIT_SUFFIX')}`);
  },
};

module.exports = OutputView;
