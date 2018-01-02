class Account {

  constructor(username) {
    this.username = username;
    // Have the account balance start at $0
    this.transactions = [];
  }

  get balance() {
    let balance = 0;
    for (let t of this.transactions) {
      balance += t.value;
    }
    return balance;
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }
}

class Transaction {

  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() {
    this.time = new Date();
    this.account.addTransaction(this);
    // this.account.balance += this.value;
  }

}

class Withdrawal extends Transaction {

  get value() {
    return -this.amount;
  }
}

class Deposit extends Transaction {

  get value() {
    return this.amount;
  }

}


// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected
const myAccount = new Account("billybob");

console.log('Starting balance:', myAccount.balance)

t1 = new Deposit(120.00, myAccount);
t1.commit();
// console.log('Transaction 1:', t1);

t2 = new Withdrawal(50.00, myAccount);
t2.commit();
// console.log('Transaction 2:', t2);

// t3 = new Withdrawal(9.99, myAccount);
// t3.commit();
// console.log('Transaction 2:', t2);



console.log('Ending Balance:', myAccount.balance);
