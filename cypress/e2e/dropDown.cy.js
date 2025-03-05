describe('DropDown functionality', () => {
    it('Static dropDown', () => {
        //cy.visit('https://parabank.parasoft.com/parabank/index.htm')     
                 //cy.get('#loginPanel > p:nth-child(3) > a').click()
        cy.visit('https://www.rogers.com') 
        //cy.get('#loginPanel > form > div:nth-child(2) > input').type("JamesBond")
        //cy.get('#loginPanel > form > div:nth-child(4) > input').type("test1234")
        //cy.get('#loginPanel > form > div:nth-child(5) > input').click()
        //cy.get('#accountTable > tbody > tr.ng-scope > td:nth-child(1) > a').click()
        cy.get('#globalElementsHeader > div > div > div > div > button > span > ge-icon > ds-icon > span').click()
        //cy.get('#geDropdownProvince > div > a > span > span > span').click()
        cy.get('#m-province-id').select(0)
        cy.get('#m-province-id').select('BC')
                //from here dropdown is selected
        //cy.get('#month').select(11)
        //cy.get('#month').select('April')
        cy.get('#aDropdownProvince_BC > a > span > span > span > span').select(1)
        
        
    })
})

