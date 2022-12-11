class CircularQueue {
  constructor(capacity) {
    this.array = new Array(capacity);
    this.capacity = capacity;
    this.currentLength = 0;
    this.front = -1;
    this.rear = -1;
  }
  enqueue(element) {
    if (this.isFull()) return;
    // modulus operator for circular edge case when 5 elements are added, and dequeued then enque occurs
    this.rear = (this.rear + 1) % this.capacity;
    this.array[this.rear] = element;
    this.currentLength++;
    if (this.front === -1) this.front = this.rear;
  }
  dequeue() {
    if (this.isEmpty()) return null;
    const item = this.array[this.front];
    this.array[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.currentLength--;
    if (this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }
    return item;
  }
  isFull() {
    return this.currentLength === this.capacity;
  }
  isEmpty() {
    return this.currentLength === 0;
  }
  peek() {
    return this.array[this.front];
  }
  size() {}
  print() {
    if (this.isEmpty()) {
      console.log("The queue is empty");
    } else {
      let i;
      let string = "";
      for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
        string += this.array[i] + " ";
      }
      string += this.array[i]; // for appending the rear index
      return string;
    }
  }
}

const queue = new CircularQueue(5);
console.log(queue.isEmpty());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
console.log(queue.isEmpty());
console.log(queue.isFull());
console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue.print());
queue.enqueue(60);
console.log(queue.print());
console.log(queue.dequeue());
queue.enqueue(60);
console.log(queue.print());
console.log(queue.isFull());
