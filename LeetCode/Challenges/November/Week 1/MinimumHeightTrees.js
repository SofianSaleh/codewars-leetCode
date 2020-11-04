// A tree is an undirected graph in which any two vertices are connected by exactly one path. In other words, any connected graph without simple cycles is a tree.

// Given a tree of n nodes labelled from 0 to n - 1, and an array of n - 1 edges where edges[i] = [ai, bi] indicates that there is an undirected edge between the two nodes ai and bi in the tree, you can choose any node of the tree as the root. When you select a node x as the root, the result tree has height h. Among all possible rooted trees, those with minimum height (i.e. min(h))  are called minimum height trees (MHTs).

// Return a list of all MHTs' root labels. You can return the answer in any order.

// The height of a rooted tree is the number of edges on the longest downward path between the root and a leaf.

// Example 1:

// Input: n = 4, edges = [[1,0],[1,2],[1,3]]
// Output: [1]
// Explanation: As shown, the height of the tree is 1 when the root is the node with label 1 which is the only MHT.
// Example 2:

// Input: n = 6, edges = [[3,0],[3,1],[3,2],[3,4],[5,4]]
// Output: [3,4]
// Example 3:

// Input: n = 1, edges = []
// Output: [0]
// Example 4:

// Input: n = 2, edges = [[0,1]]
// Output: [0,1]

// Constraints:

// 1 <= n <= 2 * 104
// edges.length == n - 1
// 0 <= ai, bi < n
// ai != bi
// All the pairs (ai, bi) are distinct.
// The given input is guaranteed to be a tree and there will be no repeated edges.

var findMinHeightTrees = function (n, edges) {
  if (n === 1) return [0];
  var result = [],
    tree = {},
    list = [],
    i,
    j,
    curr,
    visited = 0;

  for (i = 0; i < edges.length; i++) {
    curr = edges[i];
    if (!tree[curr[0]]) tree[curr[0]] = new Node(curr[0]);
    if (!tree[curr[1]]) tree[curr[1]] = new Node(curr[1]);
    tree[curr[0]].neighbor.push(tree[curr[1]]);
    tree[curr[1]].neighbor.push(tree[curr[0]]);
  }
  for (i in tree) {
    if (tree[i].neighbor.length === 1) {
      list.push(tree[i].val);
    }
  }
  bfs(list);
  for (i = 0; i < list.length; i++) {
    result.push(list[i]);
  }
  return result;

  function Node(val) {
    this.val = val;
    this.neighbor = [];
  }

  function bfs(list) {
    var len = list.length,
      top,
      topNeighbor;
    if (visited >= n - 2) return;
    while (len--) {
      visited++;
      top = tree[list.shift()];
      topNeighbor = top.neighbor[0];
      deleteNode(topNeighbor.neighbor, top.val);
      if (
        topNeighbor.neighbor.length <= 1 &&
        list.indexOf(topNeighbor.val) === -1
      ) {
        list.push(topNeighbor.val);
      }
      delete tree[top.val];
    }
    bfs(list);
  }
  function deleteNode(arr, val) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].val === val) {
        arr.splice(i, 1);
        return;
      }
    }
  }
};

console.log(
  findMinHeightTrees(4, [
    [1, 0],
    [1, 2],
    [1, 3],
  ])
);
console.log(
  findMinHeightTrees(6, [
    [3, 0],
    [3, 1],
    [3, 2],
    [3, 4],
    [5, 4],
  ])
);
console.log(findMinHeightTrees(1, []));
console.log(findMinHeightTrees(2, [[0, 1]]));
