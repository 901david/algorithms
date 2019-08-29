//Create a queue form two stacks

class Stack {
  constructor() {
    this.data = [];
  }

  add(data) {
    this.data.push(data);
  }

  get() {
    return this.data.pop();
  }

  getLength() {
    return this.data.length;
  }
}

class Queue {
  constructor() {
    this.dat = new Stack();
  }

  add(data) {
    const anotherStack = new Stack();

    while (this.dat.getLength() !== 0) {
      anotherStack.add(this.dat.get());
    }
    this.dat.add(data);

    while (anotherStack.getLength() !== 0) {
      this.dat.add(anotherStack.get());
    }
  }

  get() {
    return this.dat.get();
  }

  view() {
    return this.dat;
  }
}

const myQueue = new Queue();
myQueue.add(10);
myQueue.add(9);
myQueue.add(6);
myQueue.get();
myQueue.add(5);
myQueue.get();
console.log(myQueue.view());
