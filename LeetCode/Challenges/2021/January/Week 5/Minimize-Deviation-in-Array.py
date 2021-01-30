class Solution:
    def minimumDeviation(self, nums):
        max_heap = [-num*2 if num % 2 else -num for num in nums]
        heapq.heapify(max_heap)
        min_elem = -max(max_heap)
        result = float("inf")
        while len(max_heap) == len(nums):
            num = -heapq.heappop(max_heap)
