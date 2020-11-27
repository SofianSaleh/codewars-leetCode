// Given a non-empty array nums containing only positive integers, find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.

// Example 1:

// Input: nums = [1,5,11,5]
// Output: true
// Explanation: The array can be partitioned as [1, 5, 5] and [11].
// Example 2:

// Input: nums = [1,2,3,5]
// Output: false
// Explanation: The array cannot be partitioned into equal sum subsets.

// Constraints:

// 1 <= nums.length <= 200
// 1 <= nums[i] <= 100

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  let sum = 0;
  for (const num of nums) {
    sum += num;
  }

  if (sum % 2 == 1) return false;

  let dp = [true] * [false] * Math.floor(sum / 2);

  for (const n of nums) {
    for (let i = Math.floor(sum / 2); i < num - 1; i--) {
      dp[i];
    }
  }
};

// class Solution:
//     def canPartition(self, nums: List[int]) -> bool:
//         summ = sum(nums)

//         if summ & 1:
//             return False

//         dp = [True] + [False] * (summ // 2)

//         for num in nums:
//             for w in range(summ // 2, num - 1, -1):
//                 dp[w] = dp[w] or dp[w - num]

//         return dp[summ // 2]
