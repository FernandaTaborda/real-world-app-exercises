class moneyTransfer {
    selectorList() {
        const selectors = {
            transferButton: "[data-test='nav-top-new-transaction']",
            selectContactField: "[data-test='user-list-search-input']",
            checkAndClickContact: "[data-test='users-list']",
            transferValueField: "[data-test='transaction-create-amount-input']",
            transferNoteField: "[data-test='transaction-create-description-input']",
            payButton: "[data-test='transaction-create-submit-payment']",
            checkSubmitedTransition: "[data-test='alert-bar-success']",
            acessMineHistory: "[data-test='nav-personal-tab']"
        }
        return selectors
    }
    
    acessTransferPage(){
        cy.get(this.selectorList().transferButton).click()
    }
    transferMoney(transference){
        cy.get(this.selectorList().selectContactField).type(transference.contact)
        cy.get(this.selectorList().checkAndClickContact).contains(transference.contact).click()
        cy.get(this.selectorList().transferValueField).type(transference.value)
        cy.get(this.selectorList().transferNoteField).type(transference.note)
        cy.get(this.selectorList().payButton).click()
    }
    checkValidTrasnsferMoney(){
        cy.get(this.selectorList().checkSubmitedTransition).should('be.visible')
    }
    checkInvalidTrasnsferMoney(){
        cy.get(this.selectorList().checkSubmitedTransition).wait(1000).should('not.exist')
    }
    viewTransactionHistory(){
        cy.get(this.selectorList().acessMineHistory).click()
    }
}

export default moneyTransfer