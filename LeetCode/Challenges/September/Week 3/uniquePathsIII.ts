let ex: number;
let ey: number;

function uniquePathsIII(grid: number[][]): number {
  let rows: number = grid.length;
  let columns: number = grid[0].length;

  let non_obstacles: any = 0;
  let start_row: number = 0;
  let start_col: number = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      let cell = grid[i][j];
      if (cell >= 0) non_obstacles += 1;
      if (cell == 1) {
        start_row = i;
        start_col = j;
      }
    }
  }

  let path_count = 0;

        function backtrack(row, col, remain){
            
        }
            # we need to modify this external variable
            nonlocal path_count

            # base case for the termination of backtracking
            if grid[row][col] == 2 and remain == 1:
                # reach the destination
                path_count += 1
                return

            # mark the square as visited. case: 0, 1, 2 
            temp = grid[row][col] 
            grid[row][col] = -4
            remain -= 1   # we now have one less square to visit

            # explore the 4 potential directions around
            for ro, co in [(0, 1), (0, -1), (1, 0), (-1, 0)]:
                next_row, next_col = row + ro, col + co

                if not (0 <= next_row < rows and 0 <= next_col < cols):
                    # invalid coordinate
                    continue
                if grid[next_row][next_col] < 0:
                    # either obstacle or visited square
                    continue

                backtrack(next_row, next_col, remain)

            # unmark the square after the visit
            grid[row][col] = temp

        backtrack(start_row, start_col, non_obstacles)

        return path_count
}
