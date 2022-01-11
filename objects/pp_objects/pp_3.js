/*
now that we have a way to store our unpaid invocies,
we should have a way to compute the total amount of all unpaid invoices
create a method on the invoices object named
totalDue that iterates over the unpaid array and computes the total
amount for its contents
return the total at the end of the method.
*/

let invoices = {
  unpaid: [],

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
  }
};

invoices.add("Starbucks", 300);
invoices.add("M7", 100);
console.log(invoices.totalDue());
