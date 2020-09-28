function numSubarrayProductLessThanK(nums: number[], k: number): number {
  if (k <= 1) return 0;

  let ans: number = 0;
  let prod: number = 1;

  let j: number = 0;

  for (let i = 0; i < nums.length; i++) {
    prod *= nums[i];
    while (prod >= k) {
      prod /= nums[j];
      j += 1;
    }
    ans += i - j + 1;
  }

  return ans;
}
