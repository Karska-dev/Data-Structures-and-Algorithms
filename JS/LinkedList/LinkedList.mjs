class ListNode {
  constructor(val = null){
    this.value = val;
    this.next = null;
  }
};

class LinkedList {
  constructor(root = null) {
    this.root = root ? root : new ListNode();
  }
}

export default ListNode;