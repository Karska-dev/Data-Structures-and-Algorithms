import { BinaryTree } from "./BinaryTreeClass.mjs";

function leavesPrintOut(root) {
  
  if (!root) {
    console.log('No leaves!');
    return;
  }

  if (!root.left && !root.right) {
    console.log(root.val);
    return;
  }
  if (root.left) leavesPrintOut(root.left);
  if (root.right) leavesPrintOut(root.right);
  return;
}

function leavesCount(node, count = 0) {
  if (!node) return count;

  if (!node.left && !node.right) return ++count;

  count = leavesCount(node.left, count);
  count = leavesCount(node.right, count);

  return count;
} 

let myTree = new BinaryTree;
myTree.createPreorder(['a', 'b', 'c', null, null, null, 'd', 'e','f',null,null, null, 'g']);

leavesPrintOut(myTree.root);
console.log(leavesCount(myTree.root));