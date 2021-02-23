function searchMatrix(matrix: number[][], target: number): boolean {
  for (const mat of matrix) {
    if (mat.indexOf(target) !== -1) {
      return true;
    }
  }
  return false;
}
console.log(
  searchMatrix(
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ],
    5
  )
);
console.log(
  searchMatrix(
    [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]],,
    5
  )
);
