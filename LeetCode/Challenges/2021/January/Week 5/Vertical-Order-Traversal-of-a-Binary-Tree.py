# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right


class Solution:
    def verticalTraversal(self, root):
        def dfs(node, lookup, x, y):
            if not node:
                return
            lookup[x][y].append(node)
            dfs(node.left, lookup, x-1, y+1)
            dfs(node.right, lookup, x+1, y+1)

        lookup = collections.defaultdict(lambda: collections.defaultdict(list))
