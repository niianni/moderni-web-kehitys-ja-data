import { v4 as uuidv4 } from "uuid";

export default class Account {
    constructor(owner) {
        this.owner = owner;
        this.id = uuidv4();
        this.balance = 0;
    }
    deposit(amount) {
        if (amount >= 0) {
            this.balance += amount;
            return true;
        }
        return false;
    }
    withdraw(amount) {
        if (amount >= 0) {
            this.balance -= amount;
            return true;
        }
        return false;
    }
}
