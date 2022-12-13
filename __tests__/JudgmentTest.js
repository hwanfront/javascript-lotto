const Judgment = require('../src/domain/Judgment');
const Lotto = require('../src/domain/Lotto');
const WinningLotto = require('../src/domain/WinningLotto');

describe('Judgment 클래스 테스트', () => {
  test.each([
    [{ count: 6 }, 'FIRST'],
    [{ count: 5, hasBonus: true }, 'SECOND'],
    [{ count: 5, hasBonus: false }, 'THIRD'],
    [{ count: 4 }, 'FOURTH'],
    [{ count: 3 }, 'FIFTH'],
    [{ count: 2 }, 'NONE'],
    [{ count: 0 }, 'NONE'],
  ])('Prize를 계산한다.', ({ count, hasBonus }, result) => {
    const prize = Judgment.calculatePrize({ count, hasBonus });
    expect(prize).toEqual(result);
  });

  test.each([
    [[1, 2, 3, 4, 5, 6], [[1, 2, 3, 4, 5, 6], 7], 6],
    [[1, 2, 3, 4, 5, 6], [[7, 8, 9, 10, 11, 12], 6], 0],
    [[1, 2, 3, 4, 5, 6], [[4, 5, 6, 7, 8, 9], 10], 3],
  ])('당첨 번호에 로또 번호가 몇 개 일치하는지 확인한다.', (numbers, [winningNumbers, bonusNumber], result) => {
    const lotto = new Lotto(numbers);
    const winningLotto = new WinningLotto(winningNumbers, bonusNumber);
    const count = Judgment.compareNumbers({ lotto, winningLotto });
    expect(count).toEqual(result);
  });

  test.each([
    [[1, 2, 3, 4, 5, 6], [[1, 2, 3, 4, 5, 6], 7], false],
    [[1, 2, 3, 4, 5, 6], [[7, 8, 9, 10, 11, 12], 6], true],
  ])('보너스 번호가 로또 번호에 있는지 확인한다.', (numbers, [winningNumbers, bonusNumber], result) => {
    const lotto = new Lotto(numbers);
    const winningLotto = new WinningLotto(winningNumbers, bonusNumber);
    const hasBonus = Judgment.findBonus({ lotto, winningLotto });
    expect(hasBonus).toEqual(result);
  });
});
