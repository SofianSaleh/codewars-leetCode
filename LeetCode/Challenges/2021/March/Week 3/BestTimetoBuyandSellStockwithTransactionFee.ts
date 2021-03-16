function maxProfit(prices: number[], fee: number): number {
  let sell = 0;
  let hold = -Infinity;

  for (const price in prices) {
    sell = Math.max(sell, hold + price);
  }
}
