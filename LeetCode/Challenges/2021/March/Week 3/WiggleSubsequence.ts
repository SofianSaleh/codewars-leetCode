function wiggleMaxLength(nums: number[]): number {
  if (nums.length == 0) return 0;

  let increasing = 1;
  let decreasing = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      increasing;
    }
  }
}

// # class Solution {
// #   public int wiggleMaxLength(int[] nums) {

// #     for (int i = 1; i < nums.length; ++i)
// #       if (nums[i] > nums[i - 1])
// #         increasing = decreasing + 1;
// #       else if (nums[i] < nums[i - 1])
// #         decreasing = increasing + 1;

// #     return Math.max(increasing, decreasing);
// #   }
// # }
