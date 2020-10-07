/**
 * Definition for singly-linked list.
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
let list = new ListNode(1, 2);
list.next(3);
list.next(4);
list.next(5);
console.log(list);
var rotateRight = function (head, k) {
  // Check the given parameters
  if (!head || !head.next || k === 0) return head;
  let len = 0;
  let current = head;
  while (current) {
    len += 1;
    current = current.next;
  }
};
// console.log(rotateRight());
//         k %= length
//         if k == 0:
//             return head

//         slow = head
//         fast = head

//         for _ in range(k):
//             fast = fast.next

//         while fast and fast.next:
//             slow = slow.next
//             fast = fast.next

//         ans = slow.next
//         slow.next = None
//         fast.next = head

//         return ans
