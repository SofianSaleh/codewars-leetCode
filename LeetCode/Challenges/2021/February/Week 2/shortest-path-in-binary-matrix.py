import collections

class Solution(object):
    def shortestPathBinaryMatrix(self, grid):
        result = 0

        q = collections.deque([(0,0)])

        while q:
            result += 1
            next_depth = collections.deque()
            while q:
                if 0 <= j < len(grid) and 0 <= j < len(grid[0]) and not grid[i][j]:
                    grid[i][j] = 1