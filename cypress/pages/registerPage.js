class registerPage {
    selectorsList(){
        const selectors = {
            linkSignUp: "[data-test='signup']",
            firstNameField: "[id='firstName']",
            lastNamefield: "[id='lastName']",
            usernameFiled: "[id='username']",
            passwordField: "[id='password']",
            confirmPasswordField: "[id='confirmPassword']",
            SignUpbutton: "[data-test='signup-submit']"
        }
        return selectors
    }
    acessSignUp() {
        cy.visit('http://localhost:3000/signin')
        cy.get(this.selectorsList().linkSignUp).click()
    }
    fillFieldsSignUp(signUp) {
        cy.get(this.selectorsList().firstNameField).type(signUp.firstName)
        cy.get(this.selectorsList().lastNamefield).type(signUp.lastName)
        cy.get(this.selectorsList().usernameFiled).type(signUp.username)
        cy.get(this.selectorsList().passwordField).type(signUp.password)
        cy.get(this.selectorsList().confirmPasswordField).type(signUp.password)
        cy.get(this.selectorsList().SignUpbutton).click()
    }
}

export default registerPage