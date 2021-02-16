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
function letterCasePermutation(S: string): string[] {}

// class Solution {
//   public List<String> letterCasePermutation(String S) {
//     List<String> ans = new ArrayList<>();

//     dfs(new StringBuilder(S), 0, ans);

//     return ans;
//   }

//   private void dfs(StringBuilder sb, int i, List<String> ans) {
//     if (i == sb.length()) {
//       ans.add(sb.toString());
//       return;
//     }
//     if (Character.isDigit(sb.charAt(i))) {
//       dfs(sb, i + 1, ans);
//       return;
//     }

//     sb.setCharAt(i, Character.toLowerCase(sb.charAt(i)));
//     dfs(sb, i + 1, ans);
//     sb.setCharAt(i, Character.toUpperCase(sb.charAt(i)));
//     dfs(sb, i + 1, ans);
//   }
// }
