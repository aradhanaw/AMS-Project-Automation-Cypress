import { faker } from '@faker-js/faker';
import 'cypress-file-upload';
describe("Assets edit Functionality",()=>{
    beforeEach(()=>{
        cy.login()
        cy.wait(3000)
    })
    it("Hardware | Check if user are able to edit every field except image",()=>{
        cy.visit("/assets/?Search=")
        cy.get(':nth-child(1) > .button-gap > .edit__button').click();
        cy.wait(2000)
        //edit product title
        cy.get('input[name="productName"]').clear().type(faker.commerce.productName())
        //select software
        cy.get('select').eq(0).select('Software')
        //select another category
        cy.get('select').eq(1).select([1])
        //update subcategory
        cy.get('select').eq(2).select([1])
        //update brand name
        cy.get('input[name="brandCompany"]').clear().type("Acerr")
        //update location
        cy.get('select').eq(3).select([1])
        //update assigned to name
        cy.get('select').eq(4).select([1])
        //change the status to inactive
        cy.get('.status').click()
        cy.wait(2000)
        cy.get('.button__blue').click();
        cy.get("toast__paragraph").should('have.text',"Assets has been updated ");
        
        
    })

    it("Hardware | Check if user are able to update image",()=>{
        cy.visit("/assets/?Search=")
        cy.get(':nth-child(1) > .button-gap > .edit__button').click();
         //select another category
         cy.get('select').eq(1).select([2])
         //select another location
         cy.get('select').eq(3).select([2])
        //delete the assets image
        cy.get(':nth-child(1) > .button__red').click();
        cy.get('.upload__image--file > .button__blue').attachFile('canon.png',{subjectType:"drag-n-drop"})
        cy.get('.button__blue').eq(0).click();
        //cy.get("toast__paragraph").should('have.text',"Assets has been updated ");
        cy.contains("tbody","ITJ-HW-581").should("exist")
        

    })

    it.only("Software | Check if user are able to edit every field except image",()=>{
        cy.visit("/assets/?Search=")
        //go to software sections
        //cy.get('.assets__btn button__style').click();
        cy.get('.assets__inactive > .assets__btn').click();
        cy.get(':nth-child(1) > .button-gap > .edit__button').click();
        cy.wait(2000)
        //edit product title
        cy.get('input[name="productName"]').clear().type(faker.commerce.productName())
       
        //select another category
        cy.get('select').eq(1).select([1])

        //select another sub-category 
        cy.get('select').eq(2).select([1])

         //update brand name
         cy.get('input[name="brandCompany"]').clear().type("Acerr")

        //update location
        cy.get('select').eq(3).select([1])
        //update assigned to name
        cy.get('select').eq(4).select([1])

        //update status
        cy.get('.status').click()
        cy.wait(2000)
        cy.get('.button__blue').click();
        cy.get("toast__paragraph").should('have.text',"Assets has been updated ");
        
        
    })


})