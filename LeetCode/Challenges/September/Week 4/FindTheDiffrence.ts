// Given two strings s and t which consist of only lowercase letters.

// String t is generated by random shuffling string s and then add one more letter at a random position.

// Find the letter that was added in t.

// Example:

// Input:
// s = "abcd"
// t = "abcde"

// Output:
// e

// Explanation:
// 'e' is the letter that was added.

function findTheDifference(s: string, t: string): string {
  let arr = t.split('');
  for (let i = 0; i < t.length; i++) {
    let index = arr.indexOf(s[i]);
    if (index !== -1) arr.splice(index, 1);
  }
  return arr.join('');
}
// console.log(findTheDifference('abcd', 'abcde'));
// console.log(findTheDifference('abcde', 'abcde'));
