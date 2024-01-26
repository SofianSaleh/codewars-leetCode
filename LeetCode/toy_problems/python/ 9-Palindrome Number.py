# Given an integer x, return true if x is a
# palindrome
# , and false otherwise.


# Example 1:

# Input: x = 121
# Output: true
# Explanation: 121 reads as 121 from left to right and from right to left.
# Example 2:

# Input: x = -121
# Output: false
# Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
# Example 3:

# Input: x = 10
# Output: false
# Explanation: Reads 01 from right to left. Therefore it is not a palindrome.


# Constraints:

# -231 <= x <= 231 - 1


# Follow up: Could you solve it without converting the integer to a string?

class Solution:
    def isPalindrome(self, x):
        # Normal Solution:
        # string_int = str(x)
        # print(string_int[::-1])
        # i = 0
        # j = len(string_int) - 1

        # while i < j:
        #     if string_int[i] != string_int[j]:
        #         return False
        #     i += 1
        #     j -= 1
        # return True
        # New Solution:

        string = str(x)

        if string == string[::-1]:
            return True
        return False


c = Solution()
print([c.isPalindrome(121), c.isPalindrome(-121)])
