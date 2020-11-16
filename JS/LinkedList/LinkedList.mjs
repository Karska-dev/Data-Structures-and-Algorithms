class ListNode {
  constructor(val = null) {
    this.value = val;
    this.next = null;
  }
};

class LinkedList {
  constructor(root = null) {
    this.root = root ? root : new ListNode();
  }

  static printOutList(root) {
    let currentNode = root;
    let str = [];
    while (currentNode) {
      str.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return str.join('');
  }
}

export {ListNode, LinkedList};