# Given an array of integers arr, find the sum of min(b), where b ranges over every (contiguous) subarray of arr. Since the answer may be large, return the answer modulo 109 + 7.


# Example 1:

# Input: arr = [3,1,2,4]
# Output: 17
# Explanation:
# Subarrays are [3], [1], [2], [4], [3,1], [1,2], [2,4], [3,1,2], [1,2,4], [3,1,2,4].
# Minimums are 3, 1, 2, 4, 1, 1, 2, 1, 1, 1.
# Sum is 17.
# Example 2:

# Input: arr = [11,81,94,43,3]
# Output: 444


# Constraints:

# 1 <= arr.length <= 3 * 104
# 1 <= arr[i] <= 3 * 104


class Solution:
    def sumSubarrayMins(self, arr):
        m=0
        ans=0
        s = 0
        MOD = 10**9 + 7

        for num in arr:
            s += num

            m = min(s, m)
            ans = max(ans, s - m)

        return ans % MOD
        # stack = []
        # ans = 0

        # for i, num in enumerate(arr):
        #     min = num
        #     ans += num
        #     stack.append(num)
        #     for j, numj in enumerate(arr[i+1:]):

        #         if numj < min:
        #             min = numj
        #             ans += numj

        #         else:
        #             ans += min

        # ans = ans % (10**9 + 7)
        # return ans


arr = [3, 1, 2, 4]
arr2 = [11, 81, 94, 43, 3]
c = Solution()
print([c.sumSubarrayMins(arr),
       c.sumSubarrayMins(arr2)])
