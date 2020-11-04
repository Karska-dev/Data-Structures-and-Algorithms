import BinaryTree from "./BinaryTreeClass.mjs";

let myTree = new BinaryTree;
myTree.createPreorder([1, null, 2, 3]);
console.log(myTree.traversePreOrder()); // 1 2 3 

/* 
leavesPrintOut(node) {
  if (node === undefined) node = this.root;
  if (!node) return;

  if (!node.left && !node.right) {
    console.log(node.val);
    return;
  }
  this.leavesPrintOut(node.left);
  this.leavesPrintOut(node.right);
}

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