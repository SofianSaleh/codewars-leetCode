// #########################    PYTHON  #########################
class Solution:
def combinationSum3(self, k: int, n: int) -> List[List[int]]:
def dfs(k: int, n: int, count: int, path: List[int]):
if k == 0 and n == 0:
answer.append(path)
return
if k > 0 and n == 0:
return
for i in range(count, 10):
    dfs(k - 1, n - 1, i + 1, path + [i])
answer = []
dfs(k, n, 1, [])
return answer



