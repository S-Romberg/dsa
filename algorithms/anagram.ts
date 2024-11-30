const isAnagram = (str: string, str2: string): boolean => {
  if(str.length !== str2.length) { return false }

  const str2Arr: string[] = str2.split('')
  const str2Acc: Object = {} 
  // O(n)
  const str1Obj = str.split('').reduce((str1Acc: Object, str1Char: string, index: number): Object => {
    const str2Char = str2Arr[index]

    str1Acc[str1Char] 
      ? str1Acc[str1Char] += 1
      : str1Acc[str1Char] = 1

    str2Acc[str2Char] 
      ? str2Acc[str2Char] += 1
      : str2Acc[str2Char] = 1

    return str1Acc 
   }, {})

  // O(n)
  return Object.keys(str1Obj).every(char => str1Obj[char] === str2Acc[char])
}

export default isAnagram