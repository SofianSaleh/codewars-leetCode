// You are a professional robber planning to rob houses along a street.
// Each house has a certain amount of money stashed, 
// the only constraint stopping you from robbing each of them is that adjacent houses have security system connected
// and it will automatically contact the police if two adjacent houses were broken into on the same night.
// Given a list of non-negative integers representing the amount of money of each house,
//  determine the maximum amount of money you can rob tonight without alerting the police.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
//              Total amount you can rob = 1 + 3 = 4.
// Example 2:

// Input: nums = [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
//              Total amount you can rob = 2 + 9 + 1 = 12.


// Constraints:

// 0 <= nums.length <= 100
// 0 <= nums[i] <= 400


// ######################## TYPESCRIPT ########################

function rob(nums: number[]): number {
    let prev1: number = 0
    let prev2: number = 0

    for (const num of nums) {
        let dp = Math.max(prev1, prev2 + num)
        prev2 = prev1
        prev1 = dp
    }
    return prev1
};
console.log(rob([2, 7, 9, 3, 1])) // 12
console.log(rob([2, 7, 9, 3, 1, 7, 8, 5, 3, 5, 6, 8, 6]))
console.log(rob([2, 7, 9]))
console.log(rob([9, 1, 2, 3, 7, 8, 3, 1]))

// ######################## JAVASCRIPT ########################

// var rob = function(nums) {
//     let prev1 = 0
//     let prev2 = 0

//     for (const num of nums) {
//         let dp = Math.max(prev1, prev2 + num)
//         prev2 = prev1
//         prev1 = dp
//     }
//     return prev1
// };
// ######################## PYTHON ########################

// class Solution:
//     def rob(self, nums: List[int]) -> int:
//         dp1 = 0
//         dp2 = 0

//         for num in nums:
//             temp = dp1
//             dp1 = max(dp1, dp2 + num)
//             dp2 = temp

//         return dp1