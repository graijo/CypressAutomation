/// <reference types="Cypress" />
describe("cypress fundamentals", function () {
    it("open browser", function () {
       
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get('#dropdown-class-example').select('option2').should('have.value','option2')
       
    })

})