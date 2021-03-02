function findErrorNums(nums: number[]): number[] {
  let duplicate: number;
  for (const num of nums) {
    if (nums[Math.abs(num) - 1] < 0) {
      duplicate = Math.abs(num);
    } else {
      nums[Math.abs(num) - 1] *= -1;
    }
  }

  for (const [i, num] of nums.entries()) {
  }
}
