describe('Mouseover', () => {
    it('Mouseover realEvents demo', () => {
        cy.visit('https://www.yatra.com', {headers: {"Accept-Encoding": "gzip, deflate"}})    
        cy.get('.more-arr').realHover()
        //cy.get('.list-more-tab').invoke('show')
          //cy.get('#booking_engine_trains > nth-child(3)').click 
        //cy.get('#booking_engine_trains > nth-child(3)').click({force:true})
        
    })
})

