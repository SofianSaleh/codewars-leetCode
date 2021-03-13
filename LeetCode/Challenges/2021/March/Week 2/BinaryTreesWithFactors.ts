function numFactoredBinaryTrees(arr: number[]): number {
  arr.sort((a, b) => a - b);
  let dp = {};

  for (const [i, a] of arr.entries()) {
    dp[a] = 1;
    for (let j = 0; j < i; j++) {
      const element = i[j];
    }
  }
}
