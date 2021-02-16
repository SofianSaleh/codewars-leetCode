// Given a string S, we can transform every letter individually to be lowercase or uppercase to create another string.

// Return a list of all possible strings we could create. You can return the output in any order.

// Example 1:

// Input: S = "a1b2"
// Output: ["a1b2","a1B2","A1b2","A1B2"]
// Example 2:

// Input: S = "3z4"
// Output: ["3z4","3Z4"]
// Example 3:

// Input: S = "12345"
// Output: ["12345"]
// Example 4:

// Input: S = "0"
// Output: ["0"]

// Constraints:

// S will be a string with length between 1 and 12.
// S will consist only of letters or digits.

String.prototype.setCharAt = function (index, chr) {
  if (index > this.length - 1) return str;
  return this.substr(0, index) + chr + this.substr(index + 1);
};
function letterCasePermutation(S: string): string[] {
  let ans = [];

  function dfs(str: string, i: number, ans: string[]) {
    if (i === str.length) {
      ans.push(str.toString());
      return;
    }

    if (Number.isInteger(str.charAt(i))) {
      dfs(str, i + 1, ans);
      return;
    }
    str.setCharAt(i, str.charAt(i).toLowerCase());
    dfs(str, i + 1, ans);
    str.setCharAt(i, str.charAt(i).toUpperCase());
    dfs(str, i + 1, ans);
  }

  return ans;
}
