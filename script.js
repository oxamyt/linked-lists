// Creating Node Class
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Creating List Class
class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  // Get last node method
  getTail() {
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

  // Get first node method
  getHead() {
    if (!this.head) {
      console.log("Empty List");
      return;
    } else {
      let cur = this.head;
      console.log(`First node:${cur.value}`);
    }
  }

  // Get value at index method
  getValueAt(i) {
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

  // Remove last node method
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

  // Check for value in list method
  containsValue(valueFrom) {
    if (!this.head) {
      console.log("Empty list");
      return;
    } else {
      let cur = this.head;
      while (cur.next) {
        if (cur.value === valueFrom) {
          return true;
        }
        cur = cur.next;
      }
      return false;
    }
  }

  // Find index of value method
  findIndex(valueFrom) {
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

  // Print Linked List data in array method
  print() {
    let cur = this.head;
    let array = [];
    while (cur) {
      array.push(cur.value);
      cur = cur.next;
    }
    console.log(array);
    console.log(`Size of nodes:${this.length}`);
  }

  // Insert node at index method
  insertAt(value, index) {
    const newNode = new Node(value);
    if (this.head === null) {
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return;
    } else if (index === 0) {
      this.head = newNode;
      this.length++;
      return;
    }
    let cur = this.head;
    let previous = null;
    let i = 0;

    while (cur && i < index) {
      previous = cur;
      cur = cur.next;
      i++;
    }
    newNode.next = cur;
    previous.next = newNode;
    this.length++;
  }

  // Remove node at index method
  removeAt(index) {
    if (this.head === null) {
      console.log("Empty list, nothing to delete");
      return;
    }
    let cur = this.head;
    let previous = null;
    let i = 0;
    while (cur && i < index) {
      previous = cur;
      cur = cur.next;
      i++;
    }
    previous.next = cur.next;
  }

  // Add node in the end of list method
  appendValue(value) {
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

  // Add node in the beginning of the list method
  prependValue(value) {
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

// Create list
const list = new LinkedList();
