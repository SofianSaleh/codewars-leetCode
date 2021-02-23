function searchMatrix(matrix: number[][], target: number): boolean {
  for (const mat of matrix) {
    if (mat.indexOf(target) !== -1) {
      return true;
    }
  }
  return false;
}
