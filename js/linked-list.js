const Node = require("./node");

class LinkedList {
  constructor(data) {
    this.head = new Node(data);
    this.size = 1;
  }

  getAt(index) {
    if (index === 0) return this.head;
    let current = this.head.next;
    let countIndex = 1;
    while (countIndex !== index && current.next) {
      current = current.next;
      countIndex++;
    }
    return current;
  }

  removeAt(index) {
    if (index === 0) return this.head;
    let current = this.head.next;
    let countIndex = 1;
    while (countIndex !== index && current.next) {
      current = current.next;
      countIndex++;
    }
    current.data = current.next.data;
    current.next = current.next.next;
  }

  add(data) {
    if (!this.head) {
      this.head = new Node(data);
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = new Node(data);
    this.size++;
  }
  remove() {
    if (this.size === 0) {
      return;
    }
    if (this.size === 1) {
      this.head = null;
    }
    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    current.next = null;
    this.size--;
  }

  getAsArray() {
    if (this.size === 0) {
      return [];
    }
    if (this.size === 1) {
      return Array.from(this.head.data);
    }
    const results = [];
    let current = this.head;
    while (current.next) {
      results.push(current.data);
      current = current.next;
    }
    return results;
  }
}

module.exports = LinkedList;
