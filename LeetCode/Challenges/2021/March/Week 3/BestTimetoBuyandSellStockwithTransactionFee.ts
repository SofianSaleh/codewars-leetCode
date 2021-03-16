function maxProfit(prices: number[], fee: number): number {
  let sell: number = 0;
  let hold: number = Infinity * -1;

  for (const price in prices) {
    price = parseInt(price);
    sell = Math.max(sell, hold + price);
    hold = Math.max(hold, sell - price - fee);
  }
}
