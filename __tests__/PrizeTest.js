const Prize = require('../src/domain/Prize');

describe('Judgment 클래스 테스트', () => {
  test.each([
    [{ count: 6, hasBonus: false }, 'FIRST'],
    [{ count: 5, hasBonus: true }, 'SECOND'],
    [{ count: 5, hasBonus: false }, 'THIRD'],
    [{ count: 4, hasBonus: false }, 'FOURTH'],
    [{ count: 3, hasBonus: false }, 'FIFTH'],
    [{ count: 2, hasBonus: false }, 'NONE'],
    [{ count: 0, hasBonus: false }, 'NONE'],
  ])('prize를 계산한다.', ({ count, hasBonus }, result) => {
    const prize = Prize.calculate({ count, hasBonus });
    expect(prize).toEqual(result);
  });

  test.each([
    ['FIFTH', 5_000],
    ['FOURTH', 50_000],
    ['THIRD', 1_500_000],
    ['SECOND', 30_000_000],
    ['FIRST', 2_000_000_000],
  ])('prize에 따른 상금을 출력한다.', (name, result) => {
    const amount = Prize.getAmount(name);
    expect(amount).toEqual(result);
  });

  test.each([
    ['FIFTH', 0, '3개 일치 (5,000원) - 0개'],
    ['FIFTH', 1, '3개 일치 (5,000원) - 1개'],
    ['FOURTH', 2, '4개 일치 (50,000원) - 2개'],
    ['THIRD', 3, '5개 일치 (1,500,000원) - 3개'],
    ['SECOND', 4, '5개 일치, 보너스 볼 일치 (30,000,000원) - 4개'],
    ['FIRST', 5, '6개 일치 (2,000,000,000원) - 5개'],
  ])('prize와 개수에 따른 출력 결과를 출력한다.', (name, count, result) => {
    const amount = Prize.toString(name, count);
    expect(amount).toEqual(result);
  });
});
