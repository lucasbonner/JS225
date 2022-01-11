/*
We'll build a simple todo list program using the techniques we've seen in this assignment.
Write a makeList function that returns a new function that implements a todo list.
 The returned function should have the following behavior:

When called with an argument that is not already on the list,
it adds that argument to the list.
When called with an argument that is already on the list,
 it removes the element from the list.
When called without arguments, it logs all items on the list.
If the list is empty, it logs an appropriate message.
*/
function makeList() {
  let list = [];
  return function(arg = undefined) {
    if (!arg && list.length === 0) return "The list is empty.";
    if (!arg) return list.forEach(elem => console.log(elem));
    if (list.includes(arg)) {
      list.splice(list.indexOf(arg), 1);
      return `${arg} removed!`;
    } else {
      list.push(arg);
      return `${arg} added!`;
    }
  };
}

let list = makeList();
console.log(list());
console.log(list('make breakfast'));
console.log(list('read book'));
console.log(list());
console.log(list('make breakfast'));
console.log(list());
/*
> let list = makeList();
> list();
The list is empty.
> list('make breakfast');
make breakfast added!
> list('read book');
read book added!
> list();
make breakfast
read book
> list('make breakfast');
make breakfast removed!
> list();
read book
*/