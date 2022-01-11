/*
But let's pretend that we must use variables and interpolation to accomplish this.
 Can you think of a way to refactor this code so we don't have any other variables in the global scope besides greeter?
*/
const greeter = {
  message: (() => {
    const name = 'Naveed';
    const greeting = 'Hello';

    return `${greeting} ${name}!`;
  })(),

  sayGreetings() {
    console.log(this.message);
  }
};
