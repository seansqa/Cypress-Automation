/// <reference types="cypress" />

it('Google Search', function(){

    cy.visit('https://google.com')    

    cy.get('#APjFqb').type('Automation Step by Step{Enter}')
    // cy.get('#APjFqb', {timeout:9000}).type('Automation Step by Step{Enter}') // add custome timeouts
    // cy.get('#APjFqb').type('Automation Step by Step') // without using keyboard {Enter} e.i. using click function below

    // cy.contains('Google Search').click()
    // cy.wait(5000)  // alternative way for timeout
    cy.contains('Videos').click()
})