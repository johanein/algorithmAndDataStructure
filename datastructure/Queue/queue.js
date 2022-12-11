class Queue {
  constructor() {
    this.item = [];
  }
  enque(e) {
    this.item.push(e);
  }
  deque() {
    return this.item.shift();
  }
  peek() {
    return this.item[0];
  }

  isEmpty = () => {
    return !this.item.length;
  };

  size() {
    return this.item.length;
  }
  print() {
    return this.item.toString();
  }
}

const queue = new Queue();
console.log(queue.isEmpty());
console.log(queue.size());
queue.enque(1);
queue.enque(2);
console.log(queue.isEmpty());
console.log(queue.size());
console.log(queue.deque());
queue.enque(3);
console.log(queue.peek());
console.log(queue.print());
