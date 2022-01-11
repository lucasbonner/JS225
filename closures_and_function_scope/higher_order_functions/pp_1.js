/*
Implement makeCheckEven below, such that the last line of the code returns an array [2, 4].
*/
let numbers = [1, 2, 3, 4];
function makeCheckEven() {
  return function(elem) {
    return elem % 2 === 0;
  };
}

let checkEven = makeCheckEven();

console.log(numbers.filter(checkEven)); // [2, 4]