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
  let ans = [];

  dfs(s, 0, [], ans);

  return ans;
};

var dfs = function (s, start, path, ans) {
  if (start == s.length()) {
    ans.push(path);
    return;
  }
  for (let i = start; i < s.length; ++i) {
    if (isPalindrome(s, start, i)) {
      path.add(s.substring(start, i + 1));
      dfs(s, i + 1, path, ans);
      path.remove(path.size() - 1);
    }
  }
};

//     private boolean isPalindrome(final String s, int l, int r) {
//       while (l < r)
//         if (s.charAt(l++) != s.charAt(r--))
//           return false;
//       return true;
//     }
//   }
