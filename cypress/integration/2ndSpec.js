//<reference types="Cypress"/>
describe("Simple Spec",function(){
    it("print array values",function(){
        const storeInt=[1,2,5,8,2]
        for(let storeintValues of storeInt){
           
            console.log(storeintValues)
            // then(function(){ cy.log(storeintValues)

            // })   
            cy.log(storeintValues)      
 
        }
        
    })
})