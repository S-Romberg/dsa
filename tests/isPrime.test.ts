// (only divisible by 1 and itself)

import isPrime from '../algorithms/isPrime';
import { benchmark } from '../utils/benchmark';
import { memoryBenchmark } from '../utils/memoryBenchmark';

describe('isPrime', () => {
    test('should return true for prime', () => {
        expect(isPrime(11)).toBe(true);
    });

    test('should return false for non prime values', () => {
        expect(isPrime(8)).toBe(false);
    });
});
