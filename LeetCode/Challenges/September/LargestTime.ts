function largestTimeFromDigits(A: number[]): string {
    let maxTime = -1
    function buildTime(permutation: number[]) {
        let h: number = permutation[0]
        let i: number = permutation[1]
        let j: number = permutation[2]
        let k: number = permutation[3]

        let hour = h * 10 + i
        let minute = j * 10 + k
        if (hour < 24 && minute < 60) {
            maxTime = Math.max(maxTime, hour * 60 + minute)
        }
    }

    function swap(arr: number[], i: number, j: number) {
        if (i !== j) {
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
    }

    function permutate(arr: number[], start: number) {
        if (start === arr.length - 1) {
            // console.log(arr)
            buildTime(arr)
            return
        }
        for (let i = 0; i < arr.length; i++) {
            swap(arr, i, start)
            permutate(arr, start + 1)
            swap(arr, i, start)
        }
    }

    permutate(A, 0)
    if (maxTime == -1) {
        return ""
    } else {
        return `${Math.floor(maxTime / 60)}:${maxTime % 60}`
    }

};

console.log(largestTimeFromDigits([1, 2, 3, 4]))