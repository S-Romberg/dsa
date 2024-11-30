const isPrimeInefficient = (num) => {
// Iterate through all numbers below the num and above one and divide, if its evenly divisible then we return false
    for(let i=2; i < num; i++) {
       if (num % i == 0) {
            return true
       }
    }
}

// Time: O(sqrt(n))
// Spave: O(1)
const isPrime = (num: number): boolean => {
    if (num < 2) {
      return false
    }
    // All numbers up to the sqrt of the number
    const sqrt: number = Math.sqrt(num)
    for(let i:number = 2; i < sqrt; i++) {
       if (num % i == 0) {
            return false 
       }
    }
    return true
}

export default isPrime;