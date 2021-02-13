import collections

class Solution(object):
    def shortestPathBinaryMatrix(self, grid):
        result = 0

        q = collections.deque([(0,0)])