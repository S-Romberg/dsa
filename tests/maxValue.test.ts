import maxValue from '../algorithms/maxValue';
import { benchmark } from '../utils/benchmark';
import { memoryBenchmark } from '../utils/memoryBenchmark';

describe('maxValue', () => {
    test('should find the maximum value in an array of numbers', () => {
        expect(maxValue([1, 2, 3, 4, 5])).toBe(5);
        expect(maxValue([5, 4, 3, 2, 1])).toBe(5);
        expect(maxValue([-1, -2, -3])).toBe(-1);
        expect(maxValue([1])).toBe(1);
    });

    test('should handle duplicate values', () => {
        expect(maxValue([1, 5, 5, 3, 5])).toBe(5);
        expect(maxValue([2, 2, 2])).toBe(2);
    });

    afterAll(() => {
        // Generate test arrays of different sizes
        const generateInput = (size: number) => {
            return Array.from({ length: size }, () => 
                Math.floor(Math.random() * 1000)
            );
        };

        console.log('\n ======== Max Value ======== \n')
        console.log('\nPerformance Benchmark:');
        benchmark(maxValue, generateInput);

        console.log('\nMemory Usage:');
        memoryBenchmark(maxValue, generateInput);
    });
});
