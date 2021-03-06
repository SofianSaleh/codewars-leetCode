/**
 * @param {string[]} A
 * @param {string[]} B
 * @return {string[]}
 */
var wordSubsets = function (A, B) {
  let count = 0;
  let ans = [];
  for (const word of A) {
    for (let i = 0; i < B.length; i++) {
      console.log(word, B[i]);
      if (word.includes(B[i])) {
        count++;
      }
    }
    console.log(count);
    if (count == B.length) {
      ans.push(word);
    }
    count = 0;
  }
  return ans;
};

console.log(
  wordSubsets(['amazon', 'apple', 'facebook', 'google', 'leetcode'], ['e', 'o'])
);
