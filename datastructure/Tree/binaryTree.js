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
}

const bst = new BinarySearchTree();

console.log("Is the tree empty ?", bst.isEmpty());
bst.insert(10);
bst.insert(5);
bst.insert(15);
const value = 1;
console.log(`Is ${value} there ?`, bst.search(bst.root, value));
