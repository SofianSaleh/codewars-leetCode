/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

let x = new ListNode(
  1,
  new ListNode(
    2,
    new ListNode(
      3,
      new ListNode(4, new ListNode(5, new ListNode(6, new ListNode(7))))
    )
  )
);
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function (head, k) {
  let start = head;
  let first;
  let i = 0;
  while (start) {
    i++;
    if (i === k) {
      first = start;
    }
    start = start.next;
  }
  start = head;
  console.log(i);
  let j = 0;
  i = i - k + 1;
  while (start) {
    j++;
    if (j === i) {
      second = start;
    }
    start = start.next;
  }
  while
  console.log(i, first, second);
};

console.log(swapNodes(x, 2));
