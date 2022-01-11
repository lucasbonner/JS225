/*
Suppose we want to use code to keep track of products
 in our hardware store's inventory.
  A first stab might look something like this:

This code presents a number of problems,
however. What if we want to add another
kind of drill? Given what we've learned about
object orientation in the previous assignment,
 how could we use objects to organize
 these two groups of data?
*/

let scissors = {
  id: 0,
  name: 'Scissors',
  stock: 8,
  price: 10,
};

let drill = {
  id: 1,
  name: 'Cordless Drill',
  stock: 15,
  price: 45,
};