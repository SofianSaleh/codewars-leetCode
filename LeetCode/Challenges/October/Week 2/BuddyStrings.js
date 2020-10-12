// Given two strings A and B of lowercase letters, return true if you can swap two letters in A so the result is equal to B, otherwise, return false.

// Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at A[i] and A[j]. For example, swapping at indices 0 and 2 in "abcd" results in "cbad".

// Example 1:

// Input: A = "ab", B = "ba"
// Output: true
// Explanation: You can swap A[0] = 'a' and A[1] = 'b' to get "ba", which is equal to B.
// Example 2:

// Input: A = "ab", B = "ab"
// Output: false
// Explanation: The only letters you can swap are A[0] = 'a' and A[1] = 'b', which results in "ba" != B.
// Example 3:

// Input: A = "aa", B = "aa"
// Output: true
// Explanation: You can swap A[0] = 'a' and A[1] = 'a' to get "aa", which is equal to B.
// Example 4:

// Input: A = "aaaaaaabc", B = "aaaaaaacb"
// Output: true
// Example 5:

// Input: A = "", B = "aa"
// Output: false

// Constraints:

// 0 <= A.length <= 20000
// 0 <= B.length <= 20000
// A and B consist of lowercase letters.

/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function (A, B) {
  if (A.length !== B.length) return false;
  if (A == B) {
    let newSet = new Set();
    for (const c of A) {
      newSet.add(c);
    }
    return newSet.length < A.length;
  }

  let diff = [];

  for (let i = 0; i < A.length; i++) {
    if (A.charAt(i) !== B.charAt(i)) diff.push(i);
  }
  return (
    diff.length === 2 &&
    A.charAt(diff[0]) == B.charAt(diff[1]) &&
    A.charAt(diff[1]) == B.charAt(diff[0])
  );
};

console.log(buddyStrings('ab', 'ba'));
console.log(buddyStrings('aa', 'aa'));
console.log(buddyStrings('aaaaaaabc', 'aaaaaaacb'));
console.log(buddyStrings('aa', 'aa'));

//  ################## PYTHON  ################### //

// class Solution:
//     def buddyStrings(self, A: str, B: str) -> bool:
//         if len(A) != len(B):
//             return False
//         if A == B and len(set(A)) < len(A):
//             return True

//         diff = [(a, b) for a, b in zip(A, B) if a != b]

//         return len(diff) == 2 and diff[0] == diff[1][::-1]
