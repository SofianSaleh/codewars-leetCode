// Given a string s, remove duplicate letters so that every letter appears once and only once. You must make sure your result is the smallest in lexicographical order among all possible results.

// Note: This question is the same as 1081: https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/

// Example 1:

// Input: s = "bcabc"
// Output: "abc"
// Example 2:

// Input: s = "cbacdcbc"
// Output: "acdb"

// Constraints:

// 1 <= s.length <= 104
// s consists of lowercase English letters.

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
  let dub = {};
  s = s.split('');

  for (let i = 0; i < s.length; i++) {
    if (!dub[s[i]]) {
      dub[s[i]] = 1;
    } else {
      dub[s[i]] += 1;
    }
  }
  let keys = Object.keys(dub);
  let values = Object.values(dub);
  for (let i = 0; i < keys.length; i++) {
    // console.log(Object.keys(dub).length, Object.values(dub)[i]);
    if (values[i] > 1) {
      for (let j = 0; j < values[i] - 1; j++) {
        s.splice(s.indexOf(keys[i]), 1);
      }
    }
    // console.log(s);
  }
  return s.sort().join('');
};

// console.log(removeDuplicateLetters('bcabc'));
console.log(removeDuplicateLetters('cbacdcbc'));
// console.log(removeDuplicateLetters('cbaa'));
