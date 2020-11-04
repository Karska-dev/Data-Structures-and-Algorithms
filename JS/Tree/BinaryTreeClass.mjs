class BinaryTreeNode {
  
  constructor (val = null) {
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
  
  constructor (val) {
    this.root = new BinaryTreeNode(val);
  }

  createPreorder(arr, node = this.root) {
    
    if (arr.length > 0) {
      let val = arr.shift();
      if (!val) return null;

      if (!node) {
        node = new BinaryTreeNode(val);
      }
      else node.val = val;

      node.left = this.createPreorder(arr, node.left);
      node.right = this.createPreorder(arr, node.right); 
    }
    return node;
  }

  traversePreOrder(node = this.root, str = '') {

    if (!node ) return str;

    str += ` ${node.val} `;
    str = this.traversePreOrder(node.left, str);
    str = this.traversePreOrder(node.right, str);

    return str;
  }

}

export default BinaryTree;
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
