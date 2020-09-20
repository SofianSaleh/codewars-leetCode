let ex: number;
let ey: number;

function uniquePathsIII(grid: number[][]): number {
  let m: number = grid.length;
  let n: number = grid[0].length;

  let ans: any = 0;
  let empty: number = 1;
  let sx: number;
  let sy: number;

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
      if (i === ex && j === ey) {
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
    console.log(ans);
    dfs(grid, empty, sx, sy, ans);
    return ans;
  }
}
console.log(
  uniquePathsIII([
    [1, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 2, -1],
  ])
);
console.log(
  uniquePathsIII([
    [1, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 2],
  ])
);

// class Solution {
//     public:
//      int uniquePathsIII(vector<vector<int>>& grid) {
//        const int m = grid.size();
//        const int n = grid[0].size();

//        int ans = 0;
//        int empty = 1;
//        int sx;
//        int sy;

//        for (int i = 0; i < m; ++i)
//          for (int j = 0; j < n; ++j) {
//            if (grid[i][j] == 0) {
//              ++empty;
//            } else if (grid[i][j] == 1) {
//              sx = i;
//              sy = j;
//            } else if (grid[i][j] == 2) {
//              ex = i;
//              ey = j;
//            }
//          }

//        dfs(grid, empty, sx, sy, ans);

//        return ans;
//      }

//     private:
//      int ex;
//      int ey;

//      void dfs(vector<vector<int>>& grid, int empty, int i, int j, int& ans) {
//        if (i < 0 || i >= grid.size() || j < 0 || j >= grid[0].size() ||
//            grid[i][j] < 0)
//          return;
//        if (i == ex && j == ey) {
//          if (empty == 0) ++ans;
//          return;
//        }

//        grid[i][j] = -2;
//        dfs(grid, empty - 1, i + 1, j, ans);
//        dfs(grid, empty - 1, i - 1, j, ans);
//        dfs(grid, empty - 1, i, j + 1, ans);
//        dfs(grid, empty - 1, i, j - 1, ans);
//        grid[i][j] = 0;
//      }
//    };
