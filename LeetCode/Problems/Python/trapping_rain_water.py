class Solution:
    def trap(self, height: List[int]) -> int:
        n = len(height)
        if n == 0:
            return

        left_max = [0] * n
        right_max = [0] * n

        left_max[0] = height[0]
        right_max[n-1] = height[n-1]

        for i in range(1, n):
            left_max[i] = max(left_max[i - 1], height[i])

        for i in range(n-2, -1, -1):
            right_max[i] = max(right_max[i + 1], height[i])

        water = 0
        for i in range(n):

            min_height = min(right_max[i], left_max[i])
            if min_height > height[i]:
                print(min_height - height[i])
                water += min_height - height[i]
        return water
