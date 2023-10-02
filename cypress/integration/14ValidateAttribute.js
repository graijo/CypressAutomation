/// <reference types="Cypress" />
describe("cypress fundamentals", function () {
    it("open browser", function () {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').should('have.attr','placeholder','Search for Vegetables and Fruits')
         
       
    })

})