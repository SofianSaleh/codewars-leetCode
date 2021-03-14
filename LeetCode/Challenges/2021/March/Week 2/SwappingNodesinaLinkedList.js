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
  let A = head,
    B = head,
    K,
    temp;
  for (let i = 1; i < k; i++) A = A.next;
  (K = A), (A = A.next);
  while (A) (A = A.next), (B = B.next);
  (temp = K.val), (K.val = B.val), (B.val = temp);
  return head;
};

console.log(swapNodes(x, 2));
