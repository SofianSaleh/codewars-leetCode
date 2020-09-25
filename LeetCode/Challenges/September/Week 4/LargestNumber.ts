// Given a list of non negative integers, arrange them such that they form the largest number.

// Example 1:

// Input: [10,2]
// Output: "210"
// Example 2:

// Input: [3,30,34,5,9]
// Output: "9534330"
// Note: The result may be very large, so you need to return a string instead of an integer.

function largestNumber(nums: number[]): string {
  const len = nums.length;
  let max = nums[0];
  let min = 0;
  let sum = 0;
  for (let i = 0; i < len; i++) {
    sum += nums[i];
    if (sum - min > max) max = sum - min;
    if (sum < min) {
      min = sum;
    }
  }
  console.log(max);
  return 'max;';
}
console.log(largestNumber([1, 2, 3, 3]));
/**
 * 1 2 3
 * 1 3 2
 * 2 1 3
 * 2 3 1
 * 3 1 2
 * 3 2 1
 */
