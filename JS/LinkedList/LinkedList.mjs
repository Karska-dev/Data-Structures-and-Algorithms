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

  static createFromArr(arr) {
    const list = new ListNode(arr[0]);
    let node = list;
    for (let i = 1; i < arr.length; i++){
      node.next = new ListNode(arr[i]);
      node = node.next;
    }
    return list;
  }
}

export {ListNode, LinkedList};