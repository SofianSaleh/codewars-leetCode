function rob(nums: number[]): number {
    let prev1: number = 0
    let prev2: number = 0

    for (const num of nums) {
        let dp = Math.max(prev1, prev2 + num)
        prev2 = prev1
        prev1 = dp
    }
    return prev1
};
console.log(rob([2, 7, 9, 3, 1])) // 12
console.log(rob([2, 7, 9, 3, 1, 7, 8, 5, 3, 5, 6, 8, 6]))
console.log(rob([2, 7, 9]))
console.log(rob([9, 1, 2, 3, 7, 8, 3, 1])) 