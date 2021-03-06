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

/**
 * 225 / 225 test cases passed.
 * Status: Accepted
 * Runtime: 108 ms
 * Memory Usage: 40.8 MB
 */

var findNumberOfLIS = function (nums) {
  let ans = 0;
  let maxLangth = 0;
  let len = [];
  let count = [];

  for (let i = 0; i < nums.length; i++) {
    len.push(1);
    count.push(1);
  }

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        if (len[i] === len[j] + 1) {
          count[i] += count[j];
        } else if (len[i] < len[j] + 1) {
          len[i] = len[j] + 1;
          count[i] = count[j];
        }
      }
    }
    if (maxLangth === len[i]) {
      ans += count[i];
    } else if (maxLangth < len[i]) {
      maxLangth = len[i];
      ans = count[i];
    }
  }
  return ans;
};

// console.log(findNumberOfLIS([1, 3, 5, 4, 7]));
// console.log(findNumberOfLIS([2, 2, 2, 2, 2]));
