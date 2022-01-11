/*
What will the code below log to the console?
*/
let message = 'Hello from the global scope!';

function func() {
  message = 'Hello from the function scope!';
  console.log(message);
}

func();
console.log(message);
/*
'Hello from the function scope!'
'Hello from the function scope!'

message resolves to the global scope variable
as a result the reassignment that occurs in the function
scope is refleceted in the global scope as well
*/
