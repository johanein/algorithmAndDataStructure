class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  print() {
    if (this.isEmpty()) return;
    let prev = this.head;
    let listValues = "";
    while (prev) {
      listValues += `${prev.value}, `;
      prev = prev.next;
    }
    console.log(listValues);
  }
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }
  removeFromFront() {
    if (this.isEmpty()) {
      return;
    } else {
      if (this.head === this.tail) {
        this.head = this.head.next;
        this.tail = this.tail.next;
      } else {
        this.head = this.head.next;
      }
      this.size--;
    }
  }

  removeFromEnd() {
    if (this.isEmpty()) return;
    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      let prev = this.head;
      while (prev.next !== this.tail) {
        prev = prev.next;
      }
      prev.next = null;
      this.tail = prev;
    }
    this.size--;
  }
}

const list = new LinkedList();
list.prepend(2);
list.prepend(1);
list.append(3);
list.prepend(4);
list.removeFromFront();
list.append(1);
list.removeFromEnd();
list.print();
console.log(list.size);
