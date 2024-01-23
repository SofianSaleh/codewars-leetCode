# You are given an array of strings arr. A string s is formed by the concatenation of a subsequence of arr that has unique characters.

# Return the maximum possible length of s.

# A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.


# Example 1:

# Input: arr = ["un","iq","ue"]
# Output: 4
# Explanation: All the valid concatenations are:
# - ""
# - "un"
# - "iq"
# - "ue"
# - "uniq" ("un" + "iq")
# - "ique" ("iq" + "ue")
# Maximum length is 4.
# Example 2:

# Input: arr = ["cha","r","act","ers"]
# Output: 6
# Explanation: Possible longest valid concatenations are "chaers" ("cha" + "ers") and "acters" ("act" + "ers").
# Example 3:

# Input: arr = ["abcdefghijklmnopqrstuvwxyz"]
# Output: 26
# Explanation: The only string in arr has all 26 characters.


# Constraints:

# 1 <= arr.length <= 16
# 1 <= arr[i].length <= 26
# arr[i] contains only lowercase English letters.


class Solution:
    def maxLength(self, arr):
        #! The code is not mine but its helpful to share
        max_length = 0  # Variable to store the maximum length of unique characters
        masks = [0]  # List to store the unique character sets as bit masks

        # Iterate through each string in the input list
        for string in arr:
            mask = 0  # Initialize mask for current string

            # Check each character in the string
            for char in string:
                char_index = ord(char) - ord('a')  # Map 'a'-'z' to 0-25

                # If the character is already in the mask, reset mask and break
                if mask >> char_index & 1:
                    mask = 0
                    break
                # Add the character to the mask
                mask |= 1 << char_index

            # If mask is not zero, it means the string had unique characters
            if mask != 0:
                # Check the new mask with existing masks for no overlap of characters
                for existing_mask in masks.copy():
                    if existing_mask & mask == 0:
                        new_mask = existing_mask | mask  # Combine the masks
                        masks.append(new_mask)  # Append the new mask to masks
                        max_length = max(max_length, bin(
                            new_mask).count('1'))  # Update max length

        return max_length  # return the maximum length found


c = Solution()
arr = ["un", "iq", "ue"]
arr2 = ["cha", "r", "act", "ers"]
arr3 = ["abcdefghijklmnopqrstuvwxyz"]
print([c.maxLength(arr),
       #    c.maxLength(arr2),
       #    c.maxLength(arr3)
       ])
