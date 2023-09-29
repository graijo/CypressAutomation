/// <reference types="Cypress" />
describe("cypress fundamentals", function () {
    it("open browser", function () {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")

       cy.get('[href="#/offers"]').as('elementOffers')
        cy.log("Aliasing used")
        // console.log(elementOffers.text())
        cy.get('@elementOffers').invoke('removeAttr','target').click();
        cy.get(':nth-child(5) > a').click();
       
    })

})