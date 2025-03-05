describe('Mouseover', () => {
    it('Mouseover demo', () => {
        cy.visit('https://www.yatra.com', {headers: {"Accept-Encoding": "gzip, deflate"}})    
        //cy.get('.more-arr').trigger('mouseover') 
        //cy.get('.list-more-tab').invoke('show')
        //cy.get('.moreOption').invoke('show')
        //cy.get('#booking_engine_trains > nth-child(3)').click 
        cy.get('#booking_engine_trains > nth-child(3)').click({force:true})
        
    })
})

