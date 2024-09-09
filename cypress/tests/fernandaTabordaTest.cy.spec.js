import loginPage from '../pages/loginPage.js'
import registerPage from '../pages/registerPage.js'
import userData from '../fixtures/userData.json'
import moneyTransfer from '../pages/moneyTransferPage.js'

const login = new loginPage
const register = new registerPage
const transfer = new moneyTransfer

describe('Login', () => {
  it('Valid login', () => {
    login.acessLoginPage()
    login.loginWithAnyUser(userData.validLogin, userData.validLogin)
    login.checkLoginSucess()
  })
  it('Invalid login', () => {
    login.acessLoginPage()
    login.loginWithAnyUser(userData.invalidLogin, userData.invalidLogin)
    login.ckeckLoginInvalid()
  })
})

describe('Register', () => {
  it('Fill personal details', () => {
    register.acessSignUp()
    register.fillFieldsSignUp(userData.personalDetails)
  })
})

describe('Money transfer', () => {
  it('Transfer with any value for any person', () =>{
      login.acessLoginPage()
      login.loginWithAnyUser(userData.validLogin, userData.validLogin)
      transfer.acessTransferPage()
      transfer.transferMoney(userData.transferDetails)
      transfer.checkValidTrasnsferMoney()
  })
  it('Invalid transfer', () =>{
    login.acessLoginPage()
    login.loginWithAnyUser(userData.validLogin, userData.validLogin)
    transfer.acessTransferPage()
    transfer.transferMoney(userData.invalidTransferDetails)
    transfer.checkInvalidTrasnsferMoney()
  })
})

describe('Transaction history', () => {
  it('View transaction history', () =>{
    login.acessLoginPage()
    login.loginWithAnyUser(userData.validLogin, userData.validLogin)
    transfer.viewTransactionHistory()
  })
})
