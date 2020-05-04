// Snail Sort
// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
// For better understanding, please follow the numbers of the next array consecutively:

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]
// This image will illustrate things more clearly:

// NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

// NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].

let actions = ["forward", "downward", "backwards", "upwards"];

const snail = function(array) {
  let loopCount = array.length + (array.length - 1);
  let num = 0;
  let arr = [];
  let leftAt = 0;
  for (let i = 0; i < loopCount; i++) {
    let act = actions[num];
    if (act === "forward") {
      for (let j = 0; j < array[i].length; j++) {
        arr.push(array[i][j]);
      }
      leftAt = array[i].length - 1;
      num++;
    } else if (act === "downward") {
      for (let k = 1; k < array.length; k++) {
        arr.push(array[k][leftAt]);
      }
      leftAt = array.length - 1;
      num++;
    } else if (act === "backwards") {
      for (let l = leftAt - 1; l >= 0; l--) {
        arr.push(array[leftAt][l]);
      }
      leftAt = 0;
      num++;
    } else if (act === "upwards") {
      for (let m = leftAt - 1; m >= arr.length; m--) {
        console.log(m, leftAt);
        arr.push(array[m][leftAt]);
      }
      leftAt = array.length - 1;
      num++;
    }
  }
  return arr;
};

console.log(
  snail([
    [1, 2, 3],
    [20, 21, 22],
    [19, 32, 33]
    // [18, 31, 36, 35, 26, 9],
    // [17, 30, 29, 28, 27, 10],
    // [16, 15, 14, 13, 12, 11]
  ])
);
