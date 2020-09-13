function insert(intervals: number[][], newInterval: number[]): number[][] {
    let ans = []
    let index: number = intervals.length

    for (let i = 0; i < intervals.length; i++) {
        if (intervals[i][0] >= newInterval[0]) {
            index = i
            break
        }

    }
};

console.log(insert([[1, 3], [6, 9]], [2, 5]))
console.log(insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]))
