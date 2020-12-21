// Given an array A of integers, for each integer A[i] we need to choose either x = -K or x = K, and add x to A[i] (only once).

// After this process, we have some array B.

// Return the smallest possible difference between the maximum value of B and the minimum value of B.

// Example 1:

// Input: A = [1], K = 0
// Output: 0
// Explanation: B = [1]
// Example 2:

// Input: A = [0,10], K = 2
// Output: 6
// Explanation: B = [2,8]
// Example 3:

// Input: A = [1,3,6], K = 3
// Output: 3
// Explanation: B = [4,6,3]

// Note:

// 1 <= A.length <= 10000
// 0 <= A[i] <= 10000
// 0 <= K <= 10000

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var smallestRangeII = function (A, K) {
  A.sort();

  let ans = A[A.length - 1] - A[0];
  let left = A[0] + K;
  let right = A[A.length - 1] - K;
  console.log(ans, right, left);

  for (let i = 0; i < A.length; i++) {
    let min = Math.min(left, A[i + 1] - K);
    let max = Math.max(right, A[i] + K);
    ans = Math.min(ans, max - min);
  }
  return ans;
};
console.log(smallestRangeII([1], 0));
// console.log(smallestRangeII([0, 10], 2));
// console.log(smallestRangeII([1, 3, 6], 3));
