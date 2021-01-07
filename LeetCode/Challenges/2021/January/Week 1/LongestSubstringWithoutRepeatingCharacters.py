# Given a string s, find the length of the longest substring without repeating characters.

# Example 1:
#
# Input: s = "abcabcbb"
# Output: 3
# Explanation: The answer is "abc", with the length of 3.
# Example 2:
#
# Input: s = "bbbbb"
# Output: 1
# Explanation: The answer is "b", with the length of 1.
# Example 3:
#
# Input: s = "pwwkew"
# Output: 3
# Explanation: The answer is "wke", with the length of 3.
# Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
# Example 4:
#
# Input: s = ""
# Output: 0


class Solution:
    def lengthOfLongestSubstring(self, s):
        count = 0
        str = ''

        for string in s:
            if string not in str:
                str += string
                print(len(str))
            else:
                if len(str) > count:
                    count = len(str)
                str = ''
                str += string
        if len(str) > count:
            count = len(str)
        return count


x = Solution()
# print(x.lengthOfLongestSubstring("abcabcbb"))
# print(x.lengthOfLongestSubstring("bbbbb"))
# print(x.lengthOfLongestSubstring("pwwkew"))
print(x.lengthOfLongestSubstring(" "))
print(x.lengthOfLongestSubstring("dvdf"))