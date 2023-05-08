class BankAccount {
  public readonly id: number;
  public name: string;
  protected _balance: number;

  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this._balance = balance;
  }
  getBalance() {
    console.log(`My Current Balance is : ${this._balance}`);
  }
  addDeposit(amount: number) {
    this._balance = this._balance + amount;
  }
}

class StudentAccount extends BankAccount{
  test(){
    this.
  }
}

const myAccount = new BankAccount(444, "Persian", 20);
myAccount.addDeposit(20);
myAccount.getBalance();

type Add = (a: number, b: number) => number;

const add: Add = (a, b) => {
  return a + b;
};

// const sum = add(2, 3); // 5

class Calculator {
  add(a: number, b: number): number {
    return a + b;
  }
}

const calculator = new Calculator();
const sum = calculator.add(2, 3); // 5

