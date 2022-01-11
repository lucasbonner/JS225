/*
Function.prototype.bind is a method on all function objects that allows us to hard-bind a function to a particular object.
The way this works is that you pass a context object to the bind method and it returns a new function that is essentially
 the same function but hard-bound to the context object supplied.

Create a function myBind, that accepts two arguments: 1) The function to bind, 2) The context object, and returns a new
 function that's hard-bound to the passed in context object.

 Use Function.prototype.apply in your solution
*/
const franchise = {
  name: 'How to Train Your Dragon',
  allMovies() {
    return [1, 2, 3].map(function(number) {
      return `${this.name} ${number}`;
    }, this);
  },
};

function myBind(func, ctx) {
  return function(...args) {
    return func.apply(ctx, args);
  };
}

let movies = myBind(franchise.allMovies, franchise);
console.log(movies());
