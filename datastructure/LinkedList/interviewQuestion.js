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

  append(value) {
    const node = new Node(value);

    if (this.size === 0) {
      this.head = node;
      this.tail = node;
      this.size++;
    } else {
      this.tail.next = node;
      this.tail = node;
      this.size++;
    }
  }

  print() {
    let prevNode = this.head;
    let linkedList = "";
    while (prevNode) {
      linkedList += `${prevNode.value} -> `;
      prevNode = prevNode.next;
    }
    console.log(linkedList);
  }
  // input: 1->2->5->3->9->8->x
  // output: 2->8->1->5->3->9->x
  rearrange() {
    let prev = this.head;
    const evenList = new LinkedList();
    const oddList = new LinkedList();
    while (prev) {
      const isValueEven = prev.value % 2 === 0;
      if (isValueEven) {
        evenList.append(prev.value);
      } else {
        oddList.append(prev.value);
      }
      prev = prev.next;
    }
    evenList.tail.next = oddList.head;
    evenList.tail = oddList.tail;
    evenList.print();
    // oddList.print();
  }

  // end of class
}

const newLinkedList = new LinkedList();
newLinkedList.append(1);
newLinkedList.append(2);
newLinkedList.append(5);
newLinkedList.append(3);
newLinkedList.append(9);
newLinkedList.append(8);
newLinkedList.print();
newLinkedList.rearrange();
