class Solution:
    def minimumDeviation(self, nums):
        max_heap = [-num*2 if num % 2 else -num for num in nums]
        heapq.heapify(max_heap)
        min_elem = -max(max_heap)
