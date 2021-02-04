// We define a harmonious numsay as an numsay where the difference between its maximum value and its minimum value is exactly 1.

// Given an integer numsay nums, return the length of its longest harmonious subsequence among all its possible subsequences.

// A subsequence of numsay is a sequence that can be derived from the numsay by deleting some or no elements without changing the order of the remaining elements.

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

function findLHS(nums) {
  // Count the number of occurrences of each value in the numsay...
  let count = new Map();
  nums.forEach((v) => {
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

  return nums.reduce((acc, val) => {
    if (val == maxKey || val == maxKey + 1) {
      acc.push(val);
    }
    return acc;
  }, []);
}
let nums = [1, 3, 2, 2, 5, 2, 3, 7];

console.log(findLHS(nums));
