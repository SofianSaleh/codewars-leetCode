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

class Stack {
  constructor() {
    (this.arr = []), (this.i = 0);
  }

  add(elem) {
    this.arr[this.i] = elem;
    this.i += 1;
  }
  remove() {
    this.arr.pop();
    this.i--;
  }
  peek() {
    return this.arr[this.i];
  }
  isEmpty() {
    if (this.arr.length === 0) return true;
    else return false;
  }
  get() {
    return { c: this.arr, f: this.i };
  }
}

var find132pattern = function (nums) {
  if (nums.length < 3) return false;

  let stack = new Stack();
  let ak = -2147483648;

  for (let i = nums.length - 1; i >= 0; --i) {
    console.log(stack, i);
    if (nums[i] < ak) return true;
    while (!stack.isEmpty() && stack.peek < nums[i]) {
      ak = stack.remove();
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
// console.log(find132pattern([-1, 3, 2, 0]));
// console.log(5 / 3);
