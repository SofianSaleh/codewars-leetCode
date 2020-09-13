function insert(intervals: number[][], newInterval: number[]): number[][] {
    let ans = []
    let index: number | null = null

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

//  5        index = len(intervals)
//  6        for i in range(len(intervals)):
//  7            if intervals[i][0] >= newInterval[0]:
//  8                index = i
//  9                break
// 10        intervals.insert(index, newInterval)
// 11
// 12        for interval in intervals:
// 13            if not ans or ans[-1][1] < interval[0]:
// 14                ans.append(interval)
// 15            else:
// 16                ans[-1][1] = max(ans[-1][1], interval[1])
// 17
// 18        return ans