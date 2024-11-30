import { memoryUsage } from 'process';

export function memoryBenchmark<T>(
    fn: (input: T) => any,
    generateInput: (size: number) => T,
    sizes: number[] = [10, 100, 1000, 10000]
): void {
    sizes.forEach(size => {
        const input = generateInput(size);
        
        const beforeMemory = memoryUsage().heapUsed;
        fn(input);
        const afterMemory = memoryUsage().heapUsed;
        
        console.log(`Size: ${size}, Memory used: ${(afterMemory - beforeMemory) / 1024} KB`);
    });
} 