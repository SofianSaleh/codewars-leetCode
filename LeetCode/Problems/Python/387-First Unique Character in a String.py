# Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.


# Example 1:

# Input: s = "leetcode"
# Output: 0
# Example 2:

# Input: s = "loveleetcode"
# Output: 2
# Example 3:

# Input: s = "aabb"
# Output: -1


# Constraints:

# 1 <= s.length <= 105
# s consists of only lowercase English letters.

class Solution:
    def firstUniqChar(self, s: str) -> int:
        my_set = {}
        count = 0
        for k, v in enumerate(s):
            print(v, s[k:])
            if v not in s[k:]:
                return k
        return -1


c = Solution()
print([c.firstUniqChar("leetcode"), c.firstUniqChar(
    "loveleetcode"), c.firstUniqChar("aabb")])
