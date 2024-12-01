"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.treeIncludes = void 0;
// Depth First
// Recursive is generally depth first for trees
var treeIncludes = function (root, val) {
    if (!root)
        return false;
    if (root.value === val) {
        return true;
    }
    return (0, exports.treeIncludes)(root.left, val) || (0, exports.treeIncludes)(root.right, val);
};
exports.treeIncludes = treeIncludes;
// Breadth First
function sortColors_efficient(nums) {
    var _a, _b;
    var low = 0, mid = 0, high = nums.length - 1;
    while (mid <= high) {
        if (nums[mid] === 0) {
            // Swap nums[mid] with nums[low]
            _a = [nums[mid], nums[low]], nums[low] = _a[0], nums[mid] = _a[1];
            low++;
            mid++;
        }
        else if (nums[mid] === 1) {
            mid++;
        }
        else { // nums[mid] === 2
            // Swap nums[mid] with nums[high]
            _b = [nums[high], nums[mid]], nums[mid] = _b[0], nums[high] = _b[1];
            high--;
        }
    }
}
function sortColors(nums) {
    var _a;
    var last_zero_index = 0;
    var last_two_index = nums.length;
    nums.forEach(function (num, i) {
        var _a;
        if (num === 0 && last_zero_index < i) {
            console.log(nums[i], " is 0 and index is", i, "last zero index is ", last_zero_index);
            _a = [nums[last_zero_index], nums[i]], nums[i] = _a[0], nums[last_zero_index] = _a[1];
            last_zero_index++;
        }
    });
    for (var j = nums.length; j >= 0; j--) {
        if (nums[j] === 2 && last_two_index > j) {
            console.log("nums before swap of ".concat(nums[j], " at ").concat(j, " and ").concat(nums[last_two_index], " at ").concat(last_two_index), nums);
            _a = [nums[last_two_index], nums[j]], nums[j] = _a[0], nums[last_two_index] = _a[1];
            console.log('nums after swap: ', nums);
            last_two_index--;
        }
    }
}
;
// Test cases for sortColors
var test1 = [2, 0, 2, 1, 1, 0];
console.log('Test 1 - Input:', test1);
sortColors(test1);
console.log('Test 1 - Expected: [0, 0, 1, 1, 2, 2]');
console.log('Test 1 - Output:', test1);
var test2 = [2, 0, 1];
console.log('\nTest 2 - Input:', test2);
sortColors(test2);
console.log('Test 2 - Expected: [0, 1, 2]');
console.log('Test 2 - Output:', test2);
