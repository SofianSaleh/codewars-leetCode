// You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

// Return the max sliding window.

// Example 1:

// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]
// Explanation:
// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]
// Example 3:

// Input: nums = [1,-1], k = 1
// Output: [1,-1]
// Example 4:

// Input: nums = [9,11], k = 2
// Output: [11]
// Example 5:

// Input: nums = [4,-2], k = 2
// Output: [4]

// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// 1 <= k <= nums.length

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let ans = [];
  let q = [];

  for (const [i, num] of nums.entries()) {
    while (q && q[q.length - 1] < num) {
      q.pop();
    }
    q.push(num);
    if (i >= k && nums[i - k] == q[0]) {
      q.popleft();
    }
  }
};

class dequeue {
  constructor() {
    this.items = [];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  getfront() {
    if (!this.isEmpty()) {
      return this.items[0];
    }
  }

  getlastElement() {
    return this.items[this.items.length - 1];
  }

  pop_lastElement() {
    this.items.pop();
  }

  pop_frontElement() {
    this.items.shift();
  }

  push_backElement(i) {
    this.items.push(i);
  }
}
var maxSlidingWindow = function (nums, k) {
  var obj = new dequeue();
  var maximumArr = [];
  for (var i = 0; i < nums.length; i++) {
    if (!obj.isEmpty() && obj.getfront() === nums[i - k]) {
      obj.pop_frontElement();
    }

    while (!obj.isEmpty() && obj.getlastElement() < nums[i]) {
      obj.pop_lastElement();
    }

    obj.push_backElement(nums[i]);

    if (i >= k - 1) {
      maximumArr.push(obj.getfront());
    }
  }
  return maximumArr;
};
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
