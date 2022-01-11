/*
Create a method that is functionally identical
to the totalDue method, but that computes
 and returns the total of the paid invoices.
  Name this new method totalPaid.

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

  totalPaid: function() {
    return this.paid.reduce((sum, object) => {
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
invoices.payInvoice("Moonbeam Interactive");
console.log(invoices.totalPaid());
