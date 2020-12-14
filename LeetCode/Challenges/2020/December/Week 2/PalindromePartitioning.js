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
    for (var endAt = this.length; endAt > beginAt; endAt--) {
      halfLen = Math.floor((endAt - beginAt) / 2);
      if (
        this.substr(beginAt, halfLen) ===
        this.substr(endAt - halfLen, halfLen)
          .split('')
          .reverse()
          .join('')
      ) {
        if (endAt < this.length) {
          arrPal = this.splitByPalindrome(endAt);
          for (idx in arrPal) {
            arrPal[idx].unshift(this.substring(beginAt, endAt));
            retVal.push(arrPal[idx]);
          }
        } else {
          retVal.push([this.substring(beginAt, endAt)]);
        }
      }
    }
  }
  return retVal;
};
