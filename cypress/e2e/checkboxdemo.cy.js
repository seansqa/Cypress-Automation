describe('Checkbox functionality', () => {
    it('Checkbox demo', () => {
        cy.visit('https://www.zoho.com/au/books/accounting-software-demo/#/reports', {headers: {"Accept-Encoding": "gzip, deflate"}})     
        cy.get(".btn.btn-link[data-test-title='configure-layout']").click()
        cy.get("div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(6) > div:nth-child(1) > div:nth-child (1)").click()
        cy.get('[type="checkbox"]').click({ multiple: true })
        
    })
})

