function findUnsortedSubarray(nums: number[]): number {
  let n: number = nums.length;
  let mini: number = Infinity;
  let max: number = -Infinity;
  let flagDecrease: boolean = false;
  let flagIncrease: boolean = false;

  for (let i = 1; i < n; i++) {
    if (nums[i] < nums[i - 1]) flagDecrease = true;
    if (flagDecrease) mini = Math.min(nums[i], mini);
  }

  return 1;
}
// public int findUnsortedSubarray(int[] nums) {
//     for (int i = 1; i < n; ++i) {
//       if (nums[i] < nums[i - 1])
//         meetDecrease = true;
//       if (meetDecrease)
//         min = Math.min(min, nums[i]);
//     }

//     for (int i = n - 2; i >= 0; --i) {
//       if (nums[i] > nums[i + 1])
//         meetIncrease = true;
//       if (meetIncrease)
//         max = Math.max(max, nums[i]);
//     }

//     int l = 0;
//     for (l = 0; l < n; ++l)
//       if (nums[l] > min)
//         break;

//     int r = 0;
//     for (r = n - 1; r >= 0; --r)
//       if (nums[r] < max)
//         break;

//     return l > r ? 0 : r - l + 1;
//   }
