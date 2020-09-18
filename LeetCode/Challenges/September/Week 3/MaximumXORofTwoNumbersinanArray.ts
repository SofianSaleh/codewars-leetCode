// Given a non-empty array of numbers, a0, a1, a2, … , an-1, where 0 ≤ ai < 231.

// Find the maximum result of ai XOR aj, where 0 ≤ i, j < n.

// Could you do this in O(n) runtime?

// Example:

// Input: [3, 10, 5, 25, 2, 8]

// Output: 28

// Explanation: The maximum result is 5 ^ 25 = 28.

// XOR:
/**
 * Num  Ans
 * 0 0   0
 * 1 0   1
 * 0 1   1 
 * 1 1   0
 */


// ######################## TYPESCRIPT ########################
// Time Complexity Object(n^2)
function findMaximumXOR(nums: number[]): number {
    let ans: number = 0
    let n: number = nums.length

    for (let i: number = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            ans = Math.max(ans, nums[i] ^ nums[j])
        }
    }
    return ans
};
console.log(findMaximumXOR([3, 10, 5, 25, 2, 8]))

// ######################## JAVASCRIPT ########################

/**
 * @param {number[]} nums
 * @return {number}
 */
// var findMaximumXOR = function (nums) {
//     let ans = 0
//     let n = nums.length

//     for (let i = 0; i < n; i++) {
//         for (let j = i + 1; j < n; j++) {
//             ans = Math.max(ans, nums[i] ^ nums[j])
//         }
//     }
//     return ans
// };

// ######################## PYTHON ########################

// class Solution(object):
//     def findMaximumXOR(self, nums):
//         """
//         :type nums: List[int]
//         :rtype: int
//         """
//         ans: int = 0
//         n: int = len(nums)

//         for i in range(n):
//             for j in range(i + 1, n):
//                 ans = max(ans, nums[i] ^ nums[j])
//         return ans



// ######################## PYTHON3 ########################

// class Solution:
//     def findMaximumXOR(self, nums: List[int]) -> int:
//         ans: int = 0
//         n: int = len(nums)

//         for i in range(n):
//             for j in range(i + 1, n):
//                 ans = max(ans, nums[i] ^ nums[j])
//         return ans

