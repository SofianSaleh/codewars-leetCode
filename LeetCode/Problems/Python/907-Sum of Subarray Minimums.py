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

        kMod = 1_000_000_007
        n = len(arr)
        ans = 0
        # prevMin[i] := index k s.t. arr[k] is the previous minimum in arr[:i]
        prevMin = [-1] * n
        # nextMin[i] := index k s.t. arr[k] is the next minimum in arr[i + 1:]
        nextMin = [n] * n
        stack = []

        for i, a in enumerate(arr):
            while stack and arr[stack[-1]] > a:
                index = stack.pop()
                nextMin[index] = i
            if stack:
                prevMin[i] = stack[-1]
            stack.append(i)

        for i, a in enumerate(arr):
            ans += a * (i - prevMin[i]) * (nextMin[i] - i)
            ans %= kMod

        return ans



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
