var largestOverlap = function (A: number[][], B: number[][]) {
  let LA: any = [];
  let LB: any = [];
  let count = {};
  let N: number = A.length;

  for (let i: number = 0; i < N; i++) {
    for (let j: number = 0; j < N; j++) {
      if (A[i][j] === 1) {
        LA.push([i, j]);
      }
      if (B[i][j] === 1) {
        LB.push([i, j]);
      }
    }
  }
  // dict[(a[0] - b[0]) * 100 + (a[1] - b[1])] += 1
  // dict[(a[0] - b[0]) * magic + (a[1] - b[1])] += 1
  for (const a of LA) {
    for (const b of LB) {
      let res: number = (a[0] - b[0]) * 100 + (a[1] - b[1]);
      if (!count[res]) {
        count[(a[0] - b[0]) * 100 + (a[1] - b[1])] = 1;
      } else {
        count[(a[0] - b[0]) * 100 + (a[1] - b[1])] += 1;
      }
    }
  }

  let values: any = Object.keys(count).map((key) => count[key]);

  return !!count ? Math.max(...values) : 0;
};

console.log(
  largestOverlap(
    [
      [1, 1, 0],
      [0, 1, 0],
      [0, 1, 0],
    ],
    [
      [0, 0, 0],
      [0, 1, 1],
      [0, 0, 1],
    ]
  )
);
console.log(
  largestOverlap(
    [
      [1, 1, 1],
      [0, 1, 0],
      [0, 1, 0],
    ],
    [
      [0, 0, 0],
      [0, 1, 1],
      [0, 0, 1],
    ]
  )
);
console.log(
  largestOverlap(
    [
      [1, 1, 0],
      [0, 1, 0],
      [0, 1, 0],
    ],
    [
      [0, 0, 0],
      [0, 1, 1],
      [0, 1, 1],
    ]
  )
);
console.log(
  largestOverlap(
    [
      [1, 1, 0],
      [0, 1, 0],
      [0, 1, 0],
    ],
    [
      [0, 1, 0],
      [0, 1, 1],
      [0, 0, 1],
    ]
  )
);
