let balance = 500.00;

class Account {
  /* constructor(username, amount) {
    this.username = username;
    this.amount = amount;
  } */

  constructor(name) {
    this.name = name;
    //this.balance = 0;
    this.transactions = [];
  }

  get balance() {
    let bal = 0;
    if (this.transactions) {
      for (const trans of this.transactions) {
        bal += trans.value;
      }
    }
    return bal;
  }

  addTransction(trans) {
    this.transactions.push(trans);
  }
}

class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() {
    let bal = this.account.balance + this.value;
    //console.log(bal);
    if (bal < 0) {
      console.log("Not enough amount");
      return false;
    } else {
      //this.account.balance = bal;
      //this.account.balance += this.value;
      this.time = new Date();
      this.account.addTransction(this);
      //console.log(this.account.balance);
    }
  }
}

class Withdrawal extends Transaction{

  /* constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  } */

  get value() {
    return -this.amount;
  }

  /* set value(value) {
    this.amount = value;
  } */

  /* commit() {
    this.account.balance += this.value;
  } */

}

class Deposit extends Transaction{
  /* constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  } */

  get value() {
    return this.amount;
  }

  /* commit() {
    this.account.balance += this.value
  } */
}




// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

acc = new Account("Binh");
t1 = new Deposit(500, acc);
t1.commit();
t2 = new Withdrawal(300, acc);
t2.commit();
console.log(acc);
console.log("Show balance: ", acc.balance);

/* t1 = new Withdrawal(50.25);
t1.commit();
console.log('Transaction 1:', t1);

t2 = new Withdrawal(9.99);
t2.commit();
console.log('Transaction 2:', t2);

t3 = new Deposit(120.00);
t3.commit();
console.log('Transaction 3:', t3);

console.log('Balance:', balance); */
