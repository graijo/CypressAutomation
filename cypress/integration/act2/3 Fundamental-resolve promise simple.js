/// <reference types="Cypress" />
describe("cypress fundamentals",function(){
    it("open browser",function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type("Cucumber")
        cy.get('.search-button').click()
        // cy.get('.products').find('.product').contains('Cucumber - 1 Kg').find('  .stepper-input').find('.increment').click()
        // cy.get('.increment').eq(1).click()
        cy.get('.products').find('.product').contains('ADD TO CART').click()
        const locatorValue1=cy.get('.cart-icon > img').then(function($locatorValue){
            cy.log("text is = ",$locatorValue.text())
        })
        cy.log('locatorValue1 = ',locatorValue1)
        cy.get('.cart-icon > img').click()
        cy.get('.action-block').contains('PROCEED TO CHECKOUT').click()
        cy.get('button').contains('Place Order').click()
    })

})