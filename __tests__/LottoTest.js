const Lotto = require('../src/domain/Lotto');
const LottoSizeException = require('../src/exception/LottoSizeException');
const LottoDuplicatedException = require('../src/exception/LottoDuplicatedException');
const LottoNumberRangeException = require('../src/exception/LottoNumberRangeException');

describe('로또 클래스 테스트', () => {
  test.each([
    [[1, 2, 3, 4, 5, 6], 1, true],
    [[1, 2, 3, 4, 5, 6], 7, false],
  ])('로또 번호에 숫자가 존재하는지 확인한다.', (numbers, number, result) => {
    const lotto = new Lotto(numbers);
    expect(lotto.has(number)).toEqual(result);
  });

  test.each([
    [[1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6], 6],
    [[1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12], 0],
    [[1, 2, 3, 4, 5, 6], [4, 5, 6, 7, 8, 9], 3],
  ])('로또 번호들 끼리 같은 숫자가 몇 개 인지 확인한다.', (numbers1, numbers2, count) => {
    const lotto1 = new Lotto(numbers1);
    const lotto2 = new Lotto(numbers2);
    expect(lotto1.countSameNumbers(lotto2)).toEqual(count);
  });

  test.each([
    [[1, 2, 3, 4, 5, 46]],
    [[0, 2, 3, 4, 5, 6]],
  ])('로또 번호들에 범위를 벗어난 숫자가 있으면 예외가 발생한다.', (numbers) => {
    expect(() => {
      new Lotto(numbers);
    }).toThrow(LottoNumberRangeException);
  });

  test.each([
    [[1, 2, 3, 4, 5, 6, 7]],
    [[1, 2, 3, 4, 5]],
  ])('로또 번호의 개수가 6개가 아니면 예외가 발생한다.', (numbers) => {
    expect(() => {
      new Lotto(numbers);
    }).toThrow(LottoSizeException);
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(LottoDuplicatedException);
  });
});
