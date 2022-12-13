const Judgment = require('../domain/Judgment');
const LottoMachine = require('../domain/LottoMachine');
const LottoResult = require('../domain/LottoResult');
const WinningLotto = require('../domain/WinningLotto');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');

class Controller {
  #spendMoney;

  #lottos;

  #lottoResult;

  static create() {
    return new Controller();
  }

  start() {
    this.#lottoResult = new LottoResult();
    InputView.readLottoPrice(this.#answerLottoPrice.bind(this));
  }

  #answerLottoPrice(value) {
    this.#spendMoney = Number(value);
    this.#buyLottos();
    InputView.readLottoNumbers(this.#answerLottoNumbers.bind(this));
  }

  #buyLottos() {
    const lottoCount = LottoMachine.purchase(this.#spendMoney);
    const lottos = LottoMachine.createLottos(lottoCount);
    this.#lottos = lottos;
    this.#printBuyLottosInfo(lottoCount);
  }

  #printBuyLottosInfo(lottoCount) {
    OutputView.printLottoCount(lottoCount);
    OutputView.printLottos(this.#lottos.map((lotto) => lotto.toString()));
  }

  #answerLottoNumbers(value) {
    const lottoNumbers = value.split(',').map(Number);
    OutputView.printBlank();
    InputView.readBonusNumber(this.#answerBonusNumbers(lottoNumbers).bind(this));
  }

  #answerBonusNumbers(lottoNumbers) {
    return (value) => {
      const bonusNumber = Number(value);
      const winningLotto = new WinningLotto(lottoNumbers, bonusNumber);
      this.#addLottosPrize(winningLotto);
      this.#printResult();
      InputView.close();
    };
  }

  #addLottosPrize(winningLotto) {
    this.#lottos.forEach(this.#addLottoPrize(winningLotto).bind(this));
  }

  #addLottoPrize(winningLotto) {
    return (lotto) => {
      const count = Judgment.compareNumbers({ lotto, winningLotto });
      const hasBonus = Judgment.findBonus({ lotto, winningLotto });
      const prize = Judgment.calculatePrize({ count, hasBonus });
      this.#lottoResult.addPrize(prize);
    };
  }

  #printResult() {
    OutputView.printBlank();
    OutputView.printPrizeResult(this.#lottoResult.toString());
    OutputView.printProfit(this.#lottoResult.calculateProfit(this.#spendMoney));
  }
}

module.exports = Controller;
