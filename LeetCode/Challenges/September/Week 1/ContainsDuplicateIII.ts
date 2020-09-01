const containsNearbyAlmostDuplicate = (
  nums: number[],
  k: number,
  t: number
): boolean => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (!(j - i > k)) {
        if (Math.abs(nums[i] - nums[j]) <= t) {
          return true;
        }
      }
    }
  }
  return false;
};

console.log(containsNearbyAlmostDuplicate([1, 5, 9, 1, 5, 9], 2, 3));
console.log(containsNearbyAlmostDuplicate([1, 2, 3, 1], 3, 0));
