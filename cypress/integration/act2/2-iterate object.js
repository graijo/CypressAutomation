///<reference types="Cypress" />
describe("object iteration", function () {
    const object1 = {
        "name": "Antony",
        "Place": "EKLM"
    }

    it("iterate const ojbect using object.entries", function () {
        let personalDataArray = Object.entries(object1)
        cy.log(personalDataArray)
    })
    it("iterate const ojbect using for.each", function () {
        const object2 = {
            name: "Antony",
            place: "EKLM"
        }
        let obj3 = Object.keys(object2)
        obj3.forEach((obj3) =>
            cy.log("obj3 ", obj3)
        );

 

    })
})