// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.

// Example 1:

// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,50]], target = 3
// Output: true
// Example 2:

// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,50]], target = 13
// Output: false
// Example 3:

// Input: matrix = [], target = 0
// Output: false

// Constraints:

// m == matrix.length
// n == matrix[i].length
// 0 <= m, n <= 100
// -104 <= matrix[i][j], target <= 104

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 *
 * O Boolean
 * I Array of array and a number
 * C Must be efficiant
 * E
 */
//! Brute force O(n^2)

/**
 * ACCORDING TO LEETCODE
 *  Runtime: 72 ms
 *  Memory Usage: 38.7 MB
 */

var searchMatrix = function (matrix, target) {
  if (matrix.length === 0) return false;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === target) return true;
    }
  }
  return false;
};

//! Using binary search tree

/**
 * ACCORDING TO LEETCODE
 *  Runtime: 76 ms
 *  Memory Usage: 38.7 MB
 */

var searchMatrix1 = function (matrix, target) {
  if (matrix.length === 0) return false;
  let arr = matrix.flat();

  var recurse = function (arr1, start, end) {
    if (start > end) return false;
    let middle = Math.floor((start + end) / 2);
    if (arr1[middle] === target) return true;
    if (arr1[middle] > target) return recurse(arr1, start, middle - 1);
    else return recurse(arr1, middle + 1, end);
  };

  console.log(recurse(arr, 0, arr.length - 1));
  return recurse(arr, 0, arr.length - 1);
};

console.log(
  searchMatrix1(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 50],
    ],
    3
  )
); // True
console.log(
  searchMatrix1(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 50],
    ],
    13
  )
); // false
console.log(searchMatrix1([], 0)); // false
// console.log(
//   searchMatrix(
//     [
//       [1, 3, 5, 7],
//       [10, 11, 16, 20],
//       [23, 30, 34, 50],
//     ],
//     3
//   )
// ); // True
// console.log(
//   searchMatrix(
//     [
//       [1, 3, 5, 7],
//       [10, 11, 16, 20],
//       [23, 30, 34, 50],
//     ],
//     13
//   )
// ); // false
// console.log(searchMatrix([], 0)); // false
