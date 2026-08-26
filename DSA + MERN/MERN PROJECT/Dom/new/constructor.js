function BankAccount(customerName, balance = 0) {
    this.customerName = customerName
    this.accountNumber = Date.now()
    this.balance = balance

    this.deposit = function(amount) {
        this.balance += amount
    }
    
    this.withdraw = function(amount) {
        this.balance -= amount
    }
}

const accounts = []

const accountForm = document.querySelector("#accountForm")
const customerName = document.querySelector("#customerName")
const balance = document.querySelector("#balance")

accountForm.addEventListener("submit", function(event) {
    event.preventDefault()
    const ac = new BankAccount(customerName.value, +balance.value) 
    accounts.push(ac) 
    console.log(ac)   
    console.log(accounts) 
})

const depositForm = document.querySelector("#depositForm")
const accountNum = document.querySelector("#accNum")
const amount = document.querySelector("#amnt")

depositForm.addEventListener("submit", function(event) {
    event.preventDefault()
    const account = accounts.find(a => a.accountNumber == accountNum.value) 
    if (account) {
        account.deposit(+amount.value) 
        console.log("Deposit successful:", account)
    } else {
        console.log("Account not found")
    }
    console.log(accounts)
})

const withdrawForm = document.querySelector("#withdrawForm")
const wAccountNum = document.querySelector("#wAccNum")
const wAmount = document.querySelector("#wAmnt")

withdrawForm.addEventListener("submit", function(event) {
    event.preventDefault()
    const account = accounts.find(a => a.accountNumber == wAccountNum.value) 
    if (account) {   
        account.withdraw(+wAmount.value)
        console.log("Withdraw successful:", account)
    } else {
        console.log("Account not found")
    }
    console.log(accounts)
})


// raam ={
//     deposit(){
//         balance += amount
//     }
// }

// const raam = new BankAccount("Raam", 1000)
// const john = new BankAccount("John",500)

// // raam.balance = 1500
// raam.deposit(500)
// john.withdraw(100)
// console.log(raam, john)
