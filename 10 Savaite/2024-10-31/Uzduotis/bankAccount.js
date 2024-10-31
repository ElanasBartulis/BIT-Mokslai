export default class BankAccount {
  #balance;
  #transactionHistory;

  constructor(balance = 0) {
    this.#balance = balance;
    this.#transactionHistory = {
      transaction: 0,
      deposit: 0,
      withdraw: 0,
    };
  }

  get balance() {
    return this.#balance;
  }
  get transactionHistory() {
    return this.#transactionHistory;
  }

  deposit(cashValue) {
    this.#balance = this.#balance + cashValue;
    this.#transactionHistory.transaction += 1;
    this.#transactionHistory.deposit += cashValue;
  }

  withdraw(cashValue) {
    if (this.#balance <= 0 || cashValue > this.#balance) {
      console.log(`Insufficient funds to withdraw. You have ${this.#balance}$`);
      return;
    }
    this.#balance = this.#balance - cashValue;
    this.#transactionHistory.transaction += 1;
    this.#transactionHistory.withdraw -= cashValue;
  }
}
