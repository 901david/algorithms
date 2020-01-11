const Node = require("./node");

class LinkedList {
  constructor(data) {
    this.head = data !== undefined ? new Node(data) : undefined;
    this.size = data !== undefined ? 1 : 0;
    this.isLinkedList = true;
    return this;
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
    return this;
  }

  add(data) {
    const newData = data.isLinkedList ? data.head : new Node(data);
    if (!this.head) {
      this.head = newData;
      return this;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newData;
    if (data.isLinkedList) this.size += data.size;
    else this.size++;
    return this;
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
    return this;
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
