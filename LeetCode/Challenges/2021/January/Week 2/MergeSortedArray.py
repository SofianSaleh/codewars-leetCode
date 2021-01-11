# Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

# The number of elements initialized in nums1 and nums2 are m and n respectively. You may assume that nums1 has enough space (size that is equal to m + n) to hold additional elements from nums2.


# Example 1:

# Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
# Output: [1,2,2,3,5,6]
# Example 2:

# Input: nums1 = [1], m = 1, nums2 = [], n = 0
# Output: [1]


# Constraints:

# 0 <= n, m <= 200
# 1 <= n + m <= 200
# nums1.length == m + n
# nums2.length == n
# -109 <= nums1[i], nums2[i] <= 109


class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        k = m + n

        while n > 0:
            k -= 1
            if m > 0 and nums1[m - 1] > nums2[n - 1]:
                m -= 1
                nums1[k] = nums1[m]
            else:
                n -= 1
                nums1[k] = nums2[n]


x = Solution()
print(x.merge([1, 2, 3, 0, 0, 0]
              3,
              [2, 5, 6],
              3))  # [1,2,2,3,5,6]
print(x.merge(nums1=[1], m=1, nums2=[], n=0))  # [1]
