/* Write an algorithm which Takes in two Linked lists. The lists are reversed representations of the digits positions
    Sum the two numbers and return the result in the same reversed linked list format
*/
const LinkedList = require("./linked-list");

const convertToCorrectInt = LL => {
  let current = LL.head;
  let intStr = "";
  while (current.next) {
    intStr = current.data + intStr;
    current = current.next;
  }
  intStr = current.data + intStr;
  return +intStr;
};

const convertIntToLinkedList = int => {
  const returnList = new LinkedList();
  const intStr = int.toString();
  for (let i = intStr.length - 1; i > -1; i--) {
    returnList.add(+intStr[i]);
  }
  return returnList;
};

const sumLinkedLists = (LLOne, LLTwo) => {
  const intOne = convertToCorrectInt(LLOne);
  const intTwo = convertToCorrectInt(LLTwo);
  return convertIntToLinkedList(intOne + intTwo);
};

module.exports = {
  sumLinkedLists,
  convertToCorrectInt,
  convertIntToLinkedList
};
