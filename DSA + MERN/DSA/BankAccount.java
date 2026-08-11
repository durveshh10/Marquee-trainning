import java.util.*;

class  BankAccount {
    int accountNum;
    String accName;
    double balance;   

BankAccount(int accountNum,String accName, double balance) {
    this.accountNum= accountNum;
    this.accName= accName;
    this.balance= balance;
}
void deposite(double amount) {
    balance = balance + amount;
}
void withdraw(double amount) {
    if(balance <= amount) {
    balance = balance - amount;
}
else {
    System.out.println("Low balance");
}
}

void display() {
    System.out.println("AccNumber: "+ accountNum);
    System.out.println("AccName: "+ accName);
    System.out.println("Balance: "+ balance);
}
}

public class Main {
public static void main(String[] args) {
    BankAccount b1 = new BankAccount(101, "Nitesh", 8500);
    BankAccount b2 = new BankAccount(101, "Om", 5000);
    BankAccount b3 = new BankAccount(101, "Abc", 6000);
    
    b1.deposite(1000);
    b1.withdraw(2000);
    
    b2.deposite(2000);
    b2.withdraw(1000);
    
    
    b3.deposite(3000);
    b3.withdraw(2000);
    
    b1.display();
    b2.display();
    b3.display();
    
    
}
    }
