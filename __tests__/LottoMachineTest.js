const LottoMachine = require('../src/domain/LottoMachine');
const LottoMoneyLessThanException = require('../src/exception/LottoMoneyLessThanException');
const LottoMoneyNotDividedException = require('../src/exception/LottoMoneyNotDividedException');

describe('LottoMachine 클래스 테스트', () => {
  test.each([
    [999],
    [0],
  ])('로또 구입 금액이 1000보다 작은 경우 예외처리.', (money) => {
    expect(() => LottoMachine.purchase(money)).toThrow(LottoMoneyLessThanException);
  });

  test.each([
    [1234],
    [2345],
  ])('로또 구입 금액이 1000으로 나누어 떨이지지 않는 경우 예외처리.', (money) => {
    expect(() => LottoMachine.purchase(money)).toThrow(LottoMoneyNotDividedException);
  });

  test.each([
    [5000, 5],
    [10000, 10],
    [1000, 1],
  ])('로또 금액으로 로또를를 구매한 개수를 반환한다.', (money, result) => {
    const count = LottoMachine.purchase(money);
    expect(count).toEqual(result);
  });
});
