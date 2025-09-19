export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit = (value: number): void => {
    if (this.validateStatus()){
      if(value > 0){
      this.balance += value
      console.log(`Depósito de R$ ${value} efetuado!`);
      }
    }
  }
  
  withdraw = (value: number): void => {
    if (this.validateStatus()){
      if (value < this.balance || value < 0){
        this.balance -= value
        console.log(`Saque de R$ ${value} realizado!`);
        } else {
          console.log("Saldo insuficiente");
          // throw new Error("Saldo insuficiente!")
        }
    }
  }

  getBalance = (): number => {
    console.log(`SALDO ATUAL: R$ ${this.balance}`)
    return this.balance
  }

  setStatus = (status: boolean): void => {
    this.status = status
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }
    // throw new Error('Conta inativa')
    console.log('Conta inativa')
    return(false)
  }
}
