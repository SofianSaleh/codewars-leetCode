// Given an array of integers arr, return true if and only if it is a valid mountain array.

// Recall that arr is a mountain array if and only if:

// arr.length >= 3
// There exists some i with 0 < i < arr.length - 1 such that:
// arr[0] < arr[1] < ... < arr[i - 1] < A[i]
// arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

// Example 1:

// Input: arr = [2,1]
// Output: false
// Example 2:

// Input: arr = [3,5,5]
// Output: false
// Example 3:

// Input: arr = [0,3,2,1]
// Output: true

// Constraints:

// 1 <= arr.length <= 104
// 0 <= arr[i] <= 104

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
    if(arr.length < 3)
};

// def validMountainArray(self, A: List[int]) -> bool:
// if len(A) < 3:
//     return False

// l = 0
// r = len(A) - 1

// while l + 1 < len(A) and A[l] < A[l + 1]:
//     l += 1
// while r > 0 and A[r] < A[r - 1]:
//     r -= 1

// return l > 0 and r < len(A) - 1 and l == r
