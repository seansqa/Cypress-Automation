describe('DropDown functionality test case', () => {
    it('Static dropDown', () => {
                //cy.get('#loginPanel > p:nth-child(3) > a').click()
        cy.visit('https://www.rogers.com') 
        cy.get('#globalElementsHeader > div > div > div > div > button > span > ge-icon > ds-icon > span').click()
        cy.get('#m-province-id').select(0)
        cy.get('#m-province-id').select('BC')
        cy.get('#aDropdownProvince_BC > a > span > span > span > span').select(1)
                
    })
})

