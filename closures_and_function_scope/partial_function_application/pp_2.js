/*
Use the partial function shown above and your
solution to problem 1 to
create sayHello and sayHi functions that work like this:
*/
function capitalize(str) {
  let result = [];
  str.split('').forEach((elem, index) => {
    if (index === 0) {
      result.push(elem.toUpperCase());
    } else {
      result.push(elem);
    }
  });
  return result.join("");
}

function greet(greeting) {
  return function(name) {
    return capitalize(greeting) + ', ' + name;
  };
}

let sayHello = greet('hello');
let sayHi = greet('hi');
console.log(sayHello('Brandon'));
// Hello, Brandon!
console.log(sayHi('Sarah'));
// Hi, Sarah!