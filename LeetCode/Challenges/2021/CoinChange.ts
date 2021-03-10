function coinChange(coins: number[], amount: number): number {
  let sum = amount;
  let moves = 0;

  for (let i = 0; i < coins.length; i++) {
    while (coins[i] - amount >= sum) {
      moves += 1;
      sum = coins[i] - amount;
    }
  }
}
