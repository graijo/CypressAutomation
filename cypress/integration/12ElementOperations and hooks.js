/// <reference types="Cypress" />
describe("cypress fundamentals and hooks", function () {
     beforeEach(function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

     })
    it("Alert submit and its text verify", function () {
       
       

        cy.get('#alertbtn').click()
        cy.on('window:alert',(strVar)=>{
            expect(strVar).to.equal('Hello , share this practice page and share your knowledge')
        })
        cy.get(':nth-child(4) > .left-align > fieldset > legend').should('have.text','Switch Window Example')
      
    })

    it("check not visible ",function(){
        

        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')

       

    })

})