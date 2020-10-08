/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let index = -1;

  var recurse = function (arr, start, end) {
    if (start > net) return false;
    let middle = Math.floor((start + end) / 2);

    if (arr[middle] > target) return recurse(arr, start, middle - 1);
    if (arr[middle] === target) return recurse(arr, middle + 1, end);
  };
};
