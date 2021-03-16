function maxProfit(prices: number[], fee: number): number {
  let sell: number = 0;
  let hold: number = Infinity * -1;

  for (const price in prices) {
    let price1 = parseInt(price);
    sell = Math.max(sell, hold + price1);
    hold = Math.max(hold, sell - price1 - fee);
  }
  return sell;
}
