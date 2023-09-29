/// <reference types="Cypress" />
describe("cypress fundamentals", function () {
    it("open browser", function () {
       
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get('[for="radio1"] > .radioButton').check().should('be.checked')
        //Multiple check
        cy.get('input[name="radioButton"').check(['radio2','radio3'])
       
    })

})