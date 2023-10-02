/// <reference types="Cypress" />
describe("cypress fundamentals", function () {
    it("Traverse through multiple Elements And Click Based On Index", function () {
        cy.visit("https://rahulshettyacademy.com/angularpractice/shop")
        cy.TraverseElementAndClickBasedOnIndex("Blackberry")
         
       
    })

})