function insert(intervals: number[][], newInterval: number[]): number[][] {
    let ans: any = []
    let len: number = intervals.length
    let index: number = intervals.length - 1

    for (let i = 0; i < intervals.length; i++) {
        if (intervals[i][0] >= newInterval[0]) {
            index = i
            break
        }
    }
    intervals.splice(index, 0, newInterval)
    console.log(intervals)
    for (const interval of intervals) {
        console.log(!ans |, ans[len][1], interval[0])
        if (!ans || ans[len][1] < interval[0]) {
            ans.push(interval)
        } else {
            ans[len][1] = Math.max(ans[len][1], interval[1])
        }
    }
    return ans
};

console.log(insert([[1, 3], [6, 9]], [2, 5]))
// console.log(insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]))