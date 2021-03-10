function coinChange(coins: number[], amount: number): number {
  let sum = amount;
  let moves = 0;

  for (let i = 0; i < coins.length; i++) {
    while (amount - coins[i] >= 0) {
      moves += 1;
      sum = coins[i] - amount;
    }
  }
  return moves;
}
console.log(coinChange([1, 2, 5], 11));
