function numFactoredBinaryTrees(arr: number[]): number {
  arr.sort((a, b) => a - b);
  let dp = {};

  for (const [i, a] of arr.entries()) {
    dp[a] = 1;
    for (let j = 0; j < i; j++) {
      if (a % arr[j] === 0 && a / arr[j] in dp) {
        dp[a] += dp[arr[j]] * dp[a / arr[j]];
      }
    }
  }

  return Math.sum(Object.values(dp)) % (10 ** 9 + 7);
}
