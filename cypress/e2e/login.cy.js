describe('Login functionality', () => {
    it('Login Registered user', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')     
        cy.get('#loginPanel > form > div:nth-child(2) > input').type("JamesBond")
        cy.get('#loginPanel > form > div:nth-child(4) > input').type("test1234")
        //Continue with DropDown select from here onvard
        cy.get('#loginPanel > form > div:nth-child(5) > input').click()
        cy.get('#accountTable > tbody > tr:nth-child(1) > td:nth-child(1) > a').click()
        cy.get('#month').select(11)
        cy.get('#month').select('April')

    })
})

