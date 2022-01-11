/*
This code is a bit limited however, because we can only subtract by 5.
Implement the makeSubN function below so that we can supply any
value we want to be subtracted from a, and get a new function that will always subtract this value.
*/

function subtract(a, b) {
  return a - b;
}

function makeSubN(n) {
  return function(num) {
    return subtract(num, n);
  };
}

let sub5 = makeSubN(5);
console.log(sub5(10)); // 5
