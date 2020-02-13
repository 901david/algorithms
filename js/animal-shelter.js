const { PriorityQueueMin } = require("./priority-queue");

class Animal {
  constructor(name, age, animalType) {
    this.name = name;
    this.age = age;
    this.animalType = animalType;
  }

  isCat() {
    return this.animalType.toLowerCase() === "cat";
  }

  isDog() {
    return this.animalType.toLowerCase() === "dog";
  }
}

class AnimalShelter {
  constructor() {
    this.dogs = new PriorityQueueMin();
    this.cats = new PriorityQueueMin();
    this.currentStamp = 1;
  }

  enqueue(data) {
    if (data.isDog()) {
      this.dogs.enqueue({ data, priority: this.currentStamp });
      this.currentStamp++;
      return;
    }

    if (data.isCat()) {
      this.cats.enqueue({
        data,
        priority: this.currentStamp
      });
      this.currentStamp++;
      return;
    }

    throw new Error("That animal is not allowed in our shelter yet");
  }

  dequeueAny() {
    const noCats = this.cats.size === 0;
    const noDogs = this.dogs.size === 0;
    if (noCats && noDogs) return undefined;
    const oldestCatPriority = noCats ? Infinity : this.cats.peek().priority;
    const oldestDogPriority = noDogs ? Infinity : this.dogs.peek().priority;
    if (oldestCatPriority < oldestDogPriority) return this.cats.dequeue().data;
    else return this.dogs.dequeue().data;
  }

  dequeueDog() {
    if (this.dogs.size === 0) return undefined;
    return this.dogs.dequeue().data;
  }

  dequeueCat() {
    if (this.cats.size === 0) return undefined;
    return this.cats.dequeue().data;
  }
}

module.exports = { Animal, AnimalShelter };
