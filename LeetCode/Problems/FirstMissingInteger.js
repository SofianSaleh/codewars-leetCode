/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    let n = nums.length
    let oneExists = false

    if (nums.length === 0) return 1
    /**
     * Change the numbers tat are 0 or down or more than the length to one
     */

    for (let i = 0; i < n; i++) {
        if (nums[i] === 1) oneExists = true
        else if (nums[i] <= 0 || nums[i] > n) {
            nums[i] = 1
        }
    }
    if (!oneExists) return 1
    console.log(nums)
    /**
     * If we see the number change it to negative number
     * by using the index number - 1 let's say it gives 2 we go to the index number two and
     * change it to negative  
     */

    for (let j = 0; j < n; j++) {
        let index = Math.abs(nums[j]) - 1

        if (nums[index] > 0) nums[index] *= -1
    }
    console.log(nums)

    /**
     * check if there wasn't a number one 
     */


    /**
     * Check the first positive number and return it + 1
     */

    for (let k = 0; k < n; k++) {
        if (nums[k] > 0) return k + 1
    }
    console.log(nums)

    return n + 1
};

console.log(firstMissingPositive([3, 4, -1, 1]))
// console.log(firstMissingPositive([1, 2, 0]))
// console.log(firstMissingPositive([3, 4, -1, 16, 77]))