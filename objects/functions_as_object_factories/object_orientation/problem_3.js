/*
It would also be useful to have the ability to
output descriptions of our product objects.
Implement such a function following the
example below:
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

function changePrice(object, newPrice) {
  if (newPrice < 0) {
    return 'Invalid';
  }

  object.price = newPrice;
}

function describeProduct(object) {
  return `=> Name: ${object.name}
=> ID: ${object.id}
=> Price: ${object.price}
=> Stock: ${object.stock}`;
}

console.log(describeProduct(scissors));
// => Name: Scissors
// => ID: 0
// => Price: $10
// => Stock: 8
