describe('Registartion functionality', () => {
    it('Register new user', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')     
        cy.get('#loginPanel > p:nth-child(3) > a').click()
        cy.get("input[id='customer.firstName']").type('James')
        cy.get("input[id='customer.lastName']").type('Academy')
        cy.get("input[id='customer.address.street']").type('Georgia')
        cy.get("input[id='customer.address.city']").type('Vancouver')
        cy.get("input[id='customer.address.state']").type('BC')
        cy.get("input[id='customer.address.zipCode']").type('V6H9B1')
        cy.get("input[id='customer.phoneNumber']").type('6041112345')
        cy.get("input[id='customer.ssn']").type('11111111')
        cy.get("input[id='customer.username']").type('rcvtest')
        cy.get("input[id='customer.password']").type('test1234')
        cy.get("#repeatedPassword").type('test1234')
        cy.get("[colspan='2'] > .button").click()
        cy.get("span[id='customer.username.errors']").should('have.text', 'This username already exists.')
        //cy.get("span[id='customer.username.errors']").contains(' username already exists.')
    })
    
})

