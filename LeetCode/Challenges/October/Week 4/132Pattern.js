// Given an array of n integers nums, a 132 pattern is a subsequence of three integers nums[i], nums[j] and nums[k] such that i < j < k and nums[i] < nums[k] < nums[j].

// Return true if there is a 132 pattern in nums, otherwise, return false.

// Follow up: The O(n^2) is trivial, could you come up with the O(n logn) or the O(n) solution?

// Example 1:

// Input: nums = [1,2,3,4]
// Output: false
// Explanation: There is no 132 pattern in the sequence.
// Example 2:

// Input: nums = [3,1,4,2]
// Output: true
// Explanation: There is a 132 pattern in the sequence: [1, 4, 2].
// Example 3:

// Input: nums = [-1,3,2,0]
// Output: true
// Explanation: There are three 132 patterns in the sequence: [-1, 3, 2], [-1, 3, 0] and [-1, 2, 0].

// Constraints:

// n == nums.length
// 1 <= n <= 104
// -109 <= nums[i] <= 109

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function (nums) {
  if (nums.length < 3) return false;
  // let len = 1;
  // if (nums.length === 3) len = 1;
  // else {
  //   len += nums.length - 3;
  // }
  // for (let i = 0; i < nums.length; i++) {
  //   if (
  //     nums[i + 1] > nums[i + 2] &&
  //     nums[i + 1] > nums[i] &&
  //     nums[i + 2] > nums[i]
  //   ) {
  //     // console.log(nums[i], nums[i + 1], nums[i + 2]);
  //     return true;
  //   }
  // }
  // return false;
  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] < nums[i + 1]) {
  //     for (let j = i + 1; j < nums.length; j++) {
  //       if (nums[i] < nums[j]) {
  //         for (let k = j + 1; k < nums.length; k++) {
  //           if (nums[k] < nums[j] && nums[k] > nums[i]) {
  //             return true;
  //           }
  //         }
  //       }
  //     }
  //   }
  // }
  // return false;
  let stack = [];
  let ak = -Infinity;

  for (let i = nums.length - 1; i >= 0; --i) {
    if (nums[i] < ak) return true;
    while (!stack.length === 0 && stack[stack.length - 1] < nums[i]) {
      ak = stack.pop();
    }
    stack.push(nums[i]);
  }
  return false;
};

//     Stack<Integer> stack = new Stack<>(); // max stack
//     int ak = Integer.MIN_VALUE; // we want to find a seq ai < ak < aj

//     for (int i = nums.length - 1; i >= 0; --i) {
//       if (nums[i] < ak) // ai < ak, we're done because ai must also smaller than aj
//         return true;
//       while (!stack.isEmpty() && stack.peek() < nums[i])
//         ak = stack.pop();
//       stack.push(nums[i]); // nums[i] is a candidate of aj
//     }

//     return false;
//   }
// }
// console.log(find132pattern([3, 1, 4, 2, 2]));
console.log(find132pattern([-1, 3, 2, 0]));
// console.log(5 / 3);
