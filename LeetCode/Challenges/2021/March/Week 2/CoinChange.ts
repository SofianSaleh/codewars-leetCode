function coinChange(coins: number[], amount: number): number {
  let sum = amount;
  let moves = 0;
  coins = coins.sort();
  for (let i = coins.length - 1; i >= 0; --i) {
    while (sum - coins[i] >= 0) {
      moves += 1;
      sum = sum - coins[i];
    }
  }
  return sum === 0 ? moves : -1;
}
console.log(coinChange([1, 2, 5], 11));
console.log(coinChange([2], 3));
