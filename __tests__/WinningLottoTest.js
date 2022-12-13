const Lotto = require('../src/domain/Lotto');
const WinningLotto = require('../src/domain/WinningLotto');
const BonusNumberDuplicatedException = require('../src/exception/BonusNumberDuplicatedException');
const LottoNumberRangeException = require('../src/exception/LottoNumberRangeException');

describe('WinningLotto 클래스 테스트', () => {
  test.each([
    [[[1, 2, 3, 4, 5, 7], 6], [1, 2, 3, 4, 5, 6], true],
    [[[7, 8, 9, 10, 11, 12], 13], [1, 2, 3, 4, 5, 6], false],
  ])('보너스 번호가 로또 번호에 포함되는지 확인한다.', ([numbers1, bonusNumber], numbers2, result) => {
    const winningLotto = new WinningLotto(numbers1, bonusNumber);
    const lotto = new Lotto(numbers2);
    expect(winningLotto.checkBonus(lotto)).toEqual(result);
  });

  test.each([
    [[1, 2, 3, 4, 5, 6], 0],
    [[0, 2, 3, 4, 5, 6], 46],
  ])('보너스 번호가 범위를 벗어나 있으면 예외가 발생한다.', (numbers, bonusNumber) => {
    expect(() => {
      new WinningLotto(numbers, bonusNumber);
    }).toThrow(LottoNumberRangeException);
  });

  test('로또 번호에 보너스 번호가 중복되면 예외가 발생한다.', () => {
    expect(() => {
      new WinningLotto([1, 2, 3, 4, 5, 6], 6);
    }).toThrow(BonusNumberDuplicatedException);
  });
});
