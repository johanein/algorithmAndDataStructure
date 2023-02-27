const LinkedListWithTail = require("./linkedListWithTail");

class StackUsingLinkedList {
  constructor() {
    this.list = new LinkedListWithTail();
  }

  push(value) {
    this.list.prepend(value);
  }
  pop() {
    this.list.removeFromFront();
  }
  peek() {
    console.log(this.list.head.value);
  }
  print() {
    this.list.print();
  }
}

const stack = new StackUsingLinkedList();
stack.push(4);
stack.push(3);
stack.push(2);
stack.push(1);
stack.pop();
stack.peek();
stack.print();
