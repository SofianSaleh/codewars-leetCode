function maxProduct(nums: number[]): number {
    let product: number = nums[0]

    for (let i = 1; i < nums.length; i++) {
        console.log(nums[i])
        let maximum: number = product * nums[i]
        product = Math.max(product, maximum)
    }

    return product
};

console.log(maxProduct([2, 3, -2, 4]))

// ans = nums[0]
//         prevMin = nums[0]
//         prevMax = nums[0]

//         for i in range(1, len(nums)):
//             mini = prevMin * nums[i]
//             maxi = prevMax * nums[i]
//             prevMin = min(nums[i], mini, maxi)
//             prevMax = max(nums[i], mini, maxi)
//             ans = max(ans, prevMax)

//         return ans