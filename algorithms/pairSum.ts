// Iterate through array
// Calculate complement (sum - current) and look for it in hashmap
// If found, return those indexes
// If not found, add current to hashmap, set equal to its index

export const pairSum = (arr: number[], sum: number): number[] | null => {
  const hashMap: Object = {};
  let indexes: null | number[] = null; 
  arr.map((num: number, i: number): boolean => {
    const complement = sum - num;
    if(typeof hashMap[complement] === 'number') {
      indexes = [i, hashMap[complement]]
    }
    hashMap[num] = i
    return false
  })

  return indexes;
}