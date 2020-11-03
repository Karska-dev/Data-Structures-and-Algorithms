class TreeNode {
  
  constructor (val) {
    this.val = val ? val : null;
    this.left = null;
    this.right = null;
  }
}

class BiTree {
  
  constructor (val) {
    this.root = new TreeNode(val);
    this.name = 'binary tree';
  }

  createPreorder(arr, node) {
    node = node === undefined ? this.root : node;
    
    if (arr.length > 0) {
      let val = arr.shift();
      if (!val) return null;

      if (!node) {
        node = new TreeNode(val);
      }
      else node.val = val;

      node.left = this.createPreorder(arr, node.left);
      node.right = this.createPreorder(arr, node.right); 
    }
    return node;
  }

  printOutPreorder(node, str) {
    node = node === undefined ? this.root : node;
    str = str === undefined ? '' : str;
    
    if (!node ) return str;

    str += ` ${node.val},`;
    str = this.printOutPreorder(node.left, str);
    str = this.printOutPreorder(node.right, str);

    return str;
  }

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
  }
}

let myTree = new BiTree;
myTree.createPreorder(['a', 'b', 'c', null, null, null, 'd', 'e','f',null,null, null, 'g']);
console.log(myTree);
console.log(myTree.printOutPreorder());
myTree.leavesPrintOut();
console.log(myTree.leavesCount());
/* myTree.createPreorder([1, null, 2, 3]);
console.log(myTree);
console.log(myTree.printOutPreorder());  */