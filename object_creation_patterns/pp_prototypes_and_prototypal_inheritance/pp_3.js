/*
Write a function that extends an object (destination object) with contents from multiple objects (source objects).
*/

function extend(...destination) {
  let result = destination[0];

  for (let i = 1; i <= destination.length; i++) {
    for (let prop in destination[i]) {
      if (Object.prototype.hasOwnProperty.call(destination[i], prop)) {
        result[prop] = destination[i][prop];
      }
    }
  }
  return result;
}

let foo = {
  a: 0,
  b: {
    x: 1,
    y: 2,
  },
};

let joe = {
  name: 'Joe'
};

let funcs = {
  sayHello() {
    console.log('Hello, ' + this.name);
  },

  sayGoodBye() {
    console.log('Goodbye, ' + this.name);
  },
};

let object = extend({}, foo, joe, funcs);

console.log(object.b.x);          // => 1
object.sayHello();                // => Hello, Joe
