// According to Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

// The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

// Any live cell with fewer than two live neighbors dies as if caused by under-population.
// Any live cell with two or three live neighbors lives on to the next generation.
// Any live cell with more than three live neighbors dies, as if by over-population.
// Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
// The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously. Given the current state of the m x n grid board, return the next state.

// Example 1:

// Input: board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
// Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]
// Example 2:

// Input: board = [[1,1],[1,0]]
// Output: [[1,1],[1,1]]

// Constraints:

// m == board.length
// n == board[i].length
// 1 <= m, n <= 25
// board[i][j] is 0 or 1.

// Follow up:

// Could you solve it in-place? Remember that the board needs to be updated simultaneously: You cannot update some cells first and then use their updated values to update other cells.
// In this question, we represent the board using a 2D array. In principle, the board is infinite, which would cause problems when the active area encroaches upon the border of the array (i.e., live cells reach the border). How would you address these problems?

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  let m = board.length;
  let n = board[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; i++) {
      let ones = 0;

      for (let y = Math.max(0, i - 1); y < Math.min(m, i + 2); y++) {
        for (let x = Math.max(0, j - 1); x < Math.min(n, j + 2); i++) {
          ones += board[y][x] && 1;
        }
      }
    }
    if (board[i][j] == 1 && (ones == 3 || ones == 4)) {
      board[i][j] |= 0b10;
    }
    if (board[i][j] == 0 && ones == 3) {
      board[i][j] |= 0b10;
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      board[i][j] >>= 1;
    }
  }
  return board;
};

//                 # lives on to the next generation
//                 if (board[i][j] == 1 and (ones == 3 or ones == 4)):
//                     board[i][j] |= 0b10
//                 # any dead cell with exactly 3 live neighbors
//                 # becomes a live cell, as if by reproduction
//                 if (board[i][j] == 0 and ones == 3):
//                     board[i][j] |= 0b10

//         for i in range(m):
//             for j in range(n):
//                 board[i][j] >>= 1
