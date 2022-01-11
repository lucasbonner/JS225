/*
write a method add for the invoices object
method should take two arguments:
  a string for the client name and a number for the amount they owe
the method should create a new object with these two arguments as
properties
then push it onto the unpaid array
the object should look like
  {name: "Starbucks", amount: 300}

be sure to use this `this` keyword to reference the unpaid array in your method
*/

let invoices = {
  unpaid: [],

  add: function(name, amount) {
    this.unpaid.push({
      name,
      amount
    });
  }
};

invoices.add("Starbucks", 300);
console.log(invoices.unpaid);
