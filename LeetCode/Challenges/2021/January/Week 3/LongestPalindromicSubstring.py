# GGiven a string s, return the longest palindromic substring in s.


# Example 1:

# Input: s = "babad"
# Output: "bab"
# Note: "aba" is also a valid answer.
# Example 2:

# Input: s = "cbbd"
# Output: "bb"
# Example 3:

# Input: s = "a"
# Output: "a"
# Example 4:

# Input: s = "ac"
# Output: "a"


# Constraints:

# 1 <= s.length <= 1000
# s consist of only digits and English letters (lower-case and/or upper-case),iven a string s, return the longest palindromic substring in s.


# Example 1:

# Input: s = "babad"
# Output: "bab"
# Note: "aba" is also a valid answer.
# Example 2:

# Input: s = "cbbd"
# Output: "bb"
# Example 3:

# Input: s = "a"
# Output: "a"
# Example 4:

# Input: s = "ac"
# Output: "a"


# Constraints:

# 1 <= s.length <= 1000
# s consist of only digits and English letters (lower-case and/or upper-case),


class Solution:
    def longestPalindrome(self, s):

        def expand(s, left, right):
            while left >= 0 and right < len(s) and s[left] == s[right]:
                left -= 1
                right += 1
            return (right - left + 1) - 2
        left, right = -1, -2

        for i in range(len(s)):
            l = max(expand(s, i, i), expand(s, i, i + 1))
            if l > right - left + 1:
                right = i + l // 2
                left = right - l + 1
# def longestPalindrome(self, s):
#         left, right = -1, -2
#         for i in xrange(len(s)):
#             l = max(expand(s, i, i), expand(s, i, i+1))
#             if l > right-left+1:
#                 right = i+l//2
#                 left = right-l+1
#         return s[left:right+1] if left >= 0 else ""
