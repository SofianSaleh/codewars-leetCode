class Solution(object):
    def getSmallestString(self, n, k):
        MAX_DIFF = ord('z')-ord('a')

        k -= n
