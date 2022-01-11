/*
In this assignment, we'll build a small banking application and look at how we can use closures to control
access to the application's data. We'll proceed through this assignment using some example code and
then you will write code that satisfies it.
*/



function makeBank() {
  let accounts = [];
  function makeAccount(number) {
    let balance = 0;
    let transactions = [];


    return {
      addToTransactions(typeOfTransaction, amountOfTransaction) {
        transactions.push({type: typeOfTransaction,
          amount: amountOfTransaction});
      },
      deposit(amount) {
        balance += amount;
        this.addToTransactions('deposit', amount);
        return amount;
      },
      withdraw(amount) {
        let subAmount = (amount > this.balance) ? this.balance : amount;
        balance -= subAmount;
        addToTransactions('withdraw', amount);
        return subAmount;
      },
      balance() {
        return balance;
      },
      number() {
        return number;
      },
      transactions() {
        return transactions;
      },
    };
  }

  return {
    openAccount() {
      let number = accounts.length + 101;
      let account = makeAccount(number);
      accounts.push(account);
      return account;
    },
    transfer(source, destination, amount) {
      let transferAmount = source.withdraw(amount);
      destination.deposit(transferAmount);
      return transferAmount;
    },
  };
}

let bank = makeBank();
let account = bank.openAccount();
console.log(account.balance());
// = 0
console.log(account.deposit(17));
// // = 17
let secondAccount = bank.openAccount();
console.log(secondAccount.number());
// // = 102
console.log(account.transactions());
// // = [Object]
console.log(bank.accounts);
