/*
Let's test what we have so far. Create three
new unpaid invoices using this data:

Name	Amount
Due North Development	250
Moonbeam Interactive	187.50
Slough Digital	300
Once you've added the invoices, call the
totalDue method to compute and log the total
unpaid invoice amount. Your result should be 737.5
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

invoices.add("Due North Development", 250);
invoices.add("Moonbeam Interactive", 187.50);
invoices.add("Slough Digital", 300);
console.log(invoices.totalDue());
