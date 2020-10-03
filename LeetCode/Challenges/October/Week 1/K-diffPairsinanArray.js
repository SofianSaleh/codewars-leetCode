// Given an array of integers nums and an integer k, return the number of unique k-diff pairs in the array.

// A k-diff pair is an integer pair (nums[i], nums[j]), where the following are true:

// 0 <= i, j < nums.length
// i != j
// a <= b
// b - a == k

// Example 1:

// Input: nums = [3,1,4,1,5], k = 2
// Output: 2
// Explanation: There are two 2-diff pairs in the array, (1, 3) and (3, 5).
// Although we have two 1s in the input, we should only return the number of unique pairs.
// Example 2:

// Input: nums = [1,2,3,4,5], k = 1
// Output: 4
// Explanation: There are four 1-diff pairs in the array, (1, 2), (2, 3), (3, 4) and (4, 5).
// Example 3:

// Input: nums = [1,3,1,5,4], k = 0
// Output: 1
// Explanation: There is one 0-diff pair in the array, (1, 1).
// Example 4:

// Input: nums = [1,2,4,4,3,3,0,9,2,3], k = 3
// Output: 2
// Example 5:

// Input: nums = [-1,-2,-3], k = 1
// Output: 2

// Constraints:

// 1 <= nums.length <= 104
// -107 <= nums[i] <= 107
// 0 <= k <= 107

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
  if (k < 0) return 0;

  let ans = 0;
  let dict = {};
  for (const [index, element] of nums.entries()) {
    console.log(dict[index]);
    if (!dict[index]) {
      dict[index] = element;
    }
  }

  for (const [index, element] of nums.entries()) {
    let target = element + k;
    console.log(dict[target], dict[target], index);
    if (!!dict[target] && dict[target] != index) {
      ans += 1;
      delete dict[target];
    }
  }
  return ans;
};

console.log(findPairs([3, 1, 4, 1, 5], 2));

// #################################### Python  ####################################

// def findPairs( nums, k: int) -> int:
//         if k < 0:
//             return 0

//         ans = 0
//         dict = {num: i for i, num in enumerate(nums)}
//         print(nums,enumerate(nums)

//         for i, num in enumerate(nums):
//             target = num + k
//             print(dict[target], i)
//             if target in dict and dict[target] != i:
//                 ans += 1
//                 del dict[target]

//         return ans
// print(findPairs([3,1,4,1,5], 2))
