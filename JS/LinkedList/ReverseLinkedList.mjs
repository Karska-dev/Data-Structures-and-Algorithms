import {LinkedList} from "./LinkedList.mjs";

let myList = LinkedList.createFromArr([1,2,3,4,5]);

// iteratively
function reverseLinkedList(node) {
  if (!node) return null;
  let oldHead = node;
  let newHead = node;
  let curNode = node;
  while (oldHead.next) {
    curNode = oldHead.next;
    oldHead.next = curNode.next;
    curNode.next = newHead;
    newHead = curNode;
  }
  return newHead;
}

//recurcively
function reverseLL(node) {
  if (!node || !node.next) return node;
  // traverse to the end until found a tail aka newHead
  let newHead = reverseLL(node.next);
  // bubble up and reverse a pointer direction
  // make a circle
  node.next.next = node;
  //breake a circle
  node.next = null;
  //bubble up newHead all the way of recursion
  return newHead;
}


console.log(LinkedList.printOutList(reverseLL(myList)));