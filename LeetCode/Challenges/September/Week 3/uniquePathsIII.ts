function uniquePathsIII(grid: number[][]): number {
  let m: number = grid.length;
  let n: number = grid[0].length;

  let ans: number = 0;
  let empty: number = 1;
  let sx;
  let sy;
  let ex;
  let ey;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 0) {
        ++empty;
      } else if (grid[i][j] === 1) {
        sx = i;
        sy = j;
      } else if (grid[i][j] === 2) {
        ex = i;
        ey = j;
      }
    }
    function dfs(grid: any, empty: any, i: any, j: any, ans: any) {
      if (
        i < 0 ||
        i >= grid.length ||
        j < 0 ||
        j >= grid[0].length ||
        grid[i][j] < 0
      )
        return;
      if (i == ex && j == ey) {
        if (empty == 0) ++ans;
        return;
      }
      grid[i][j] = -2;
      dfs(grid, empty - 1, i + 1, j, ans);
      dfs(grid, empty - 1, i - 1, j, ans);
      dfs(grid, empty - 1, i, j + 1, ans);
      dfs(grid, empty - 1, i, j - 1, ans);
      grid[i][j] = 0;
    }
  }
  dfs(grid, empty, sx, sy, ans);
  return ans;
}
