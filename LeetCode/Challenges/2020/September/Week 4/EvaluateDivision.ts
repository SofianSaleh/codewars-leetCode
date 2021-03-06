// You are given equations in the format A / B = k, where A and B are variables represented as strings, and k is a real number (floating-point number). Given some queries, return the answers. If the answer does not exist, return -1.0.

// The input is always valid. You may assume that evaluating the queries will result in no division by zero and there is no contradiction.

// Example 1:

// Input: equations = [["a","b"],["b","c"]], values = [2.0,3.0], queries = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]
// Output: [6.00000,0.50000,-1.00000,1.00000,-1.00000]
// Explanation:
// Given: a / b = 2.0, b / c = 3.0
// queries are: a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ?
// return: [6.0, 0.5, -1.0, 1.0, -1.0 ]
// Example 2:

// Input: equations = [["a","b"],["b","c"],["bc","cd"]], values = [1.5,2.5,5.0], queries = [["a","c"],["c","b"],["bc","cd"],["cd","bc"]]
// Output: [3.75000,0.40000,5.00000,0.20000]
// Example 3:

// Input: equations = [["a","b"]], values = [0.5], queries = [["a","b"],["b","a"],["a","c"],["x","y"]]
// Output: [0.50000,2.00000,-1.00000,-1.00000]

// Constraints:

// 1 <= equations.length <= 20
// equations[i].length == 2
// 1 <= equations[i][0], equations[i][1] <= 5
// values.length == equations.length
// 0.0 < values[i] <= 20.0
// 1 <= queries.length <= 20
// queries[i].length == 2
// 1 <= queries[i][0], queries[i][1] <= 5
// equations[i][0], equations[i][1], queries[i][0], queries[i][1] consist of lower case English letters and digits.

function calcEquation(
  equations: string[][],
  values: number[],
  queries: string[][]
) {
  let graph: any = {};
  let tuple = [];

  for (let i = 0; i < equations.length; i++) {
    tuple.push([equations[i], values[i]]);
  }
  for (const [[x, y], v] of tuple) {
    if (graph[x]) graph[x][y] = v;
    else graph[x] = { [y]: v };
    if (graph[y]) graph[y][x] = 1 / v;
    else graph[y] = { [x]: 1 / v };
  }
  function dfs(s: string, t: string): number {
    // console.log(s, t);
    if (!graph[s]) return -1;
    // console.log(t === s);
    if (t === s) return 1;

    // console.log(Object.keys(graph[s]));
    for (const node of Object.keys(graph[s])) {
      console.log(node === t, graph[s][node]);

      if (node === t) return graph[s][node];
      else if (!visited[node]) {
        visited[node] = node;
        let v = dfs(node, t);
        // console.log(node, t);
        if (v !== -1) return graph[s][node] * v;
      }
      return -1;
    }
  }
  let res: number[] = [];
  for (const [qs, qt] of queries) {
    var visited = {};
    // console.log(qs, qt);
    res.push(dfs(qs, qt));
  }
  return res;
}

console.log(
  calcEquation(
    [
      ['a', 'b'],
      ['b', 'c'],
    ],
    [2.0, 3.0],
    [
      ['a', 'c'],
      ['b', 'a'],
      ['a', 'e'],
      ['a', 'a'],
      ['x', 'x'],
    ]
  )
);
