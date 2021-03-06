const HashTable = require("./hash-table");

describe("Hash Table", () => {
  describe("_hash method", () => {
    test("should return hashed version of key", () => {
      const myHash = new HashTable();
      expect(myHash._hash("cyan") < 54).toEqual(true);
      expect(myHash._hash("faffdsfdsfsdffd") < 54).toEqual(true);
      expect(myHash._hash("243d2d3d23d23d32d3d") < 54).toEqual(true);
      expect(myHash._hash("fiojqdoijdioqwjdoi") < 54).toEqual(true);
      expect(myHash._hash("purple") < 54).toEqual(true);
      expect(myHash._hash("cygreenan") < 54).toEqual(true);
      expect(myHash._hash("green") < 54).toEqual(true);
      expect(myHash._hash("orange") < 54).toEqual(true);
      expect(myHash._hash("pink") < 54).toEqual(true);
    });
  });

  describe("keys method", () => {
    test("should return keys", () => {
      const myHash = new HashTable();
      myHash.set("cyan", 5);
      myHash.set("purple", 10);
      expect(myHash.keys()).toEqual(["cyan", "purple"]);
    });
  });

  describe("values method", () => {
    test("should return values", () => {
      const myHash = new HashTable();
      myHash.set("cyan", 5);
      myHash.set("purple", 10);
      expect(myHash.values()).toEqual([5, 10]);
    });
  });

  describe("delete method", () => {
    test("should correctly delete key from keymap", () => {
      const myHash = new HashTable();
      myHash.set("red", 5);
      myHash.delete("red");
      expect(myHash.keyMap[myHash._hash("red")]).toEqual(undefined);
    });

    test("should correctly delete key from keymap when collisions have occurred", () => {
      const myHash = new HashTable();
      myHash.set("red", 5);
      myHash.set("56", 10);
      myHash.delete("56");
      expect(myHash.get("56")).toEqual(undefined);
    });
  });

  describe("set method", () => {
    test("should correctly set position in keyMap", () => {
      const myHash = new HashTable();
      myHash.set("cyan", 5);
      expect(myHash.keyMap[myHash._hash("cyan")]).toEqual([["cyan", 5]]);
    });

    test("should reeplace a key that already exists", () => {
      const myHash = new HashTable();
      myHash.set("cyan", 5);
      expect(myHash.keyMap[myHash._hash("cyan")]).toEqual([["cyan", 5]]);
      myHash.set("cyan", 10);
      expect(myHash.keyMap[myHash._hash("cyan")]).toEqual([["cyan", 10]]);
    });

    test("should correctly handle collisions in keyMap", () => {
      const myHash = new HashTable();
      myHash.set("red", 5);
      myHash.set("56", 10);
      expect(myHash.keyMap[myHash._hash("red")][0]).toEqual(["red", 5]);
      expect(myHash.keyMap[myHash._hash("red")][1]).toEqual(["56", 10]);
    });

    describe("get method", () => {
      test("should correctly get data in keyMap when exists with no collisions", () => {
        const myHash = new HashTable();
        myHash.set("cyan", 5);
        const myVal = myHash.get("cyan");
        expect(myVal).toEqual(5);
      });

      test("should correctly return undefined when key does not exist", () => {
        const myHash = new HashTable();
        myHash.set("cyan", 5);
        const myVal = myHash.get("purple");
        expect(myVal).toEqual(undefined);
      });

      test("should correctly get data when collisions are present", () => {
        const myHash = new HashTable();
        myHash.set("red", 5);
        myHash.set("56", 10);
        const red = myHash.get("red");
        const n56 = myHash.get("56");
        expect(red).toEqual(5);
        expect(n56).toEqual(10);
      });
    });
  });
});
