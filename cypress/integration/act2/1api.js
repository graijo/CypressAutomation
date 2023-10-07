describe("API",function(){
    it("Make Post call and assert",function(){
        //set base url
        // cy.visit("http://216.10.245.166/")
        cy.request('POST','http://216.10.245.166/Library/Addbook.php',
        {

            "name":"Learn Appium Automation with Java",
            "isbn":"bcd",
            "aisle":"22cc",
            "author":"John foe"
            
            })
        .then(function(response)
        {
                expect(response.body).to.have.property("Msg","successfully added")
           
            cy.log("Response body = ",response.body)
        }).log
    })
})