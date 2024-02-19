# Given an integer n, return true if it is a power of two. Otherwise, return false.

# An integer n is a power of two, if there exists an integer x such that n == 2x.


# Example 1:

# Input: n = 1
# Output: true
# Explanation: 20 = 1
# Example 2:

# Input: n = 16
# Output: true
# Explanation: 24 = 16
# Example 3:

# Input: n = 3
# Output: false


# Constraints:

# -231 <= n <= 231 - 1


# Follow up: Could you solve it without loops/recursion?

class Solution(object):
    def isPowerOfTwo(self, n):
        """
        :type n: int
        :rtype: bool
        """
        #! Solution 1
        # if n == 1:
        #     return True
        # i = float(n)/float(2)
        # while i > 1:
        #     print(i)
        #     i = float(i)/float(2)

        # return True if i == 1 else False

        #! Solution 2

        # result = 0
        # pow = 0

        # while True:
        #     result = 2**pow

        #     if result == n:
        #         return True
        #     elif result > n:
        #         return False
        #     pow += 1

        # ! Solution 3 (Not My Solution)

        return False if n < 0 else bin(n).count('1') == 1


c = Solution()
print(c.isPowerOfTwo(16))
print(c.isPowerOfTwo(3))
print(c.isPowerOfTwo(1))
print(bin(14))
