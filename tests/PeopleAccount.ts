import { PeopleAccount } from '../class/PeopleAccount'

export const test_deposit_withdraw_ok = (person1Account: PeopleAccount): void => {
    console.log("======== Teste de depósito/saque com saldo positivo ========")
    person1Account.getName()
    person1Account.getBalance()
    person1Account.deposit(500)
    
    person1Account.withdraw(400)
    person1Account.getBalance()
}

export const test_deposit_withdraw_without_money_error = (person2Account: PeopleAccount): void => {
    console.log("======== Teste de depósito/saque com saldo negativo ========")
    person2Account.getName()
    person2Account.getBalance()
    person2Account.deposit(500)
    
    person2Account.withdraw(600)
    person2Account.getBalance()
}

export const test_deposit_with_inative_account_error = (person3Account: PeopleAccount): void => {
    console.log("======== Teste de depósito com conta inativa ========")
    person3Account.setStatus(false)
    person3Account.getName()
    person3Account.getBalance()
    person3Account.deposit(500)
}

export const test_deposit_ok_inative_account_and_withdraw_error = (person4Account: PeopleAccount): void => {
    console.log("======== Teste de depósito/saque com conta inativa ========")
    person4Account.setStatus(false)
    person4Account.getName()
    person4Account.getBalance()
    person4Account.deposit(500)

    person4Account.setStatus(false)
    person4Account.withdraw(600)
    person4Account.getBalance()
}