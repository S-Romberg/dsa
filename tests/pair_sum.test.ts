import { pairSum } from '../algorithms/pair_sum'

describe('pairSum', () => {
  test('should find indices of two numbers that sum to target (any order)', () => {
    const result = pairSum([1, 2, 3, 4], 7);
    expect([
      [2, 3],
      [3, 2]
    ]).toContainEqual(result);
  })

  test('should find indices of two numbers that sum to target (any order)', () => {
    const result = pairSum([1, 2, 6, 4], 10);
    expect([
      [2, 3],
      [3, 2]
    ]).toContainEqual(result);
  })

})