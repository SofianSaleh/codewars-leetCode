# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


root1 = TreeNode(4, TreeNode(2, TreeNode(1, None, TreeNode(3))), TreeNode(7))


def searchBST(root, val):
    newTree = root

    while newTree != None:
        if newTree.val == val:
            return newTree
        elif newTree.val > val:
            newTree = newTree.left
        else:
            newTree = newTree.right
    return newTree


def searchBSTRecursive(root, val):

    if root == None:
        return root
    elif root.val > val:
        return searchBSTRecursive(root.left, val)
    elif root.val < val:
        return searchBSTRecursive(root.right, val)

    return root


print(searchBSTRecursive(root1, 2))
