const LinkedList = require("./linked-list");

const isLinkedListPalindrome = LL => {
  const reversedLL = new LinkedList();
  const results = [];
  let current = LL.head;
  while (current.next) {
    results.unshift(current.data);
    current = current.next;
  }
  results.unshift(current.data);
  results.forEach(result => reversedLL.add(result));
  return LL.equals(reversedLL);
};

module.exports = isLinkedListPalindrome;
