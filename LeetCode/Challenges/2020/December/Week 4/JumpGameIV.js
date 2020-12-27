// Given an array of integers arr, you are initially positioned at the first index of the array.

// In one step you can jump from index i to index:

// i + 1 where: i + 1 < arr.length.
// i - 1 where: i - 1 >= 0.
// j where: arr[i] == arr[j] and i != j.
// Return the minimum number of steps to reach the last index of the array.

// Notice that you can not jump outside of the array at any time.

// Example 1:

// Input: arr = [100,-23,-23,404,100,23,23,23,3,404]
// Output: 3
// Explanation: You need three jumps from index 0 --> 4 --> 3 --> 9. Note that index 9 is the last index of the array.
// Example 2:

// Input: arr = [7]
// Output: 0
// Explanation: Start index is the last index. You don't need to jump.
// Example 3:

// Input: arr = [7,6,9,6,9,6,9,7]
// Output: 1
// Explanation: You can jump directly from index 0 to index 7 which is last index of the array.
// Example 4:

// Input: arr = [6,1,9]
// Output: 2
// Example 5:

// Input: arr = [11,22,7,7,7,7,7,7,7,22,13]
// Output: 3

// Constraints:

// 1 <= arr.length <= 5 * 10^4
// -10^8 <= arr[i] <= 10^8

/**
 * @param {number[]} arr
 * @return {number}
 */
var minJumps = function (arr) {
  if (arr.length == 1) return 0;
  let count = 0;
  let len = arr.length;
  let graph = {};

  for (let i = 0; i < len; i++) {
    if (!graph[arr[i]]) {
      graph[arr[i]] = i;
    }
  }
  let visited = [];
};

//         for (int i=0; i<length; i++)
//             graph.computeIfAbsent(arr[i], x->new LinkedList<>()).add(i);
//         // create the boolean array visited
//         boolean [] visited = new boolean [length];
//         // mark the first element as visited
//         visited[0] = true;
//         // since we do bfs, we need a queue
//         Queue<Integer> queue = new LinkedList<>();
//         queue.offer(0);
//         while (!queue.isEmpty()) {
//             int size = queue.size();
//             for (int i=size; i>0; i--) {
//                 int current = queue.poll();
//                 // if we reach the last index
//                 if (current == length - 1)
//                     return count;
//                 // get the possible next values
//                 List<Integer> next = graph.get(arr[current]);
//                 // now lets add the previous, ie current-1, next ies, current + 1 into the list
//                 next.add(current-1);
//                 next.add(current+1);
//                 for (Integer j:next) {
//                     if (j >= 0 && j<length && !visited[j]) {
//                         visited[j] = true;
//                         queue.offer(j);
//                     }
//                 }
//                 next.clear();
//             }
//             count += 1;
//         }
//         return 0;
//     }
// }
