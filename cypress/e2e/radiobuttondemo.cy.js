describe('Checkbox functionality', () => {
    it('Checkbox demo', () => {
        cy.visit('https://www.zoho.com/au/books/accounting-software-demo/#/reports', {headers: {"Accept-Encoding": "gzip, deflate"}})     
        cy.get(".btn.btn-link[data-test-title='configure-layout']").click()
        cy.get('[type="radio"]').check(['letter', 'landscape'])
       
    })
})

