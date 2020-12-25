// Given a matrix of M x N elements (M rows, N columns), return all elements of the matrix in diagonal order as shown in the below image.

// Example:

// Input:
// [
//  [ 1, 2, 3 ],
//  [ 4, 5, 6 ],
//  [ 7, 8, 9 ]
// ]

// Output:  [1,2,4,7,5,3,6,8,9]

// Explanation:

// Note:

// The total number of elements of the given matrix will not exceed 10,000.

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function (matrix) {
  if (matrix.length == 0) return [];

  let m = matrix.length;
  let n = matrix[0].length;
  let ans = [];
  let row = 0;
  let col = 0;
  let d = 1;

  for (let i = 0; i < m * n; ++i) {
    ans[i] = matrix[row][col];
    row -= d;
    col += d;

    if (row == m) {
      row = m - 1;
      col += 2;
      d = -d;
    }
  }
};

//       for (int i = 0; i < m * n; ++i) {
//         ans[i] = matrix[row][col];
//         row -= d;
//         col += d;
//         // out-of-bound
//         if (row == m) {
//           row = m - 1;
//           col += 2;
//           d = -d;
//         }
//         if (col == n) {
//           col = n - 1;
//           row += 2;
//           d = -d;
//         }
//         if (row < 0) {
//           row = 0;
//           d = -d;
//         }
//         if (col < 0) {
//           col = 0;
//           d = -d;
//         }
//       }

//       return ans;
//     }
//   }
