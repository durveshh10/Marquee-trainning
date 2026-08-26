// function BankAccount (customerName, balance=0){
//  this.customerName = customerName
//  this.accountNumber = Date.now()
//  this.balance = balance
//  this.deposit= function(amount) {
//  this.balance += amount
// }
//  this.withdraw = function (amount) {
//  this.balance -= amount
// }
//  }
// BankAccount.prototype.deposit = function (amount) {
//  this.balance += amount
// }
// const jane = new BankAccount("Jane", 1000)
// console.log(jane)

class BankAccount {
  customerName;
  accountNumber;
  balance;

  constructor(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    this.balance -= amount;
  }
}