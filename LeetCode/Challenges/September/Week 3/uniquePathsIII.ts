let ex: number;
let ey: number;

function uniquePathsIII(grid: number[][]): number {
  let rows: number = grid.length;
  let cols: number = grid[0].length;

  let non_obstacles: any = 0;
  let start_row: number = 0;
  let start_col: number = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let cell = grid[i][j];
      if (cell >= 0) non_obstacles += 1;
      if (cell == 1) {
        start_row = i;
        start_col = j;
      }
    }
  }

  let path_count = 0;

  function backtrack(row: number, col: number, remain: number) {
    if (grid[row][col] == 2 && remain == 1) {
      path_count += 1;
      return;
    }
    let temp = grid[row][col];
    grid[row][col] = -4;
    remain -= 1;
    let x = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ];

    for (let i = 0; i < x.length; i++) {
      let next_row = row + x[i][0];
      let next_col = col + x[i][1];

      if (
        !(next_row >= 0 && next_row < rows && next_col >= 0 && next_col < cols)
      )
        continue;
      if (grid[next_row][next_col] < 0) continue;

      backtrack(next_row, next_col, remain);
    }

    grid[row][col] = temp;
  }
  backtrack(start_row, start_col, non_obstacles);

  return path_count;
}
