// Given an integer array nums, return the number of longest increasing subsequences.

// Example 1:

// Input: nums = [1,3,5,4,7]
// Output: 2
// Explanation: The two longest increasing subsequences are [1, 3, 4, 7] and [1, 3, 5, 7].
// Example 2:

// Input: nums = [2,2,2,2,2]
// Output: 5
// Explanation: The length of longest continuous increasing subsequence is 1, and there are 5 subsequences' length is 1, so output 5.

// Constraints:

// 0 <= nums.length <= 2000
// -106 <= nums[i] <= 106

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function (nums) {
  let ans = 0;
  let maxLangth = 0;
  let len;
  let count;

  for (let i = 0; i < nums.length; i++) {
    len.push(1);
    count.push(1);
  }
};

console.log(findNumberOfLIS([1, 3, 5, 4, 7]));

//         for i, num in enumerate(nums):
//             for j in range(i):
//                 if nums[j] < num:
//                     if length[i] == length[j] + 1:
//                         count[i] += count[j]
//                     elif length[i] < length[j] + 1:
//                         length[i] = length[j] + 1
//                         count[i] = count[j]
//             if maxLength == length[i]:
//                 ans += count[i]
//             elif maxLength < length[i]:
//                 maxLength = length[i]
//                 ans = count[i]

//         return ans
