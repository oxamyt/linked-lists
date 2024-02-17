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
    this.length = 0;
  }

  headFunc() {
    if (!this.head) {
      return;
    } else {
      let cur = this.head;
      while (cur.tail !== null) {
        cur = cur.tail;
      }
      console.log(this.head);
    }
  }

  print() {
    let cur = this.head;
    while (cur) {
      console.log(cur.value);
      cur = cur.next;
    }
    console.log(this.length);
  }

  append(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.length++;
      return;
    }
    let cur = this.head;
    while (cur.next !== null) {
      cur = cur.next;
    }
    cur.next = newNode;
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
}

const list = new LinkedList();
list.append("1");
list.append("2");
list.append("3");
list.append("4");
list.append("5");
list.headFunc();
list.print();
