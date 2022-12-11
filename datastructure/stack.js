class Stack {
  constructor() {
    this.item = [];
  }

  push(v) {
    this.item.push(v);
  }

  pop() {
    return this.item.pop();
  }

  peek() {
    return this.item[this.item.length - 1];
  }

  isEmpty = () => {
    return !this.item.length;
  };

  size() {
    return this.item.length;
  }
  print() {
    console.log(this.item.toString());
  }
}

const stack = new Stack();
console.log(stack.isEmpty());
stack.push(1);
stack.push(2);
console.log(stack.isEmpty());
console.log(stack.size());
console.log(stack.pop());
stack.push(3);
console.log(stack.peek());
stack.print();
