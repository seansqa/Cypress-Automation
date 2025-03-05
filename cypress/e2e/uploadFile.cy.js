describe('Select or upload file demo', () => {
    it('Upload file demo', () => {
        cy.visit('https://www.zoho.com/au/books/accounting-software-demo/#salesorders/new')     
        cy.get("span > input[type='file]").scrollIntoView()
        cy.get("span > input[type='file]").selectFile("C:\\Users\\PAVILION.000\\Downloads\\Cypress Tutorials\\4.png")
        //forced attachment 
        cy.get("span > input[type='file]").selectFile("C:\\Users\\PAVILION.000\\Downloads\\Cypress Tutorials\\5.png", {force: true})
        //multiple files attachment
        cy.get("span > input[type='file]").selectFile(["C:\\Users\\PAVILION.000\\Downloads\\Cypress Tutorials\\5.png", "C:\\Users\\PAVILION.000\\Downloads\\Cypress Tutorials\\6.png"], {force: true})

    })
})

