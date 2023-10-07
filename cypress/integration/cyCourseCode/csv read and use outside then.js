
///<reference types="Cypress" />
//const neatCSV = require('neat-csv')


//  import neatCSV from 'neat-csv';

const neatCSV = require('neat-csv')
describe('Read xlx files', function () {
  let globalName
  let csvGlobalData
  it('read xlsx file and print output', async function () {
    return cy.readFile("C:/Users/anton/Downloads/ab.csv")
      // cy.readFile("C:/Users/anton/Downloads/abcde.txt")

      .then(async function (text) {

        const csv = await neatCSV(text)

        console.log(csv)
        cy.log("xlsx file =", csv)



        // cy.log("globalName=csv[0][firstName]  =",globalName=csv[0]["firstName"] )
        globalName = csv[0]["firstName"]
        csvGlobalData = csv
        return csvGlobalData
      })
      
  })
  it("2nd test", function () {
    cy.log("globalName =", globalName)
   
    cy.log("csvGlobalData =",csvGlobalData[3].firstName)
    csvGlobalData.forEach((csvGlobalData) => cy.log(csvGlobalData["firstName"] + " " + csvGlobalData["lastName"] + " " + csvGlobalData["Email"] + " " + csvGlobalData["Telephone"]));
    csvGlobalData.forEach((csvGlobalData) => cy.log("first") &
      cy.log("2nd"));

      csvGlobalData.forEach((csvGlobalData)=>{cy.log("abcdfg")})

  })

})