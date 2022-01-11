/*
Although the solution above is more flexible, we now want to be
able to supply any operation, not just subtraction.
Implement makePartialFunc below.
*/
function makePartialFunc(func, b) {
  return function(a) {
    return func(a, b);
  };
}

function multiply(a, b) {
  return a * b;
}

let multiplyBy5 = makePartialFunc(multiply, 5);

console.log(multiplyBy5(100)); // 500
