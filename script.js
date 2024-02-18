class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.tail = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  headFunc() {
    if (!this.head) {
      console.log("Empty List");
      return;
    } else {
      let cur = this.head;
      while (cur.next) {
        cur = cur.next;
      }
      console.log(`First node:${cur.value}`);
    }
  }

  tailFunc() {
    if (!this.head) {
      console.log("Empty List");
      return;
    } else {
      let cur = this.head;
      while (cur.tail) {
        cur = cur.tail;
      }
      console.log(`Last node:${cur.value}`);
    }
  }

  atIndex(i) {
    if (!this.head) {
      console.log("Empty List");
      return;
    }
    let cur = this.head;
    // let index = i++;
    let j = 0;
    while (j <= i) {
      if (j === i) {
        console.log(`Your index ${i} node is: ${cur.value}`);
      }
      cur = cur.next;
      j++;
    }
  }

  printSize() {
    let cur = this.head;
    while (cur) {
      console.log(cur.value);
      cur = cur.next;
    }
    console.log(`Size of nodes:${this.length}`);
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

    newNode.tail = cur;
    cur.next = newNode;
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.length++;
      return;
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
list.append("6");
list.append("7");
list.append("8");
list.append("9");
list.headFunc();
list.tailFunc();
list.printSize();
list.atIndex(0);
