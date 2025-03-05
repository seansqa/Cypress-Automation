describe('Clear text demo', () => {
    it('Clear text demo', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')     
        cy.get('#loginPanel > form > div:nth-child(2) > input').type("rcvtest")
        cy.get('#loginPanel > form > div:nth-child(2) > input').clear()
     

    })
})

