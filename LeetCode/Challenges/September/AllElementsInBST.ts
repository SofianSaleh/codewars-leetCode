
// Definition for a binary tree node.
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}



function getAllElements(root1: TreeNode | null, root2: TreeNode | null): number[] {
    let result: number[] = []

    function traverse(node: TreeNode): any {
        if (!node) {
            return []
        }
        return traverse(node.left) + " " + [node.val] + " " + traverse(node.right)
    }

    let res: any = traverse(root1) + " " + traverse(root2)
    res = res.split(' ')


    return result.sort((a, b) => a - b)
};