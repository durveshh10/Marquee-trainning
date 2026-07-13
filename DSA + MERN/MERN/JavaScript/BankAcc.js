let bankAccount = {
    accountHolder: "Rahul",
    balance: 5000,

    deposit(amount) {
        this.balance += amount;
        console.log("Balance after deposit:", this.balance);
    },

    withdraw(amount) {
        this.balance -= amount;
        console.log("Balance after withdrawal:", this.balance);
    }
};

bankAccount.deposit(2000);
bankAccount.withdraw(1000);