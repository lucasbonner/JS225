/*
Use one of the methods we learned in this lesson to invoke increment
with explicit context such that foo.a is incremented with
 each invocation of incrementA.
*/

let foo = {
  a: 0,
  incrementA() {
    function increment() {
      this.a += 1;
    }

    increment.call(foo);
  }
};

foo.incrementA();
foo.incrementA();
foo.incrementA();
console.log(foo.a);