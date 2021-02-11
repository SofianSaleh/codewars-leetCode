// Given two strings s and t , write a function to determine if t is an anagram of s.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
// Note:
// You may assume the string contains only lowercase alphabets.

// Follow up:
// What if the inputs contain unicode characters? How would you adapt your solution to such case?

// Brute force
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  let arr = s.split('');
  for (let i = 0; i < t.length; i++) {
    let index = arr.indexOf(t[i]);
    if (index >= 0) {
      arr.splice(index, 1);
    } else {
      return false;
    }
  }
  //   return true;
}
