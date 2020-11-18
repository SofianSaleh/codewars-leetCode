// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals,
// and return an array of the non-overlapping intervals that cover all the intervals in the input.

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

// Constraints:

// 1 <= intervals.length <= 104
// intervals[i].length == 2
// 0 <= starti <= endi <= 104

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  let ans = [];
  for (const interval of intervals.sort()) {
    if (!ans || ans[intervals.length - 1][1] < interval[0]) {
      ans.push(interval);
    } else {
      ans[intervals.length - 1][1] = Math.max(
        ans[intervals.length - 1][1],
        interval[1]
      );
    }
  }
};
// [[1,3],[2,6],[8,10],[15,18]]
// if not ans or ans[-1][1] < interval[0]:
// ans.append(interval)
// else:
// ans[-1][1] = max(ans[-1][1], interval[1])
