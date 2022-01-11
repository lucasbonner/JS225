/*
Consider the output below:

Copy Code
countdown(7);
7
6
5
4
3
2
1
0
Done!
Implement a function countdown that uses an IIFE to generate the desired output.
*/
function countdown(integer) {
  return function() {
    for (let i = integer; i >= 0; i--) {
      console.log(i);
    }
    console.log('Done!');
  }(integer);
}


countdown(7);
