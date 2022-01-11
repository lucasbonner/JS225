/*
Create a function newStack, that, when called, returns a stack object with three methods: push, pop,
 and printStack.
 push takes a value and appends it to the stack. pop removes and returns the last element from the stack.
  printStack logs each remaining element of the stack on its own line, starting with the item that was last
   recently added to the stack and ending with the most recently added item.

Internally, use an array to implement the stack. Make sure that the array is not accessible from outside the methods.
*/
function newStack() {
  const array = [];
  return {
    push(arg) {
      array.push(arg);
    },
    pop(arg) {
      array.pop(arg);
    },
    printStack() {
      array.forEach(elem => console.log(elem));
    },
  };
}

let stack = newStack();
stack.push(5);
stack.printStack();
