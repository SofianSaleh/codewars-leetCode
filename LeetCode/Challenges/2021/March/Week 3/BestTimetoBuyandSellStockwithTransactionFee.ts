function maxProfit(prices: number[], fee: number): number {
  let sell: number = 0;
  let hold: number = Infinity * -1;

  for (const price in prices) {
    sell = Math.max(sell, hold + price);
  }
}
