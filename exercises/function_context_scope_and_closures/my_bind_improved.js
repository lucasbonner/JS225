/*
Alter the myBind function written in the previous exercise to support partial function application.
*/
function myBind(func, ctx, ...partialArgs) {
  return function(...args) {
    const fullArgs = partialArgs.concat(args);

    return func.apply(ctx, fullArgs);
  };
}

function addNumbers(a, b) {
  return a + b;
}

const addFive = myBind(addNumbers, null, 5);

console.log(addFive(10));
