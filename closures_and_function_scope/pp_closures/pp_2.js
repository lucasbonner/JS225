/*
Write a program that uses two functions, add and subtract,
to manipulate a running total value. When you invoke either
function with a number, it should add or subtract
that number from the running total and log the new total to the console. Usage looks like this:
*/
let num = 0;

function add(int) {
  num += int;
  return num;
}

function subtract(int) {
  num -= int;
  return num;
}


console.log(add(1));
console.log(add(42));
console.log(subtract(39));
console.log(add(6));

/*
> add(1);
1
> add(42);
43
> subtract(39);
4
> add(6);
10
*/