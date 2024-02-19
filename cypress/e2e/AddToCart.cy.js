describe('AddToCart Flow',()=>{

    it('Checking AddToCartFlowTest',()=>{
        cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=account/login")
        cy.get('#input-email').type('test.qa@dispostable.com')
        cy.get('#input-password').type('Cypress123!!')
        cy.get("[type='submit']").click()
        cy.get("[name='search']").type('MacBook,{enter}')
        cy.get(`img[title='MacBook']`).click({force : true})
        cy.xpath("//*[text()='Add to Cart']").click()
        cy.contains("Success: You have added MacBook to your shopping cart!")

        
    })
})