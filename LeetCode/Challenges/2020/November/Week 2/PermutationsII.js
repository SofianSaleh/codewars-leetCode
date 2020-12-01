// Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.

// Example 1:

// Input: nums = [1,1,2]
// Output:
// [[1,1,2],
//  [1,2,1],
//  [2,1,1]]
// Example 2:

// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// Constraints:

// 1 <= nums.length <= 8
// -10 <= nums[i] <= 10

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  var dfs = function (path) {
    if (path.length === nums.length) {
      console.log(path);
      return;
      // let tempArr = [];
      // for (let i = 0; i < path.length; i++) {
      //   if (path[i] === '-') {
      //     tempArr.push(parseInt(`${path[i]}${path[i + 1]}`));
      //     i++;
      //   } else {
      //     tempArr.push(parseInt(path[i]));
      //   }
      // }
      // ans.push(tempArr);
      ans.push(path);
      return;
    }
    for (const [i, num] of nums.entries()) {
      if (used[i]) continue;
      if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;

      used[i] = true;
      dfs(path + [num]);
      used[i] = false;
    }
  };
  let ans = [];
  let used = [];

  for (const x in nums.length) {
    used.push(false);
  }

  nums.sort();
  dfs([]);
  return ans;
};

// console.log(permuteUnique([1, 1, 2]));
// console.log(permuteUnique([1, 2, 3]));
console.log(permuteUnique([-1, 2, -1, 2, 1, -1, 2, 1]));
