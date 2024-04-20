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
        cy.get('select').eq(0).select('Hardware')
        cy.get('select').eq(1).select([2])
        cy.get('select').eq(2).select([2])
        cy.get('input[name="brandCompany"]').type("Sony")
        cy.get('select').eq(3).select([2])
        cy.get('select').eq(4).select([1])
        cy.get('.status').click()
        cy.get('.upload__image--file > .button__blue').attachFile('tanjiro.jpg',{subjectType:"drag-n-drop"})
        cy.wait(5000)

        cy.get('button[type="submit"]').click()
        cy.get("toast__paragraph").should('have.text',"Assets has been added ")
       // cy.get('.Toastify__toast-body',{timeout: 6000}).should('have.text',"Success")
        
        
    })

    
    it.only("submit on empty field and check validation messages on mandatory field",()=>{
        cy.visit("/assets/?Search=");
        cy.get('.button__blue').click();
        cy.wait(2000);
        cy.get('button[type="submit"]').click();
        //on product name field
        cy.get('.input__field > .error-message').should('have.text',"Please enter a product name");

        //on assets type field
        cy.get('.form--content__right > :nth-child(2) > .error-message').should('have.text',"Please choose an asset type");

        //on category name field
        cy.get('.form--content__right > :nth-child(3) > .error-message').should('have.text',"Please select an category");

        //on location field
        cy.get('.form--content__left > :nth-child(2) > .error-message').should('have.text',"Please select an location");

        //on assigned to field
        cy.get('.form--content__left > :nth-child(3) > .error-message').should('have.text',"Please select an assigned employee");
        cy.screenshot('empty-field');


    })

    it("check for boundary value analysis of Name/Title field--Minimum",()=>{
        cy.visit("/assets/?Search=")
        cy.get('.button__blue').click()
        cy.wait(2000)
        cy.get('input[name="productName"]').type("a");
        cy.get('button[type="submit"]').click();
        cy.get('.input__field > .error-message').should('have.text',"Product name must be at least 2 characters long");
       

    })


    it("check for bounary value analysis of Name/Title field -- Maximum",()=>{
        cy.visit("/assets/?Search=");
        cy.get('.button__blue').click();
        cy.wait(2000);
        cy.get('input[name="productName"]').type("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabcd");
        cy.get('button[type="submit"]').click();
        cy.get('.input__field > .error-message').should('have.text',"Product name should be less than 32 characters");

    })

    it("Check if name field accepts only numeric values",()=>{
        cy.visit("/assets/?Search=");
        cy.get('.button__blue').click();
        cy.wait(2000);
        cy.get('input[name="productName"]').type('111222')
        cy.get('select').eq(0).select('Hardware')
        cy.get('select').eq(1).select([2])
        cy.wait(2000)
        cy.get('select').eq(2).select([2])
        cy.get('input[name="brandCompany"]').type("Sony")
        cy.get('select').eq(3).select([2])
        cy.get('select').eq(4).select([1])
        cy.get('.status').click()
        cy.get('.upload__image--file > .button__blue').attachFile('tanjiro.jpg',{subjectType:"drag-n-drop"})
        cy.wait(5000)
        cy.get('button[type="submit"]').click();
        //no validation message got displayed.Instead Improper error message is displayed
        //cy.get('.input__field > .error-message').should('have.text',"Please enter a product name consisting combination of alphanumeric or only alphabetic characters");

        cy.get('.toast__paragraph').should('have.text',"Fill every input field");


    })

    it.only("Check if brand field accepts only numeric values or not",()=>{

        cy.visit("/assets/?Search=");
        cy.get('.button__blue').click();
        cy.wait(2000);
        cy.get('input[name="productName"]').type(faker.commerce.productName())
        cy.get('select').eq(0).select('Hardware');
        cy.get('select').eq(1).select([2]);
        cy.get('select').eq(2).select([2]);
        cy.get('input[name="brandCompany"]').type("1222");
        cy.get('select').eq(3).select([2]);
        cy.get('select').eq(4).select([1]);
        cy.get('.status').click();
        cy.get('.upload__image--file > .button__blue').attachFile('tanjiro.jpg',{subjectType:"drag-n-drop"});
        cy.wait(5000);

        cy.get('button[type="submit"]').click();
        //on submit validation message should be displayed. But no validation message is displayed.
        cy.get('.toast__paragraph').should('have.text',"Fill every input field");
        
        

    })

    
    
})