// A message containing letters from A-Z is being encoded to numbers using the following mapping:

// 'A' -> 1
// 'B' -> 2
// ...
// 'Z' -> 26
// Given a non-empty string containing only digits, determine the total number of ways to decode it.

// The answer is guaranteed to fit in a 32-bit integer.

// Example 1:

// Input: s = "12"
// Output: 2
// Explanation: It could be decoded as "AB" (1 2) or "L" (12).
// Example 2:

// Input: s = "226"
// Output: 3
// Explanation: It could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).
// Example 3:

// Input: s = "0"
// Output: 0
// Explanation: There is no character that is mapped to a number starting with '0'. We cannot ignore a zero when we face it while decoding. So, each '0' should be part of "10" --> 'J' or "20" --> 'T'.
// Example 4:

// Input: s = "1"
// Output: 1

// Constraints:

// 1 <= s.length <= 100
// s contains only digits and may contain leading zero(s).

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  //   let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  //   let obj = {};
  //   for (let i = 1; i <= 26; i++) {
  //     obj[str[i - 1]] = i;
  //   }
  //   var decode = function (num,i) {
  //       if()
  //   }
  let n = s.length;
  let dp = [];
  dp[n] = 1;
  dp[n - 1] = isValid(s.charAt(n - 1) ? 1 : 0);

  var isValid = function (c) {
    return '1' <= c && c <= '9';
  };

  var isValid = function (c1, c2) {
    return c1 == '1' || (c1 == '2' && c2 <= '6');
  };
};
console.log(numDecodings('123'));

// class Solution {
//     public int numDecodings(String s) {
//       final int n = s.length();

//       // dp[i] := # of ways to decode s[i..n)
//       int[] dp = new int[n + 1];
//       dp[n] = 1; // ""
//       dp[n - 1] = isValid(s.charAt(n - 1)) ? 1 : 0;

//       for (int i = n - 2; i >= 0; --i) {
//         if (isValid(s.charAt(i)))
//           dp[i] += dp[i + 1];
//         if (isValid(s.charAt(i), s.charAt(i + 1)))
//           dp[i] += dp[i + 2];
//       }

//       return dp[0];
//     }

//   }
