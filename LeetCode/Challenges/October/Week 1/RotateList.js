/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {};

//         if not head or not head.next or k == 0:
//             return head

//         length = 0
//         curr = head
//         while curr:
//             length += 1
//             curr = curr.next

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
