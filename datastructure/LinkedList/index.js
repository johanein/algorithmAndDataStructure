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
