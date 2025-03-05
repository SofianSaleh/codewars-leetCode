class Solution:
    def checkPowersOfThree(self, n):

        root = 3
        power = 0
        ans = []

        while sum != n:
            ans.append(root**power)
            if root**power > n:

                ans.pop()
                break
            power += 1

        while n != 0 and len(ans) != 0:
            if n < ans[-1]:
                ans.pop()
                continue
            n = n - ans[-1]
            ans.pop()

        return True if n == 0 else False

    def checkPowersOfThreeptimalSolution(self, n):
        while n > 1:
            r, n = divmod(n, 3)
            if r == 2:
                return False
        return True


print(Solution().checkPowersOfThree(12))  # True
print(Solution().checkPowersOfThree(91))  # True
print(Solution().checkPowersOfThree(21))  # False
print(Solution().checkPowersOfThree(1))  # True
print(Solution().checkPowersOfThree(0))  # True
print(Solution().checkPowersOfThree(3))  # True
print(Solution().checkPowersOfThree(9))  # True
print(Solution().checkPowersOfThree(27))  # True
print(Solution().checkPowersOfThree(4))  # False
print(Solution().checkPowersOfThree(5))  # False
print(Solution().checkPowersOfThree(7))  # False
