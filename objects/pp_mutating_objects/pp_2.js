/*
What will the code below log to the console?
What does this output demonstrate in relation to the output of problem one?
*/
let myObj = { message: 'Greetings from the global scope!' };

function func(obj) {
  obj.message = 'Greetings from the function scope!';
  console.log(obj.message);
}

func(myObj);

console.log(myObj.message);

/*
Output:
'Greetings from the function scope!'
'Greetings from the function scope!'

objects are mutable; they are pass by reference

unlike primitives, an object can have its data changed w/o
breaking the connection to any variables poiting to it
thus reassigning myOBj's property message inside the function scope does
not break myObj's connection to the object itself
as a result myObj.message's reassignment in the function scope
is reflected in the global scope as well
*/
