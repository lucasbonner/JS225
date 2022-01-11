/*
Create a makeCounterLogger function that takes a number as an argument and returns a function.
When we invoke the returned function with a second number, it should count up or down
from the first number to the second number, logging each number to the console:
*/
// > let countlog = makeCounterLogger(5);
// > countlog(8);
// 5
// 6
// 7
// 8
// > countlog(2);
// 5
// 4
// 3
// 2

function makeCounterLogger(secondNum) {
  return function(firstNum) {
    let lowerNum;
    let higherNum;
    if (firstNum > secondNum) {
      lowerNum = secondNum;
      higherNum = firstNum;
    } else {
      lowerNum = firstNum;
      higherNum = secondNum;
    }
    for (let i = lowerNum; i <= higherNum; i++) {
      console.log(i);
    }
  };
}

let countlog = makeCounterLogger(5);
countlog(8);
countlog(2);
