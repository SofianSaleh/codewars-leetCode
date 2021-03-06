// Given a string s, the power of the string is the maximum length of a non-empty substring that contains only one unique character.

// Return the power of the string.

// Example 1:

// Input: s = "leetcode"
// Output: 2
// Explanation: The substring "ee" is of length 2 with the character 'e' only.
// Example 2:

// Input: s = "abbcccddddeeeeedcba"
// Output: 5
// Explanation: The substring "eeeee" is of length 5 with the character 'e' only.
// Example 3:

// Input: s = "triplepillooooow"
// Output: 5
// Example 4:

// Input: s = "hooraaaaaaaaaaay"
// Output: 11
// Example 5:

// Input: s = "tourist"
// Output: 1

// Constraints:

// 1 <= s.length <= 500
// s contains only lowercase English letters.

var maxPower = function (s) {
  let counter = 1;
  let ans = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      counter += 1;
    } else {
      ans.push(counter);
      counter = 1;
    }
  }
  ans.push(counter);
  return Math.max(...ans);
};
// console.log(maxPower('cc'));
// console.log(maxPower('leetcode'));
// console.log(maxPower('abbcccddddeeeeedcba'));
// console.log(maxPower('triplepillooooow'));
// console.log(maxPower('hooraaaaaaaaaaay'));
// console.log(maxPower('tourist'));
