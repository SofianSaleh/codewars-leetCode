function containsNearbyAlmostDuplicate(nums: number[], k: number, t: number): boolean {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            console.log(j, i)
            if (!((j - i) > k)) {
                let sum: number = Math.abs(nums[i] - nums[j])
                if (sum <= t) {
                    return true
                }
            }

        }
    }
    return false
};

console.log(containsNearbyAlmostDuplicate([1, 5, 9, 1, 5, 9], 2, 3))