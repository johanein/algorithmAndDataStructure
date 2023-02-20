// insertion : add an Element at a given index
// deletion : remove an Element at a given index
// serach : search an element at a given index or value

// can be used to implement stacks and queue
// real world application : image viewer
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  isEmpty = () => {
    return this.size === 0;
  };
  getSize = () => {
    return this.size;
  };
  prepend = (value) => {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  };
  append = (value) => {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.size++;
      return;
    }
    let prev = this.head;
    while (prev.next) {
      prev = prev.next;
    }
    this.size++;
    prev.next = node;
  };

  remove = (index) => {
    if (index < 0 || index >= this.size) {
      return null;
    }
    if (index === 0) {
      const valueDeleted = this.head.value;
      this.head = this.head.next;
      this.size--;
      return valueDeleted;
    }
    let prevNode = this.head;
    for (let i = 0; i < index - 1; i++) {
      prevNode = prevNode.next;
    }
    const toBeRemovedNode = prevNode.next;
    prevNode.next = toBeRemovedNode.next;
    this.sizes--;
    return toBeRemovedNode.value;
  };

  removeValue = (value) => {
    if (this.isEmpty()) {
      return null;
    }
    if (this.head.value === value) {
      return this.remove(0);
    }
    let prev = this.head;
    // let size = 2;
    while (prev?.next && prev?.next?.value !== value) {
      prev = prev?.next;
    }

    if (prev.next) {
      const tempNode = prev.next;
      prev.next = tempNode.next;
      this.size--;
      return tempNode.value;
    }
    return null;
  };

  insert = (value, index) => {
    if (index < 0 || index >= this.size) {
      return;
    }
    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let previous = this.head;
      for (let i = 0; i < index - 1; i++) {
        previous = previous.next;
      }
      let tempNode = previous.next;
      previous.next = node;
      node.next = tempNode;
      this.size++;
    }
  };

  search = (value) => {
    if (this.isEmpty()) {
      return -1;
    } else {
      let prev = this.head;
      for (let i = 0; prev; i++) {
        if (prev.value === value) {
          return i;
        }
        prev = prev.next;
      }
      // while (prev.next && prev.value !== value) {

      // }

      return -1;
    }
  };
  reverse = () => {
    if (this.size) {
      let current = this.head;
      let previous = null;
      while (current) {
        let next = current.next;
        current.next = previous;
        previous = current;
        current = next;
      }
      this.head = previous;
    }
  };
  print = () => {
    if (this.isEmpty()) {
      console.log("The list is empty");
    } else {
      let curr = this.head;
      let listValues = "";
      while (curr) {
        listValues += `${curr.value} `;
        curr = curr.next;
      }
      console.log(listValues);
    }
  };
}

const list = new LinkedList();
console.log(list.isEmpty());
console.log(list.getSize());
list.append(99);
list.print();
list.prepend(10);
list.append(20);
list.prepend(30);
list.print();
list.insert(88, 1);
list.print();
console.log(list.remove(3));
list.print();
console.log(list.removeValue(10));
list.print();
console.log(list.search(20));
list.reverse();
list.print();
