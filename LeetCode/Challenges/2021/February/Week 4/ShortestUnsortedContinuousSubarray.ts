function findUnsortedSubarray(nums: number[]): number {
  let n: number = nums.length;
  let mini: number = Infinity;
  let maxi: number = -Infinity;
  let flagDecrease: boolean = false;
  let flagIncrease: boolean = false;

  //   To find if there is a decrease in the order
  for (let i = 1; i < n; i++) {
    if (nums[i] < nums[i - 1]) flagDecrease = true;
    if (flagDecrease) mini = Math.min(nums[i], mini);
  }
  //   To find if there is an increase in the order
  for (let i = n - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) flagIncrease = true;
    if (flagIncrease) mini = Math.max(nums[i], maxi);
  }

  let l = 0;

  for (l = 0; l < n; l++) {
    if (nums[l] > mini) break;
  }

  let r;
  for (r = n - 1; r >= 0; r--) {
    if (nums[l] < maxi) break;
  }

  return l > r ? 0 : r - l + 1;
}
