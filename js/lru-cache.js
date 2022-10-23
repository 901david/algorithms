class DLL {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
    this.listRefs = new Map();
  }
  getNode(val) {
    return this.listRefs.get(val);
  }
  insert() {}
  remove() {}
}

/* Maintain Doubly linked list, we can evict on tail, and insert on head when  something new added. 
    Map maintains Refs so no searching.
*/

class LRUCache {
  constructor() {}
  getByKey() {}
  putByKey() {}
}
