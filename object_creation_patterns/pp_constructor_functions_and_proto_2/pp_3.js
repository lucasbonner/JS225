/*
Create a function that can create an object with a
given object as its prototype, without using Object.create.
*/
function createObject(obj) {
  function Result() {}
  Result.prototype = obj;
  return new Result;
}

let foo = {
  a: 1
};

let bar = createObject(foo);
console.log(foo.isPrototypeOf(bar));         // true
