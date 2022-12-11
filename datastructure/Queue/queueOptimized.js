class QueueOptimized {
  constructor() {
    this.items = {};
    this.rear = 0;
    this.front = 0;
  }
  enque(element) {
    this.items[this.rear] = element;
    this.rear++;
  }
  deque() {
    const items = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return items;
  }

  isEmpty() {
    return !(this.rear - this.front);
  }
  peek = () => {
    return this.items[this.front];
  };
  size = () => {
    return this.rear - this.front;
  };
  print = () => {
    return this.items;
  };
}

const queue = new QueueOptimized();
console.log(queue.isEmpty());
console.log(queue.size());
queue.enque(1);
queue.enque(2);
console.log(queue.isEmpty());
console.log(queue.size());
console.log(queue.deque());
console.log(queue.size());
queue.enque(3);
console.log(queue.peek());
console.log(queue.print());
