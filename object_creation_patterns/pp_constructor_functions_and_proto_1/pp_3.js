/*
In this problem, we'll ask you to create a new
instance of an object, without having direct access to the constructor function:
*/
let ninjaA = (function() {
  function Ninja(){};
  return new Ninja();
})();

let ninjaB = new ninjaA.constructor;

// create a ninjaB object

console.log(ninjaB.constructor === ninjaA.constructor);    // should log true
