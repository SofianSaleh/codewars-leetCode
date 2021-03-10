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
// console.log(coinChange([1, 2, 5], 11));
console.log(coinChange([1, 2, 5, 10], 18));
// console.log(coinChange([2], 3));
