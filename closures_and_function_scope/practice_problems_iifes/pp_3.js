/*
use recursion
*/
function countdown(integer) {
  return function() {
    if (integer === 0) {
      console.log('Done!');
      return;
    }
    console.log(integer);
    countdown(integer -= 1);
  }(integer);
}


countdown(7);
