class BankAccount{
  customerName 
  accountNumber 
  balance = 0

  constructor(customerName, balance=0){
    this.customerName = customerName
    this.accountNumber = Date.now()
    this.balance = balance
  }

  deposit(amount){
    this.balance += amount
  }

  withdraw(amount){
    this.balance -= amount
  }
}


class CurrentAccount extends BankAccount{
  constructor(customerName,balance,branch){
    super(customerName,balance)
    this.branch = branch
  }

  takeBusinessLoan(amount){
    console.log("Taking Loan: "+ amount)
  }
}

class SavingAccount extends BankAccount{
  constructor(customerName,balance,branch){
    super(customerName,balance)
    this.branch = branch
  }

  takePersonalLoan(amount){
    console.log("Taking Loan: "+ amount)
  }
}


const rakesh = new BankAccount("rakesh",1000)
console.log(rakesh)


// BankAccount (
cn: "Rakesh",
//an: Date.now(),
//
b: "1000"
//}
// rakesh, #balance = 500
rakesh.setBalance(500)

// encapsulation
//#
// Uncaught SyntaxError: Private field '#balance' must be declared in
an enclosing class (at encapsulation.js:55:7)