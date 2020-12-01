// Say you have an array for which the ith element is the price of a given stock on day i.

// If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), 
// design an algorithm to find the maximum profit.

// Note that you cannot sell a stock before you buy one.

// Example 1:

// Input: [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
//              Not 7-1 = 6, as selling price needs to be larger than buying price.
// Example 2:

// Input: [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e. max profit = 0.

// ######################## TYPESCRIPT ########################

function maxProfit(prices: number[]): number {
    let res: number = 0
    let sell: number = -Infinity

    for (const price of prices) {
        res = Math.max(res, price + sell)
        sell = Math.max(sell, -price)
    }
    // console.log(res, prices[index])
    return res
};
console.log(maxProfit([1, 2]))
console.log(maxProfit([7, 1, 5, 3, 6, 4]))
console.log(maxProfit([7, 6, 4, 3, 1]))

// ######################## JAVASCRIPT ########################

// var maxProfit = function (prices) {
//     let res = 0
//     let sell = -Infinity

//     for (const price of prices) {
//         res = Math.max(res, price + sell)
//         sell = Math.max(sell, -price)
//     }
//     return res
// };


// ######################## PYTHON ############################

// class Solution:
//     def maxProfit(self, prices: List[int]) -> int:
//         res = 0
//         sell = float(-inf)

//         for price in prices:
//             res = max(res, price + sell)
//             sell = max(sell, -price)
//         return res 



