function rob(nums: number[]): number {
    let prev1: number = 0
    let prev2: number = 0

    for (const num of nums) {
        let dp = Math.max(prev1, prev2 + num)

    }
    return prev1
};
console.log(rob([2, 7, 9, 3, 1])) // 12