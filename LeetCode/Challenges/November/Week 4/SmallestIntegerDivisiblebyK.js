// Given a positive integer K, you need to find the length of the smallest positive integer N such that N is divisible by K, and N only contains the digit 1.

// Return the length of N. If there is no such N, return -1.

// Note: N may not fit in a 64-bit signed integer.

// Example 1:

// Input: K = 1
// Output: 1
// Explanation: The smallest answer is N = 1, which has length 1.
// Example 2:

// Input: K = 2
// Output: -1
// Explanation: There is no such positive integer N divisible by 2.
// Example 3:

// Input: K = 3
// Output: 3
// Explanation: The smallest answer is N = 111, which has length 3.

// Constraints:

// 1 <= K <= 105

/**
 * @param {number} K
 * @return {number}
 */
var smallestRepunitDivByK = function (K) {
  if (![1, 3, 7, 9].includes(K % 10)) return -1;

  let seen = new Set();
  let N = 0;

  for (let i = 1; i < k + 1; i++) {
    N = (N * 10 + 1) % K;
  }
};

//         for length in range(1, K + 1):
//             N = (N * 10 + 1) % K
//             if N == 0:
//                 return length
//             if N in seen:
//                 return -1
//             seen.add(N)

//         return -1
