#

class Solution:
    def findErrorNums(self, nums):
        for num in nums:
            a = nums[abs(num) - 1]
            if nums[abs(num) - 1] < 0:
                duplicate = abs(num)
            else:
                nums[abs(num) - 1] *= -1

        for i, num in enumerate(nums):
            if num > 0:
                return [duplicate, i + 1]


c = Solution()
a = [1, 2, 2, 4]
e = [3, 2, 2]
b = [1, 1]
d = [2, 2]

print([c.findErrorNums(a), c.findErrorNums(b), c.findErrorNums(e)])
