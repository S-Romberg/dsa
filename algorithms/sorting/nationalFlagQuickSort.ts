function sortColors_efficient(nums: number[]): void {
  let low = 0, mid = 0, high = nums.length - 1;

  while (mid <= high) {
    if (nums[mid] === 0) {
      // Swap nums[mid] with nums[low]
      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      mid++;
    } else { // nums[mid] === 2
      // Swap nums[mid] with nums[high]
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--;
  }}
}
function sortColors(nums: number[]): void {
  let last_zero_index: number = 0 
  let last_two_index: number = nums.length - 1

  nums.forEach((num, i) => {
    if(num === 0 && last_zero_index < i) {
      console.log(nums[i], " is 0 and index is", i, "last zero index is ", last_zero_index);
      [nums[i], nums[last_zero_index]] = [nums[last_zero_index],nums[i]]
      last_zero_index++
    }
  })
  for(let j = nums.length; j >= 0; j--) {
    if(nums[j] === 2 && last_two_index > j) {
      console.log(`nums before swap of ${nums[j]} at ${j} and ${nums[last_two_index]} at ${last_two_index}`, nums);
      [nums[j], nums[last_two_index]] = [nums[last_two_index], nums[j]]
      console.log('nums after swap: ', nums);
      last_two_index--
    }
  }
};
// Test cases for sortColors
const test1 = [2, 0, 2, 1, 1, 0]
console.log('Test 1 - Input:', test1)
sortColors(test1)
console.log('Test 1 - Expected: [0, 0, 1, 1, 2, 2]')
console.log('Test 1 - Output:', test1)

const test2 = [2, 0, 1]
console.log('\nTest 2 - Input:', test2)
sortColors(test2)
console.log('Test 2 - Expected: [0, 1, 2]')
console.log('Test 2 - Output:', test2)