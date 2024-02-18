class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  tailFunc() {
    if (!this.head) {
      console.log("Empty List");
      return;
    } else {
      let cur = this.head;
      while (cur.next) {
        cur = cur.next;
      }
      console.log(`Last node:${cur.value}`);
    }
  }

  headFunc() {
    if (!this.head) {
      console.log("Empty List");
      return;
    } else {
      let cur = this.head;
      console.log(`First node:${cur.value}`);
    }
  }

  get(i) {
    if (!this.head) {
      console.log("Empty List");
      return;
    }
    let cur = this.head;
    let j = 0;
    while (j <= i) {
      if (j === i) {
        console.log(`Your index ${i} node is: ${cur.value}`);
      }
      cur = cur.next;
      j++;
    }
  }

  pop() {
    if (!this.head) {
      console.log("Empty List");
      return;
    } else {
      let cur = this.head;
      let previous = null;
      while (cur.next) {
        previous = cur;
        cur = cur.next;
      }
      previous.next = null;
      this.length--;
    }
  }

  contains(valueFrom) {
    if (!this.head) {
      console.log("Empty list");
      return;
    } else {
      let cur = this.head;
      while (cur.next) {
        if (cur.value === valueFrom) {
          console.log(`Value of ${valueFrom}: True`);
          return;
        }
        cur = cur.next;
      }
      console.log(`Contains value of ${valueFrom}: False`);
    }
  }

  find(valueFrom) {
    if (!this.head) {
      console.log("Empty List");
      return;
    }
    let cur = this.head;
    let i = 0;
    while (cur) {
      if (cur.value === valueFrom) {
        console.log(`Index of ${valueFrom} is ${i}`);
        return;
      }
      i++;
      cur = cur.next;
    }
  }

  printSize() {
    let cur = this.head;
    while (cur) {
      console.log(cur.value);
      cur = cur.next;
    }
    console.log(null);
    console.log(`Size of nodes:${this.length}`);
  }

  printString() {
    let cur = this.head;
    while (cur) {
      console.log(cur.value);
    }
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
      this.length++;
      return;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }
}

const list = new LinkedList();
list.append("1");
list.append("2");
list.append("3");
list.prepend("4");
list.append("55");
list.pop();
list.printSize();
list.headFunc();
list.tailFunc();
list.find("3");
list.contains("2");
list.get(0);
