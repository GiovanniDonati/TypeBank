export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
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

  getBalance = (): void => {
    console.log(`SALDO ATUAL: R$ ${this.balance}`)
  }

  setStatus = (status: boolean): void => {
    this.status = status
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }
    // throw new Error('Conta inativa')
    console.log('Conta inativa')
    return(false)
  }
}
