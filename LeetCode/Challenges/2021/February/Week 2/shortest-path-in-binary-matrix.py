import collections

class Solution(object):
    def shortestPathBinaryMatrix(self, grid):
        result = 0

        directions = [(-1, -1), (-1, 0), (-1, 1), \
                      ( 0, -1), ( 0, 1), \
                      ( 1, -1), ( 1, 0), ( 1, 1)]

        q = collections.deque([(0,0)])

        while q:
            # result += 1
            # next_depth = collections.deque()
            # while q:
            #     i, j = q.popleft()
            #     if 0 <= j < len(grid) and 0 <= j < len(grid[0]) and not grid[i][j]:
            #         grid[i][j] = 1
            #         if i == len(grid)-1 and j == len(grid)-1:
            #             return result
            #         for d in directions:
                        
            #             next_depth.append((i+d[0], j+d[1]))
            q = next_depth

        return -1