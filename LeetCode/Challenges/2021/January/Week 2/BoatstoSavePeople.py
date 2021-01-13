# The i-th person has weight people[i], and each boat can carry a maximum weight of limit.

# Each boat carries at most 2 people at the same time, provided the sum of the weight of those people is at most limit.

# Return the minimum number of boats to carry every given person.  (It is guaranteed each person can be carried by a boat.)


# Example 1:
# [1,2,2,2,2,4,5,5,7] 5
# 1->2->2| 2->2->?3
# Input: people = [1,2], limit = 3
# Output: 1
# Explanation: 1 boat (1, 2)
# Example 2:
# 1,2,2,3
# Input: people = [3,2,2,1], limit = 3
# Output: 3
# Explanation: 3 boats (1, 2), (2) and (3)
# Example 3:
# 3,3,4,5
# Input: people = [3,5,3,4], limit = 5
# Output: 4
# Explanation: 4 boats (3), (3), (4), (5)
# Note:

# 1 <= people.length <= 50000
# 1 <= people[i] <= limit <= 30000


class Solution:
    def numRescueBoats(self, people, limit):
        count = 0
        i = 0
        j = len(people) - 1
        people.sort()

        while i <= j:
            remain = limit - people[j]
            j -= 1
            if people[i] <= remain:
                i += 1
            count += 1

        return count


# x = Solution()
# print(x.numRescueBoats([1, 2], limit=3))
# print(x.numRescueBoats([3, 2, 2, 1], limit=3))
# print(x.numRescueBoats([3, 5, 3, 4], limit=5))
