/*
Update your createInvoice function to make it possible to add payment(s)
 to invoices. Use the code below as a guideline:
*/
function createInvoice(services = {}) {
  let invoice = {
    phone: services.phone || 3000,
    internet: services.internet || 5500,
    payments: [],
  };

  invoice.total = function() {
    return this.phone + this.internet;
  };

  invoice.addPayment = function(payment) {
    invoice.payments.push(payment);
  };

  invoice.addPayments = function(payments) {
    payments.forEach(elem => invoice.addPayment(elem));
  };

  invoice.paymentTotal = function() {
    let totalPaid = 0;
    let i;

    for (i = 0; i < invoice.payments.length; i += 1) {
      totalPaid += invoice.payments[i].total();
    }

    return totalPaid;
  };

  invoice.amountDue = function() {
    return this.total()  - this.paymentTotal();
  }

  return invoice;
}

function invoiceTotal(invoices) {
  let total = 0;
  let i;

  for (i = 0; i < invoices.length; i += 1) {
    total += invoices[i].total();
  }

  return total;
}

function createPaymentAmount(services) {
  let payment =  {
    amount: services.amount
  };

  payment.total = function() {
    return this.amount;
  };

  return payment;
}

function createPayment(services = {}) {
  if (services.amount) {
    return createPaymentAmount(services);
  }

  let payment = {
    phone: services.phone || 0,
    internet: services.internet || 0,
  };

  payment.total = function() {
    return this.phone + this.internet;
  };

  return payment;
}

function paymentTotal(payments) {
  let total = 0;
  let i;

  for (i = 0; i < payments.length; i += 1) {
    total += payments[i].total();
  }

  return total;
}


let invoice = createInvoice({
  phone: 1200,
  internet: 4000,
});

let payment1 = createPayment({
  amount: 2000,
});

let payment2 = createPayment({
  phone: 1000,
  internet: 1200,
});

let payment3 = createPayment({
  phone: 1000,
});

invoice.addPayment(payment1);
invoice.addPayments([payment2, payment3]);
console.log(invoice.amountDue());       // this should return 0
