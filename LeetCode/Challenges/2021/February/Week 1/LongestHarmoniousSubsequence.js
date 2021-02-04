// We define a harmonious array as an array where the difference between its maximum value and its minimum value is exactly 1.

// Given an integer array nums, return the length of its longest harmonious subsequence among all its possible subsequences.

// A subsequence of array is a sequence that can be derived from the array by deleting some or no elements without changing the order of the remaining elements.

// Example 1:

// Input: nums = [1,3,2,2,5,2,3,7]
// Output: 5
// Explanation: The longest harmonious subsequence is [3,2,2,2,3].
// Example 2:

// Input: nums = [1,2,3,4]
// Output: 2
// Example 3:

// Input: nums = [1,1,1,1]
// Output: 0

// Constraints:

// 1 <= nums.length <= 2 * 104
// -109 <= nums[i] <= 109

// function findLHS(nums: number[]): number {
//   let range = 0;
//   for (let i = 0; i < nums.length; i++) {
//     let arr = [];
//     arr.push(nums[i]);
//     console.log('new');
//     for (let j = 0; j < nums.length; j++) {
//       //   console.log(
//       //     Math.abs(Math.max(...arr) - nums[j]) === 1,
//       //     Math.max(...arr),
//       //     nums[j]
//       //   );
//       if (Math.abs(Math.max(...arr) - nums[j]) === 1) {
//         arr.push(nums[j]);
//       }
//     }
//     console.log(range, arr);
//     if (range < arr.length) range = arr.length;
//   }
//   return range;
// }

function findLHS(arr) {
  // Count the number of occurrences of each value in the array...
  let count = new Map();
  arr.forEach((v:) => {
    count.set(v, (count.get(v) || 0) + 1);
  });

  // Now, find the largest count of two consecutive numbers.
  let maxKey;
  let maxCount = -1;
  count.forEach((val, key) => {
    if (count.get(key + 1)) {
      let total = val + count.get(key + 1);
      if (maxCount < total) {
        maxKey = key;
        maxCount = total;
      }
    }
  });

  // Finally, return the result.
  if (maxCount == -1) {
    return [];
  }

  return arr.reduce((acc:, val) => {
    if (val == maxKey || val == maxKey + 1) {
      acc.push(val);
    }
    return acc;
  }, []);
}
let nums = [1, 3, 2, 2, 5, 2, 3, 7];

console.log(findLHS(nums));
