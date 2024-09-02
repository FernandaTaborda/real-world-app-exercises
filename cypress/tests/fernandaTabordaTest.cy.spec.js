import loginPage from '../pages/loginPage.js'
import registerPage from '../pages/registerPage.js'
import userData from '../fixtures/userData.json'

const login = new loginPage
const register = new registerPage

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
