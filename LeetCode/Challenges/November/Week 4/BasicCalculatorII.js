// Implement a basic calculator to evaluate a simple expression string.

// The expression string contains only non-negative integers, +, -, *, / operators and empty spaces . The integer division should truncate toward zero.

// Example 1:

// Input: "3+2*2"
// Output: 7
// Example 2:

// Input: " 3/2 "
// Output: 1
// Example 3:

// Input: " 3+5 / 2 "
// Output: 5
// Note:

// You may assume that the given expression is always valid.
// Do not use the eval built-in library function.

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  let old = -1;
  let nwe = -1;
  let sign, ans;
  s = s.trim();

  for (let i = 0; i < s.length; i++) {
    if (!!parseInt(s[i])) {
      if ((old = -1)) {
        old = parseInt(s[i]);
      } else if ((nwe = -1)) {
        nwe = parseInt(s[i]);

        ans = old;
      }
    } else if (!!obj[s[i]]) {
      sign = obj[s[i]];
    }
  }
};
