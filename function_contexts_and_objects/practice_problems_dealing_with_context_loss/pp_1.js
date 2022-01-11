/*
Our desired output for the code below is: Christopher Turk is a Surgeon.
What will the code output, and what explains the difference,
if any, between the actual and desired outputs?
*/

let turk = {
  firstName: 'Christopher',
  lastName: 'Turk',
  occupation: 'Surgeon',
  getDescription() {
    return this.firstName + ' ' + this.lastName + ' is a ' + this.occupation + '.';
  }
};

function logReturnVal(func) {
  let returnVal = func();
  console.log(returnVal);
}

logReturnVal(turk.getDescription.bind(turk));