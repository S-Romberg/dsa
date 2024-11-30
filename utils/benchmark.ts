export function benchmark<T>(
    fn: (input: T) => any,
    generateInput: (size: number) => T,
    sizes: number[] = [10, 100, 1000, 10000]
): void {
    const results: { size: number; time: number }[] = [];

    sizes.forEach(size => {
        const input = generateInput(size);
        
        const start = process.hrtime.bigint();
        fn(input);
        const end = process.hrtime.bigint();
        
        const timeInMs = Number(end - start) / 1_000_000;
        results.push({ size, time: timeInMs });
    });

    console.table(results);
    
    // Calculate growth rate between consecutive sizes
    for (let i = 1; i < results.length; i++) {
        const growthRate = results[i].time / results[i-1].time;
        const sizeRatio = results[i].size / results[i-1].size;
        console.log(`Growth rate from ${results[i-1].size} to ${results[i].size}: ${growthRate.toFixed(2)}x`);
        console.log(`Size ratio: ${sizeRatio}x`);
    }
} 