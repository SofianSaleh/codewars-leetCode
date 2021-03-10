function coinChange(coins, amount) {
  let dp = [];
  dp.fill(1, dp.length, amount + 1);
  console.log(dp);
  for (const coin of coins) {
    for (let i = coin; i <= amount; ++i) {
      dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }

    return 1;
  }
}

// class Solution {
//   public int coinChange(int[] coins, int amount) {
//     // dp[i] := fewest # of coins to make up i
//     int[] dp = new int[amount + 1];
//     Arrays.fill(dp, 1, dp.length, amount + 1);

//     for (final int coin : coins)
//       for (int i = coin; i <= amount; ++i)
//         dp[i] = Math.min(dp[i], dp[i - coin] + 1);

//     return dp[amount] == amount + 1 ? -1 : dp[amount];
//   }
// }
// console.log(coinChange([1, 2, 5], 11));
console.log(coinChange([1, 2, 5, 10], 18));
// console.log(coinChange([2], 3));
