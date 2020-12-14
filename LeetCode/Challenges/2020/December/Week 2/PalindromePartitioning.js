// Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.

// A palindrome string is a string that reads the same backward as forward.

// Example 1:

// Input: s = "aab"
// Output: [["a","a","b"],["aa","b"]]
// Example 2:

// Input: s = "a"
// Output: [["a"]]

// Constraints:

// 1 <= s.length <= 16
// s contains only lowercase English letters.

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  var retVal = [];
  let beginAt = typeof beginAt !== 'undefined' ? beginAt : 0;
  if (beginAt < s.length) {
    for (var endAt = s.length; endAt > beginAt; endAt--) {
      halfLen = Math.floor((endAt - beginAt) / 2);
      if (
        s.substr(beginAt, halfLen) ===
        s
          .substr(endAt - halfLen, halfLen)
          .split('')
          .reverse()
          .join('')
      ) {
        if (endAt < s.length) {
          arrPal = s.splitByPalindrome(endAt);
          for (idx in arrPal) {
            arrPal[idx].unshift(s.substring(beginAt, endAt));
            retVal.push(arrPal[idx]);
          }
        } else {
          retVal.push([s.substring(beginAt, endAt)]);
        }
      }
    }
  }
  return retVal;
};
