// #########################    PYTHON  #########################
class Solution:
def combinationSum3(self, k: int, n: int) -> List[List[int]]:
def dfs(k: int, n: int, count: int, path: List[int]):

answer = []
dfs(k, n, 1, [])
return answer



