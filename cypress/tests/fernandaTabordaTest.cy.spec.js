import loginPage from '../pages/loginPage.js'
import userData from '../fixtures/userData.json'

const login = new loginPage

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
