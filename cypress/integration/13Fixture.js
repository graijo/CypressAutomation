/// <reference types="Cypress" />
describe("Use fixture to pass parameters", function () {
    before(function(){
        cy.fixture('ConsoleData.json').then(function(testData){
            this.testData=testData

        })
    })
     beforeEach(function(){
        cy.visit(this.testData.appUrl)

     })
    it("print on console from fixture ", function () {
        cy.log(this.testData.name)
        cy.log(this.testData.place)
        cy.get(this.testData.showtxtBox).click()
        cy.get(this.testData.txtRevealedElement).should('be.visible')

        cy.get(this.testData.hidetxtBox).click()
        cy.get(this.testData.txtRevealedElement).should('not.be.visible')
      
    })
 

})