/// <reference types="Cypress" />
describe("cypress fundamentals", function () {
    it("open browser", function () {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")

        // const elementOffers = cy.get('[href="#/offers"]')
        // cy.log("Abc")
        // console.log(elementOffers.text())

        // TODO uncomment below to resolve promise
            cy.get('[href="#/offers"]').then(function(elementOffersText){
                cy.log(elementOffersText.text())
        console.log(elementOffersText.text())
            
            })
    })

})