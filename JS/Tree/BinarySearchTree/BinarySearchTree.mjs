import {BinaryTreeNode, BinaryTree} from '../BinaryTreeClass.mjs';

/* A Binary Search Tree is a special form of a binary tree. The value in each node must be greater than (or equal to) any values in its left subtree but less than (or equal to) any values in its right subtree. */

/* 
         5
        / \   
       2   6
      / \   \
     1  4    7
       /
      3
 */
class BinarySearchTreeNode extends BinaryTreeNode {
  constructor(val) {
    super(val);
  }
}

class BinarySearchTree extends BinaryTree {
  constructor (val) {
    super(val);
  }

  // determine if it is a valid binary search tree (BST)
  validate() {
    return false;
  }

}

export {BinarySearchTreeNode, BinarySearchTree};

let myBST = new BinarySearchTree();
myBST.createPreOrder([5, 2, 1, null, null, 4, 3, null, null, null, 6, null, 7]);
console.log(myBST.traversePreOrder());
console.log(myBST.traverseInOrder());
console.log(myBST.traversePostOrder());