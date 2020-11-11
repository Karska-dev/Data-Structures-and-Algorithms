import {BinaryTree} from '../BinaryTreeClass.mjs';

function secondLargestBST(root) {
  return root.val;
}

let myTree = new BinaryTree;
//myTree.createPreOrder([5, 1, null, null, 4, 6, null, null, 7]);
myTree.createPreOrder([5, 3, 1, null, null, 4, null, null, 8, 7, null, null, 12, 10, 9, null, null, 11]);
console.log(myTree.traverseInOrder());
console.log(secondLargestBST(myTree.root));