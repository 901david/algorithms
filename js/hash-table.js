class HashTable {
  constructor(size = 53) {
    this.size = size;
    this.keyMap = Array(size);
  }

  findNestedKey(key, values) {
    return values.find(([keyTest, _]) => keyTest === key)[1];
  }

  set(key, val) {
    if (this.keyMap[this._hash(key)] === undefined)
      this.keyMap[this._hash(key)] = [[key, val]];
    else this.keyMap[this._hash(key)].push([key, val]);
  }

  get(key) {
    const currentVal = this.keyMap[this._hash(key)];
    if (currentVal === undefined) return undefined;
    else if (currentVal[0][0] === key) return currentVal[0][1];
    else if (currentVal.length > 1) return this.findNestedKey(key, currentVal);
    else return undefined;
  }

  keys() {
    const results = [];
    this.keyMap
      .filter(bucket => bucket)
      .forEach(bucket => {
        results.push(...bucket.map(([key, _]) => key));
      });
    return results;
  }

  values() {
    const results = [];
    this.keyMap
      .filter(bucket => bucket)
      .forEach(bucket => {
        results.push(...bucket.map(([_, val]) => val));
      });
    return results;
  }

  _hash(key) {
    let total = 0;
    let PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      total = (total * PRIME + key.charCodeAt(i)) % this.size;
    }
    return total;
  }
}

module.exports = HashTable;
