/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let x = nums1.length + nums2.length;
  let nums = nums1.concat(nums2);
  let median = 0;
  nums.sort((a, b) => a - b);
  if (x % 2 === 0) {
    index = x / 2;
    median = (nums[index - 1] + nums[index]) / 2;
  } else {
    median = nums[Math.floor(x / 2)];
  }
  return median;
};
console.log(findMedianSortedArrays([1, 2], [3]));
