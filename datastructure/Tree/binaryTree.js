class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    const left = root.left;
    const right = root.right;
    const rootValue = root.value;
    const newNodeValue = newNode.value;

    if (newNodeValue < rootValue) {
      if (left === null) {
        root.left = newNode;
      } else {
        this.insertNode(left, newNode);
      }
    } else {
      if (right === null) {
        root.right = newNode;
      } else {
        this.insertNode(right, newNode);
      }
    }
  }

  search(root, value) {
    if (root === null) {
      return false;
    }
    if (root.value === value) {
      return true;
    }
    if (value < root.value) {
      return this.search(root.left, value);
    } else {
      return this.search(root.right, value);
    }
  }
  // 1st traversal method below of DFS
  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }
  // 2nd traversal method of DFS
  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }
  // 3rd traversal method of DFS
  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }
  // BFS algorith for traversal below
  levelOrder() {
    // instead of below queue we can use optimized queue algorithm
    const queue = [];
    queue.push(this.root);
    while (queue.length) {
      let dequedNode = queue.shift();
      console.log(dequedNode.value);
      if (dequedNode.left) {
        queue.push(dequedNode.left);
      }
      if (dequedNode.right) {
        queue.push(dequedNode.right);
      }
    }
  }
  min(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }

  max(root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.max(root.right);
    }
  }

  delete = (value) => {
    this.root = this.deleteNode(this.root, value);
  };

  deleteNode = (root, value) => {
    if (root.value === null) {
      return null;
    }

    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      }
      if (!root.left) {
        return root.right;
      }
      if (!root.right) {
        return root.left;
      }

      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
    return root;
  };

  // ends here
}

const bst = new BinarySearchTree();

console.log("Is the tree empty ?", bst.isEmpty());
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
const value = 1;
console.log(`Is ${value} there ?`, bst.search(bst.root, value));
console.log("-----min value----");
console.log(bst.min(bst.root));
console.log("-----max value----");
console.log(bst.max(bst.root));
console.log("----preOrder-----");
bst.preOrder(bst.root);
console.log("----inOrder-----");
bst.inOrder(bst.root);
console.log("-----postOrder----");
bst.postOrder(bst.root);
console.log("-----levelOrder----");
bst.levelOrder();
const deleteValue = 7;
console.log(`-----delete value ${deleteValue}----`);
bst.delete(deleteValue);
console.log("-----levelOrder----");
bst.levelOrder();
