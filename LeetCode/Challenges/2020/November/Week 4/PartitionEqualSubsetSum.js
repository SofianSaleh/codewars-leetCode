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
// var canPartition = function (nums) {
//   let sum = 0;
//   for (const num of nums) {
//     sum += num;
//   }

//   if (sum % 2 == 1) return false;

//   let dp = [true] * [false] * Math.floor(sum / 2);
//   console.log(dp);
//   for (const n of nums) {
//     for (let i = Math.floor(sum / 2); i < n - 1; i--) {
//       dp[i] = dp[i] || dp[i - n];
//     }
//   }
//   console.log(dp);
//   return dp[Math.floor(sum / 2)];
// };

let canPartition = function (num) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) sum += num[i];

  if (sum % 2 !== 0) return false;

  return canPartitionRecursive(num, sum / 2, 0);
};

function canPartitionRecursive(num, sum, currentIndex) {
  if (sum === 0) return true;

  if (num.length === 0 || currentIndex >= num.length) return false;

  if (num[currentIndex] <= sum) {
    if (canPartitionRecursive(num, sum - num[currentIndex], currentIndex + 1))
      return true;
  }

  return canPartitionRecursive(num, sum, currentIndex + 1);
}

console.log(canPartition([1, 5, 11, 5]));
