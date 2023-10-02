/// <reference types="Cypress" />
describe("cypress fundamentals", function () {
    it("Select dynamic drop downs", function () {
       
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get('#autocomplete').type('ind');

        cy.get('div[class="ui-menu-item-wrapper"]').each(($el,index,$list)=>{
            if($el.text()=="India"){
                $el.click();
            }
        })
        cy.get('#autocomplete').should('have.value','India').should('be.visible')
      
    })

})