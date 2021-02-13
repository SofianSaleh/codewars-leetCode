import collections

class Solution(object):
    def shortestPathBinaryMatrix(self, grid):
        result = 0

        q = collections.deque([(0,0)])

        while q:
            result += 1
            next_depth = collections.deque()