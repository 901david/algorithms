/* Create a class which takes a number of a max size for a stack and it will maintain multiple 
stacks once a stack reaches that size
Must implement:
1. push
2. pop
3. popAt
*/
const Stack = require("./Stack");

class SetOfStacks {
  constructor(stackSize) {
    this.stackSize = stackSize;
    this.stackCount = 0;
    this.stacks = [];
  }

  getLastStack() {
    if (this.stackCount === 0) return undefined;
    return this.stacks[this.stackCount - 1];
  }

  push(val) {
    if (
      this.getLastStack() === undefined ||
      this.getLastStack().size === this.stackSize
    ) {
      const newStack = new Stack();
      newStack.push(val);
      this.stacks.push(newStack);
      this.stackCount++;
      return;
    }

    this.getLastStack().push(val);
  }

  pop() {
    if (this.getLastStack() === undefined) return undefined;
    const poppedValue = this.getLastStack().pop();
    if (this.getLastStack().size === 0) {
      this.stacks.pop();
      this.stackCount--;
    }
    return poppedValue;
  }

  popAt(index) {
    const currentPossibleIndices = this.stackCount * this.stackSize - 1;
    if (index > currentPossibleIndices)
      throw new Error("Index is out of bounds");

    const stackToLookAt = Math.floor(index / this.stackSize);
    const stackIndex = index % this.stackSize;

    /* One case that is very easy, it is last stack and top value */
    const isLastInStacks = stackToLookAt === this.stackCount - 1;
    const isLastInStack = stackIndex === this.stacks[stackToLookAt].size - 1;

    if (isLastInStacks && isLastInStack) {
      const val = this.stacks[stackToLookAt].pop();
      if (this.getLastStack().size === 0) {
        this.stackCount--;
        this.stacks.pop();
      }
      return val;
    }

    /* Otherwise we need to start popping off values into a new StackSet until we get to correct stack
    and correct value
    */
    const helper = new SetOfStacks(this.stackSize);

    /* Check if we are on the stack we care about */
    while (this.stackCount !== stackToLookAt + 1) {
      while (
        this.stackCount !== 0 &&
        this.stacks[this.stackCount - 1].size !== 0
      ) {
        helper.push(this.stacks[this.stackCount - 1].pop());
      }

      this.stacks.pop();
      this.stackCount--;
    }

    /* We are now at the correct stack, now we need to get to correct index position in stack
     */
    while (
      this.stackCount !== 0 &&
      this.stacks[this.stackCount - 1].size - 1 !== stackIndex
    ) {
      helper.push(this.stacks[this.stackCount - 1].pop());
    }

    /* Save the return value which is now top position of helper stack */
    const returnVal = this.pop();

    while (helper.stackCount !== 0) {
      this.push(helper.pop());
    }
    return returnVal;
  }
}

module.exports = SetOfStacks;
