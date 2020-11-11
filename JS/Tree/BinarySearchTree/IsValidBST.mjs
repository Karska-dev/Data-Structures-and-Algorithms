import {BinaryTree} from '../BinaryTreeClass.mjs';

// recursion
function isValidBSTRecursion(root) {
  function helper(node, lower, upper) {
    if (!node) return true;

    let val = node.val;
    if (lower && val < lower) return false;
    if (upper && val > upper) return false;

    if (!helper(node.right, val, upper)) return false;
    if (!helper(node.left, lower, val)) return false;
    return true;
  }
  return helper(root);
}

let myTree = new BinaryTree;
myTree.createPreOrder([5, 1, null, null, 4, 6, null, null, 7]); // false

console.log(myTree.traverseInOrder());
console.log(isValidBSTRecursion(myTree.root));

