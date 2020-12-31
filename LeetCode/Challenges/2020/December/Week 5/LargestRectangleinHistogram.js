// Given n non-negative integers representing the histogram's bar height where the width of each bar is 1, find the area of largest rectangle in the histogram.

// Above is a histogram where width of each bar is 1, given height = [2,1,5,6,2,3].

// The largest rectangle is shown in the shaded area, which has area = 10 unit.

// Example:

// Input: [2,1,5,6,2,3]
// Output: 10

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  let ans = -Infinity;

  for (let i = 0; i < heights.length; i++) {
    for (let j = i + 1; j < heights.length; j++) {
      let div = Math.abs(heights[i] - heights[j]) * Math.abs(i - j);
      console.log(i, j);
      if (div > ans) {
        ans = div;
      }
      break;
    }
  }
  return ans;
};

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]));

// class Solution:
//     def largestRectangleArea(self, heights: List[int]) -> int:
//         ans = 0
//         stack = []

//         for i in range(len(heights) + 1):
//             while stack != [] and (i == len(heights) or heights[i] < heights[stack[-1]]):
//                 h = heights[stack.pop()]
//                 w = i if stack == [] else i - stack[-1] - 1
//                 ans = max(ans, h * w)
//             stack.append(i)

//         return ans
