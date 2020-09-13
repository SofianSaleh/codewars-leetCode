/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    let n = nums.length
    let oneExists = false

    for (let i = 0; i < n; i++) {

        if (nums[i] === 1) oneExists = true
        if (nums[i] <= 0 || nums[i] >= n) {
            nums[i] = 1
        }
    }
    for (let j = 0; j < n; j++) {
        let index = Math.abs(nums[j] - 1)

        if (nums[index] > 0) nums[index] *= -1
    }

    if (!oneExists) return 1

    for (let k = 0; k < n; k++) {
        if (nums[k] > 0 && oneExists) return nums[k] + 1
    }
    return n + 1
};

console.log(firstMissingPositive([3, 4, -1, 16, 77]))