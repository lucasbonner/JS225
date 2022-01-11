/*
What will the code below log to the console?
*/
let a = 10;
let obj = {
  a
}

let newObj = obj;
newObj.a += 10;

console.log(obj.a === a); //false
console.log(newObj.a === obj.a); //true
