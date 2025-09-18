import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { 
    test_deposit_ok_inative_account_and_withdraw_error, 
    test_deposit_withdraw_ok,
    test_deposit_with_inative_account_error,
    test_deposit_withdraw_without_money_error
 } from './tests/PeopleAccount'


const person1Account: PeopleAccount = new PeopleAccount(123456,'Giovanni', 76454465)
const person2Account: PeopleAccount = new PeopleAccount(123456,'Everton', 76454465)
const person3Account: PeopleAccount = new PeopleAccount(123456,'Helena', 76454465)
const person4Account: PeopleAccount = new PeopleAccount(123456,'Roberta', 76454465)


const execPersonTest = () => {
    test_deposit_withdraw_ok(person1Account)
    console.log("");
    test_deposit_ok_inative_account_and_withdraw_error(person2Account)
    console.log("");
    test_deposit_with_inative_account_error(person3Account)
    console.log("");
    test_deposit_withdraw_without_money_error(person4Account)
    console.log("");
}

execPersonTest()

const companyAccount: CompanyAccount = new CompanyAccount("Dio Company", 45687321)

