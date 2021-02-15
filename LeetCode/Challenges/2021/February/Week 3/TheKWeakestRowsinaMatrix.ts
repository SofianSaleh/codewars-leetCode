function kWeakestRows(mat: number[][], k: number): number[] {
  let ans = [];
  let temp = [];

  for (let i = 0; i < mat.length; i++) {
    let soldiers = 0;
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === 1) {
        soldiers += 1;
      }
    }
    temp.push([i, soldiers]);
  }
  console.log(temp);
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
