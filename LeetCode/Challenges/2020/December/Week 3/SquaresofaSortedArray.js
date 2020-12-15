// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Example 1:

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
// Example 2:

// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums is sorted in non-decreasing order.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let n = nums.length;
  let l = 0;
  let r = n - 1;
  let ans = [];

  for (let i = 0; i < n; i++) {
    ans[i].push(0);
  }

  while (n) {
    n -= 1;

    if (Math.abs(nums[l]) > Math.abs(nums[r])) {
      ans[n] = nums[l] * nums[l];
      l += 1;
    }
  }
};

//         while n:
//             n -= 1
//             if abs(A[l]) > abs(A[r]):
//                 ans[n] = A[l] * A[l]
//                 l += 1
//             else:
//                 ans[n] = A[r] * A[r]
//                 r -= 1

//         return ans
