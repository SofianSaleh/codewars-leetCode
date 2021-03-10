function coinChange(coins: number[], amount: number): number {
  let sum = amount;
  let moves = 0;
  let arrOfMoves = [];
  coins = coins.sort((a, b) => a - b);
  for (let i = coins.length - 1; i >= 0; --i) {
    for (let j = i; i >= 0; --j) {
      while (sum - coins[j] >= 0) {
        moves += 1;
        sum = sum - coins[j];
      }
    }
    arrOfMoves.push(moves);
    moves = 0;
    sum = amount;
  }
  console.log(arrOfMoves);
  return sum === 0 ? Math.max(...arrOfMoves) : -1;
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
