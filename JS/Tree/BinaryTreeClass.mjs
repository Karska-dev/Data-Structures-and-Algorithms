class BinaryTreeNode {
  constructor(val = null) {
    this.val = val;
    this.left = null;
    this.right = null;
  }

  inserLeft(val) {
    this.left = new BinaryTreeNode(val);
    return this.left;
  }

  insertRight(val) {
    this.right = new BinaryTreeNode(val);
    return this.right;
  }
}

class BinaryTree {
  constructor(val) {
    this.root = new BinaryTreeNode(val);
  }

  // preorder, inorder, postorder or level-order
  createPreOrder(arr, node = this.root) {
    if (arr.length > 0) {
      let val = arr.shift();
      if (!val) return null;

      if (!node) {
        node = new BinaryTreeNode(val);
      } else node.val = val;

      node.left = this.createPreOrder(arr, node.left);
      node.right = this.createPreOrder(arr, node.right);
    }
    return node;
  }

  // preorder, inorder, postorder or level-order
  traversePreOrder(node = this.root, arr = []) {
    if (!node) return arr;

    arr.push(node.val);
    this.traversePreOrder(node.left, arr);
    this.traversePreOrder(node.right, arr);
    return arr;
  }

  traverseInOrder(node = this.root, arr = []) {
    if (!node) return arr;

    this.traverseInOrder(node.left, arr);
    arr.push(node.val);
    this.traverseInOrder(node.right, arr);
    return arr;
  }

  traversePostOrder(node = this.root, arr = []) {
    if (!node) return arr;

    this.traversePostOrder(node.left, arr);
    this.traversePostOrder(node.right, arr);
    arr.push(node.val);
    return arr;
  }
}

export { BinaryTreeNode, BinaryTree };
// let myTree = new BinaryTree;
// myTree.createPreorder(['a', 'b', 'c', null, null, null, 'd', 'e','f',null,null, null, 'g']);
/*         a
         /  \
        b    d
       /    / \
      c    e   g
          /
         f
*/
// console.log(myTree.traversePreOrder()); // a  b  c  d  e  f  g

// myTree.createPreorder([1, null, 2, 3]);
/*
      1
     / \
  null 2
      / \
     3  null
 */
// console.log(myTree.traversePreOrder()); // 1 2 3
