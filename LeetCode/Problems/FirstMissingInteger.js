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

};

console.log(firstMissingPositive([3, 4, -1, 16, 77]))