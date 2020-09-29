// Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.

// Note:

// The same word in the dictionary may be reused multiple times in the segmentation.
// You may assume the dictionary does not contain duplicate words.
// Example 1:

// Input: s = "leetcode", wordDict = ["leet", "code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".
// Example 2:

// Input: s = "applepenapple", wordDict = ["apple", "pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
//              Note that you are allowed to reuse a dictionary word.
// Example 3:

// Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
// Output: false

function wordBreak(s: string, wordDict: string[]): boolean {
  function breaker(s: string) {
    if (s in memo) return memo[s];
    if (s in word) {
      memo[s] = true;
      return true;
    }
    for (let i = 0; i < s.length; i++) {
      const element = s.length;
      if (word[s.slice(0, i)] && breaker(s.slice(i))) {
        memo[s] = true;
        return true;
      }
    }
    memo[s] = false;
    return false;
  }

  let memo = {};
  let word = new Set(wordDict);
  return breaker(s);
}

console.log(wordBreak('leetcode', ['leet', 'code']));
console.log(wordBreak('applepenapple', ['apple', 'pen']));
console.log(wordBreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat']));
