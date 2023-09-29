/// <reference types="Cypress" />
describe("cypress fundamentals",function(){
    it("open browser",function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        
        cy.get('.products').find('.product').each(($el,index,$list)=>{
            const prodName=$el.find('.product-name').text()
            console.log(prodName);
            if(prodName.includes('Carrot - 1 Kg')){
                cy.wrap($el).find('button').click()
                
            }
        }) 
    })

})