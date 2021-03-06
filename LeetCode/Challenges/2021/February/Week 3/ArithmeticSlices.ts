function numberOfArithmeticSlices(A: number[]): number {
  let ans = 0;
  let dp = 0;

  for (let i = 2; i < A.length; i++) {
    if (A[i] - A[i - 1] === A[i - 1] - A[i - 2]) {
      dp += 1;
      ans += dp;
    } else {
      dp = 0;
    }
  }
  return ans;
}
