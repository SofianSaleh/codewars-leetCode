function coinChange(coins: number[], amount: number): number {
  let sum = amount;
  let moves = 0;

  for (let i = coins.length - 1; i >= 0; --i) {
    console.log(sum, coins[i]);
    while (sum - coins[i] >= 0) {
      console.log('hi');
      moves += 1;
      sum = sum - coins[i];
    }
  }
  return moves;
}
console.log(coinChange([1, 2, 5], 11));
