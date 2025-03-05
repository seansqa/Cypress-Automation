
it('Assertions Demo', () => {

    cy.visit('https://example.cypress.io')
    cy.contains('get').click()
    cy.get('#query-btn')
        .should('contain', 'Button')
        // .should('have.class', 'query-btn') // in case you need to assert the class
        // .should('be.visible')
        // .should('be.disabled')
        .and('have.class', 'query-btn') 
        .and('be.visible')
        .and('be.enabled')

    expect(true).to.be.true
    
    assert.equal(4, '4', 'NOT EQUAL')
    assert.strictEqual(4, '4', 'NOT EQUAL')

})