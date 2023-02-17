console.log("Hello, world!");
// input: 1->2->5->3->9->8->x
// output: 2->8->1->5->3->9->x
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

  append(value) {
    const node = new Node(value);

    if (this.size === 0) {
      this.head = node;
      this.size++;
    } else {
      let prevNode = this.head;
      while (prevNode.next) {
        prevNode = prevNode.next;
      }
      prevNode.next = node;
      this.size++;
    }
  }

  print() {
    let prevNode = this.head;
    while (prevNode.next) {
      console.log(prevNode.value);
      prevNode = prevNode.next;
    }
    console.log(prevNode.value);
  }
}

function reArrange(head) {
  let previousNode = head;
  const evenList = new LinkedList();
  const oddList = new LinkedList();
  while (previousNode.next) {
    if (previousNode.value % 2 === 0) {
      if (evenList.head === null) {
        evenList.head = previousNode;
      } else {
        evenList.next = previousNode;
      }
    } else {
      if (oddList.head === null) {
        oddList.head = previousNode;
      } else {
        oddList.next = previousNode;
      }
    }
    previousNode = previousNode.next;
  }

  let prevEvenList = evenList;
  while (prevEvenList.next) {
    prevEvenList.next = prevEvenList;
  }
  prevEvenList.next = oddList.head;
  return prevEvenList;
}
const newLinkedList = new LinkedList();
newLinkedList.append(1);
newLinkedList.append(2);
newLinkedList.append(5);
newLinkedList.append(3);
newLinkedList.append(9);
newLinkedList.append(8);
newLinkedList.print();
reArrange(newLinkedList.head).print();
