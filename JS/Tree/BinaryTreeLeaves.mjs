import BinaryTree from "./BinaryTreeClass.mjs";

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
/*
leavesCount(node, count) {
  if (node === undefined) node = this.root;
  if (count === undefined) count = 0;
  if (!node) return count;

  if (!node.left && !node.right) {
    console.log(`node is ${node.val} and count is: ${count}`)
    return ++count;
  }

  count = this.leavesCount(node.left, count);
  count = this.leavesCount(node.right, count);

  return count;
} */

let myTree = new BinaryTree;
myTree.createPreorder(['a', 'b', 'c', null, null, null, 'd', 'e','f',null,null, null, 'g']);

leavesPrintOut(myTree.root);