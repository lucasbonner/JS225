/*
This solution has brought us closer to our
object-oriented ideal, but has also
introduced some inefficiency, insofar
as our setPrice and describe methods
are duplicated in each object, and
we will have to type out this code
for each new object we want to create.
One solution to this problem is to
stop manually creating each object,
and instead use a factory function
to generate them. Create a new
function createProduct which
takes arguments for id, name, stock,
and price and also adds setPrice
and describe to the new object.
*/
function createProduct(id, name, stock, price) {
  return {
    id,
    name,
    stock,
    price,
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
    },
  };
}

let scissors = createProduct(0, 'Scissors', 8, 10);
let drill = createProduct(1, 'Cordless Drill', 15, 45);

drill.setPrice(500);
console.log(drill.describe());
