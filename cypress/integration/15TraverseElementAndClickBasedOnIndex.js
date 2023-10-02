/// <reference types="Cypress" />
describe("cypress fundamentals", function () {
    it("Traverse through multiple Elements And Click Based On Index", function () {
        cy.visit("https://rahulshettyacademy.com/angularpractice/shop")
        cy.get('h4.card-title').each(($el,index,$list)=>{
            if($el.text().includes('Samsung Note 8')){
                cy.log('inside each')
 
                cy.get('button[class="btn btn-info"]').eq(index).click()
                cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click()
            }

        })
         
       
    })

})