function kWeakestRows(mat: number[][], k: number): number[] {
  let ans = [];
  let temp = [];

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      const element = mat[i][j];
    }
  }

  return ans;
}

console.log(
  kWeakestRows(
    [
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 0],
      [1, 0, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 1],
    ],
    3
  )
);
