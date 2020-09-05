var largestOverlap = function (A: number[][], B: number[][]) {
    let LA: number[] = []
    let LB: number[] = []
    let count: number[] = []
    let N: number = A.length

    for (let i: number = 0; i < N * N; i++) {
        if (A[i / N][i % N] === 1) {
            LA.push(i / N * 100 + i % N)
        }
        if (B[i / N][i % N] === 1) {
            LA.push(i / N * 100 + i % N)
        }
    }

    for (let j: number = 0; j < LA.length; j++) {
        for (let k: number = 0; k < LB.length; k++) {
            count[i - j]++
        }
    }
    console.log(count, LA, LB)


};