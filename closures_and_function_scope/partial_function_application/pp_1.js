/*
Write a function named greet that takes two arguments and logs a greeting:
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

function greet(greeting, name) {
  return capitalize(greeting) + ', ' + name;
}

console.log(greet('howdy', 'Joe'));
// Howdy, Joe!
console.log(greet('good morning', 'Sue'));
// Good morning, Sue!