describe('Scroll demo', () => {
    it('Scroll demo', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')    
        cy.scrollTo('bottom')
        cy.scrollTo('top')
        // To scroll a littl bit   
        //cy.scrollTo(0, 100)
        cy.get('#footerPanel > ul:nth-child(1) > li:nth-child(2) > a').scrollIntoView() 

    })
})

