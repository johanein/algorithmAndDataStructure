const LinkedListWithTail = require("./linkedListWithTail");

class Queue extends LinkedListWithTail {
  enqueue(value) {
    this.append(value);
  }

  dequeue() {
    this.removeFromFront();
  }
}

const newQueueList = new Queue();

newQueueList.enqueue(1);
newQueueList.enqueue(2);
newQueueList.enqueue(3);
newQueueList.enqueue(4);
newQueueList.print();
newQueueList.dequeue();
newQueueList.print();
