/* 
Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.

Example 1:
Input: l1 = [1,2,4], l2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:
Input: l1 = [], l2 = []
Output: []

Example 3:
Input: l1 = [], l2 = [0]
Output: [0]
 
Constraints:
The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both l1 and l2 are sorted in non-decreasing order.
*/
import {LinkedList} from './LinkedList.mjs';

function mergeTwoLists(a, b) {
  let c = new LinkedList();
  let p1 = a;
  let p2 = b;
  let result = c;

  while(p1 != null && p2 != null) {
    if (p1.value < p2.value) {
      c.next = p1;
      p1 = p1.next;
    } else {
      c.next = p2;
      p2 = p2.next;
    }
    c = c.next;
  }
  return result.next;
}

let a = {
  'value': 1, 'next': {
    'value': 2, 'next': {
      'value': 4, 'next': null,
    },
  },
};
console.log(LinkedList.printOutList(a));
let b = {
  'value': 1, 'next': {
    'value': 3, 'next': {
      'value': 4, 'next': null,
    },
  },
};
console.log(LinkedList.printOutList(b));
console.log(LinkedList.printOutList(mergeTwoLists(a, b)));