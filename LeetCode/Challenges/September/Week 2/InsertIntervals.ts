function insert(intervals: number[][], newInterval: number[]): number[][] {
    let start: number = 0
    let end: number = intervals.length
    let targetIndex: number | null = null

    while (start < end) {
        let middle: number = Math.floor((start + end) / 2)

        if (intervals[middle][0] >= newInterval[0]) {
            end = middle
        } else {
            start = middle + 1
        }
    }
    targetIndex = start
    console.log(start)
    return [[]]
};

console.log(insert([[1, 3], [6, 9]], [2, 5]))
console.log(insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]))
