function BankAccount(customerName, balance = 0) {
  this.customerName = customerName;
  this.accountNumber = Date.now();
  this.balance = balance;
}

BankAccount.prototype.deposit = function (amount) {
  this.balance += amount;
};

BankAccount.prototype.withdraw = function (amount) {
  this.balance -= amount;
};

const a1 = new BankAccount("A", 1000);
const a2 = new BankAccount("B", 1000);
console.log(a1, a2);

// Inheritance CF
function CurrentAccount(customerName, balance = 0) {
  this.customerName = customerName;
  this.accountNumber = Date.now();
  this.balance = balance;
  this.transactionLimit = 50000; 
}

CurrentAccount.prototype.takeBusinessLoan = function (amount) {
  console.log("Taking loan: " + amount);
};

function SavingAccount(customerName, balance = 0) {
  this.customerName = customerName;
  this.accountNumber = Date.now();
  this.balance = balance;
}

SavingAccount.prototype.personalLoan = function (amount) {
  console.log("Taking Loan: " + amount);
}


class BankAccount{
customerName
account Number
balance = 0
constructor(customerName, balance=0)(
this.customerName customerName
this.account Number accountNumber
this.balance balance
deposit(amount) {
this.balance + amount
withdraw(amount) {
this.balance amount
]

const john = new BankAccount("John")
console.log(john)