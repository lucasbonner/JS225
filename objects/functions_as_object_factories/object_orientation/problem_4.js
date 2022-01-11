/*
We want our code to take an object-oriented
approach to keeping track of the products,
and although the functions we just
wrote work fine, since they are
manipulating data in the objects,
we should place them in the objects
themselves. Rewrite the code such
that the functions describeProduct
and setProductPrice become methods
describe and setPrice on both our
scissors and drill objects.
*/
let scissors = {
  id: 0,
  name: 'Scissors',
  stock: 8,
  price: 10,
  describe() {
    return `=> Name: ${this.name}
    => ID: ${this.id}
    => Price: ${this.price}
    => Stock: ${this.stock}`;
  },
  setPrice(newPrice) {
    if (newPrice < 0) {
      return 'Invalid';
    }

    this.price = newPrice;
  },
};

let drill = {
  id: 1,
  name: 'Cordless Drill',
  stock: 15,
  price: 45,
  describe() {
    return `
    => Name: ${this.name}
    => ID: ${this.id}
    => Price: ${this.price}
    => Stock: ${this.stock}`;
  },
  setPrice(newPrice) {
    if (newPrice < 0) {
      return 'Invalid';
    }

    this.price = newPrice;
  },
};
drill.setPrice(500);
console.log(drill.describe());
