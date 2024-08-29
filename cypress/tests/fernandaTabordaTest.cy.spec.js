import loginPage from '../pages/loginPage.js'
import registerPage from '../pages/registerPage.js'
import userData from '../fixtures/userData.json'

const login = new loginPage
const register = new registerPage

describe('login', () => {
  it('Login valido', () => {
    login.acessLoginPage()
    login.loginWithAnyUser('Arvilla_Hegmann', 's3cret')
    login.checkLoginSucess()
  })
  it('Login Invalido', () => {
    login.acessLoginPage()
    login.loginWithAnyUser('Arvilla_Hegmann', '123ABC')
    login.ckeckLoginInvalid()
  })
})

describe('Register', () => {
  it('Fill personal details', () => {
    register.acessSignUp()
    register.fillFieldsSignUp(userData.personalDetails)
  })
})