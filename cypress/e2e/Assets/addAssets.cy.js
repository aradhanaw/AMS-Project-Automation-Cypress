import { faker } from '@faker-js/faker';
import 'cypress-file-upload';
describe("Assets_Functionality",()=>{
    beforeEach(()=>{
        cy.login()
        cy.wait(3000)
    })
    it("valid_add_assets",()=>{
        cy.visit("/assets/?Search=")
        cy.get('.button__blue').click()
        cy.wait(2000)
        cy.get('input[name="productName"]').type(faker.commerce.productName())
        cy.get('select').eq(0).select('hardware')
        cy.get('select').eq(1).select([2])
        cy.get('select').eq(2).select([2])
        cy.get('input[name="brandCompany"]').type("Sony")
        cy.get('select').eq(3).select([2])
        cy.get('select').eq(4).select([1])
        cy.get('.status').click()
        cy.get('.upload__image--file > .button__blue').attachFile('tanjiro.jpg',{subjectType:"drag-n-drop"})
        cy.wait(5000)

        cy.get('button[type="submit"]').click()
       // cy.get('.Toastify__toast-body',{timeout: 6000}).should('have.text',"Success")
        





    

       

    
        
    })
})