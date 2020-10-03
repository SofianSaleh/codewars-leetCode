/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
  if (k < 0) return 0;

  let ans = 0;
  let dict = {};
  for (const [index, element] of nums.entries()) {
    if (!!dict[index]) {
      dict[index] = element;
    }
  }
  for (const [index, element] of nums.entries()) {
    let target = num + k;
    if (!!dict[target] && dict[target] != index) {
      ans += 1;
      delete dict[target];
    }
  }
  return ans;
};
