import Account from "./Account.js";

export default class Bank {
    constructor(name) {
        this.name = name;
        this.accounts = [];
    }
    openAccount(owner) { 
        const newAccount = new Account(owner);
        this.accounts.push(newAccount);
        return newAccount.id;
    }
    closeAccount(id) { 
        const deletedAccount = this.accounts.find( acc => acc.id === id );
        if (deletedAccount === undefined) {
            return null;
        }
        this.accounts = this.accounts.filter( acc => acc !== deletedAccount );
        return deletedAccount;
    }
    deposit(accountId, amount) { 
        const realAccount = this.accounts.some(acc => acc.id === accountId);
        if (realAccount) {
            this.accounts.map( acc => {
                if (acc.id === accountId) {
                    acc.balance += amount;
                }
            });
            return true;
        }
        return false;
    }
    withdraw(accountId, amount) { 
        this.accounts.map( acc => {
            if (acc.id === accountId) {
                acc.balance -= amount;
                return amount;
            }
        });
        return null;
    }
    checkBalance(accountId) { 
        const acc = this.accounts.find(acc => acc.id === accountId);
        if (acc === undefined) {
            return null;
        }
        return acc.balance;     
    }
    transfer(fromAccountId, toAccountId, amount) {
        if (!this.deposit(toAccountId, amount)) {
            return false;
        }
        this.withdraw(fromAccountId, amount);
        return true;
    }
    customers() { 
        const customerList = this.accounts.reduce( (acc, cur) => {
            return acc.concat(cur.owner);
        }, []);
        return customerList;
    }
    totalValue() { 
        const total = this.accounts.reduce ((acc, cur) => {
            return acc += cur.balance;
        }, 0);
        return total;
    }
}
