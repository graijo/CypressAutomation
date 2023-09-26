//<reference types="Cypress"/>
describe("Simple Spec",function(){
    it("2nd spec",function(){
        const storeInt=[1,2,5,8,2]
        for(let storeintValues in storeInt){
           
            console.log(storeintValues)

            

        }
        
    })
})