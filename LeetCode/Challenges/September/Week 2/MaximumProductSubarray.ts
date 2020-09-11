function maxProduct(nums: number[]): number {
    let product: number = nums[0]
    let prevMin: number = nums[0]
    let prevMax: number = nums[0]

    for (let i = 1; i < nums.length; i++) {
        let minimum: number = prevMin * nums[i]
        let maximum: number = prevMax * nums[i]
        prevMin = Math.min(nums[i], minimum, maximum)
        prevMax = Math.max(nums[i], minimum, maximum)
        product = Math.max(product, prevMax)
    }

    return product
};

// console.log(maxProduct([2, 3, -2, 4]))
// console.log(maxProduct([21, -3, -2, 4]))
// console.log(maxProduct([2, -3, -2, 4]))
// console.log(maxProduct([2, -3, -2, -4]))

// ######################## JAVASCRIPT ########################

// var maxProduct = (nums) =>{
//     let product = nums[0]
//     let prevMin = nums[0]
//     let prevMax = nums[0]

//     for (let i = 1; i < nums.length; i++) {
//         let minimum = prevMin * nums[i]
//         let maximum = prevMax * nums[i]
//         prevMin = Math.min(nums[i], minimum, maximum)
//         prevMax = Math.max(nums[i], minimum, maximum)
//         product = Math.max(product, prevMax)
//     }

//     return product
// };


// ######################## JAVASCRIPT ########################

// class Solution:
//     def maxProduct(self, nums: List[int]) -> int:

//         product = nums[0]
//         prevMin = nums[0]
//         prevMax = nums[0]

//         for i in range(1, len(nums)):

//             minimum = prevMin * nums[i]
//             maximum = prevMax * nums[i]

//             prevMin = min(nums[i], minimum, maximum)
//             prevMax = max(nums[i], minimum, maximum)
//             product = max(product, prevMax)

//         return product        

