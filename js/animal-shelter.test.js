const { AnimalShelter, Animal } = require("./animal-shelter");

describe("Animal", () => {
  test("should instantiate with correct name, age, and animalType", () => {
    const myAnimal = new Animal("Bob", 15, "Giraffe");
    expect(myAnimal.name).toEqual("Bob");
    expect(myAnimal.age).toEqual(15);
    expect(myAnimal.animalType).toEqual("Giraffe");
  });

  test("should correctly return true if it is a cat", () => {
    const myAnimal = new Animal("Bob", 15, "cat");
    expect(myAnimal.isCat()).toEqual(true);
  });

  test("should correctly return false if not a cat", () => {
    const myAnimal = new Animal("Bob", 15, "Giraffe");
    expect(myAnimal.isCat()).toEqual(false);
  });

  test("should correctly return true if it is a dog", () => {
    const myAnimal = new Animal("Bob", 15, "dog");
    expect(myAnimal.isDog()).toEqual(true);
  });

  test("should correctly return false if not a dog", () => {
    const myAnimal = new Animal("Bob", 15, "Giraffe");
    expect(myAnimal.isDog()).toEqual(false);
  });
});

describe("Animal Shelter", () => {
  test("should correctly enqueue a cat", () => {
    const myShelter = new AnimalShelter();
    myShelter.enqueue(new Animal("Bob", 29, "cat"));
    expect(myShelter.cats.peek().data).toEqual({
      name: "Bob",
      age: 29,
      animalType: "cat"
    });
  });
  test("should correctly enqueue a dog", () => {
    const myShelter = new AnimalShelter();
    myShelter.enqueue(new Animal("Bob", 29, "dog"));
    expect(myShelter.dogs.peek().data).toEqual({
      name: "Bob",
      age: 29,
      animalType: "dog"
    });
  });
  test("should correctly dequeueAny", () => {
    const myShelter = new AnimalShelter();
    myShelter.enqueue(new Animal("Bob", 29, "cat"));
    myShelter.enqueue(new Animal("Chris", 29, "dog"));
    myShelter.enqueue(new Animal("Gina", 29, "cat"));
    const val = myShelter.dequeueAny();

    expect(val).toEqual({
      name: "Bob",
      age: 29,
      animalType: "cat"
    });
  });
  test("should correctly dequeueDog", () => {
    const myShelter = new AnimalShelter();
    myShelter.enqueue(new Animal("Bob", 29, "cat"));
    myShelter.enqueue(new Animal("Chris", 29, "dog"));
    myShelter.enqueue(new Animal("Gina", 29, "cat"));
    myShelter.enqueue(new Animal("Crystal", 29, "dog"));

    expect(myShelter.dequeueDog()).toEqual({
      name: "Chris",
      age: 29,
      animalType: "dog"
    });
  });
  test("should correctly dequeueCat", () => {
    const myShelter = new AnimalShelter();
    myShelter.enqueue(new Animal("Bob", 29, "cat"));
    myShelter.enqueue(new Animal("Chris", 29, "dog"));
    myShelter.enqueue(new Animal("Gina", 29, "cat"));
    myShelter.enqueue(new Animal("Crystal", 29, "dog"));

    expect(myShelter.dequeueCat()).toEqual({
      name: "Bob",
      age: 29,
      animalType: "cat"
    });
  });

  test("should correctly dequeueCat when empty", () => {
    const myShelter = new AnimalShelter();

    expect(myShelter.dequeueCat()).toEqual(undefined);
  });

  test("should correctly dequeueDog when empty", () => {
    const myShelter = new AnimalShelter();

    expect(myShelter.dequeueDog()).toEqual(undefined);
  });

  test("should correctly dequeueAny when empty", () => {
    const myShelter = new AnimalShelter();

    expect(myShelter.dequeueAny()).toEqual(undefined);
  });

  test("should correctly dequeueAny when one cats is empty", () => {
    const myShelter = new AnimalShelter();
    myShelter.enqueue(new Animal("Chris", 29, "dog"));
    expect(myShelter.dequeueAny()).toEqual({
      name: "Chris",
      age: 29,
      animalType: "dog"
    });
  });

  test("should correctly dequeueAny when one cats is empty", () => {
    const myShelter = new AnimalShelter();
    myShelter.enqueue(new Animal("Chris", 29, "dog"));
    expect(myShelter.dequeueAny()).toEqual({
      name: "Chris",
      age: 29,
      animalType: "dog"
    });
  });
});
