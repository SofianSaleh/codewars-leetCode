function firstMissingPositive(nums: number[]): number {
  if (nums.length === 0) return 1;
  let n: number = nums.length;
  let oneExists: boolean = false;

  for (let i = 0; i < n; i++) {
    if (nums[i] === 1) oneExists = true;
    else if (nums[i] <= 0 || nums[i] > n) {
      nums[i] = 1;
    }
  }
  if (!oneExists) return 1;

  for (let j = 0; j < n; j++) {
    let index = Math.abs(nums[j]) - 1;

    if (nums[index] > 0) nums[index] *= -1;
  }

  for (let k = 0; k < n; k++) {
    if (nums[k] > 0) return k + 1;
  }

  return n + 1;
}
