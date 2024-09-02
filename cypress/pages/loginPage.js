class loginPage {
    selectorList(){
        const selectors = {
            usernameField: "[id='username']",
            passwordField: "[id='password']",
            loginButton: "[class='MuiButton-label']",
            wrongCredentialAlert: "[data-test='signin-error']",
            checkLoginSucess: "[data-test='main']"
        }
        return selectors
    }
    acessLoginPage(){
        cy.visit('http://localhost:3000/signin')
    }
    loginWithAnyUser(login){
        cy.get(this.selectorList().usernameField).type(login.username)
        cy.get(this.selectorList().passwordField).type(login.password)
        cy.get(this.selectorList().loginButton).click()
    }
    checkLoginSucess(){
        cy.get(this.selectorList().checkLoginSucess).should('be.visible')
    }
    ckeckLoginInvalid(){
        cy.get(this.selectorList().wrongCredentialAlert).should('be.visible')
    }
}

export default loginPage