/*
Now that we have some invoices, we need to add a way to
mark invoices as paid. Add a paid property to the
invoices object and initialize it as an empty Array;
 we will use this property to store the paid invoices.

Now, create a method named payInvoice that takes
 a client name as an argument. Your method should
loop over the unpaid invoices and check the name
of each invoice. If the name matches, push the
invoice object to the paid property. If the
name does not match, push the invoice object
  to a new array defined as a local variable
  in your method. When the loop ends,
  replace the existing unpaid property
with the newly created array of remaining unpaid invoices.

*/

let invoices = {
  unpaid: [],
  paid: [],

  add: function(name, amount) {
    this.unpaid.push({
      name,
      amount
    });
  },

  totalDue: function() {
    return this.unpaid.reduce((sum, object) => {
      return sum += object['amount'];
    }, 0);
  },

  payInvoice: function(name) {
    let newUnpaid = [];
    this.unpaid.forEach((object) => {
      if (object['name'] === name) {
        this.paid.push(object);
      } else {
        newUnpaid.push(object);
      }
    });
    this.unpaid = newUnpaid;
  },
};

invoices.add("Due North Development", 250);
invoices.add("Moonbeam Interactive", 187.50);
invoices.add("Slough Digital", 300);
console.log(invoices.unpaid);
invoices.payInvoice("Moonbeam Interactive");
console.log(invoices.unpaid);
