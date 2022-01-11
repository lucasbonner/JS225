/*
Call the payInvoice method twice, once with
"Due North Development" as the argument, and
 once with "Slough Digital" as the argument.
 Then call totalPaid and totalDue, and log
 the results of both methods; they should be 550 and 187.50, respectively.
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
invoices.payInvoice("Slough Digital");
invoices.payInvoice("Due North Development");
console.log(invoices.totalPaid());
console.log(invoices.totalDue());
