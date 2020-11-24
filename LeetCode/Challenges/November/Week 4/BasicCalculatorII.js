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
  let ans = 0;
  let prevNum = 0;
  let currNum = 0;
  let op = '+';

  for (const [i, c] of s.split('').entries()) {
    if (/^\d+$/.test(c)) {
      currNum = currNum * 10 + parseInt(c);
    }
    if ((!/^\d+$/.test(c) && c != ' ') || i == s.length - 1) {
      if (op == '+' || op == '-') {
        ans += prevNum;
        prevNum = op == '+' ? currNum : -currNum;
      } else if (op == '*') prevNum = prevNum * currNum;
      else if (op == '/') {
        if (prevNum < 0) prevNum = math.ceil(prevNum / currNum);
        else prevNum = Math.floor(prevNum / currNum);
      }
      op = c;
      currNum = 0;
    }
  }
  return ans + prevNum;
};
console.log(calculate('3+2*2'));
//         for i, c in enumerate(s):
//             if c.isdigit():
//                 currNum = currNum * 10 + int(c)
//             if not c.isdigit() and c != ' ' or i == len(s) - 1:
//                 if op == '+' or op == '-':
//                     ans += prevNum
//                     prevNum = currNum if op == '+' else -currNum
//                 elif op == '*':
//                     prevNum = prevNum * currNum
//                 elif op == '/':
//                     if prevNum < 0:
//                         prevNum = math.ceil(prevNum / currNum)
//                     else:
//                         prevNum = prevNum // currNum
//                 op = c
//                 currNum = 0

//         return ans + prevNum
