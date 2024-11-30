const maxValue = (arr: number[]): number => {
    let max = arr[0];
    arr.forEach(i => {
        if(i >= max) {
            max = i;
        }
    })
    return max;
}

export default maxValue;