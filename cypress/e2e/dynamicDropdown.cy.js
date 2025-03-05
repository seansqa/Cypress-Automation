describe('Handling Dynamic Dropdowns functionality', () => {
    it('Dynamic dropdown', () => {
        cy.visit('https://www.yatra.com', {headers: {"Accept-Encoding": "gzip, deflate"}})    
        cy.get('#BE_flight_origin_city').click().clear().type("New", {delay:200})
        cy.get('.viewport span:last-child').each(($el, index, $list) => {
            cy.log($el.text())
            if($el.text() === 'JFK') {
            //if($el.text().includes('JFK')) {
                //$el.click()
                cy.wrap($el).click()
            }
        })
    })
})

