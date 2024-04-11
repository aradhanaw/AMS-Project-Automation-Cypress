import 'cypress-file-upload';
import {  faker } from "@faker-js/faker";
describe("Repair",()=>{
    beforeEach(()=>{
       // cy.sessionLogin('admin','Adminadmin1!');
       cy.login();
       cy.wait(4000);
        cy.visit("/repair?Search=");
    })
    it("Add repair",()=>{
        cy.viewport(1600,800);
        cy.get('.category--buttons').click();
        cy.wait(2000)
        

       //select random device owner.
        cy.get(':nth-child(1) > select').then(dropdown => {
             const options = Cypress.$(dropdown).find('[value]');
             const firstOption = options.first();
             firstOption.remove();
             const numOptions = options.length;
             const randomIndex = Math.floor(Math.random() * numOptions);
            const randomOptionText = options.eq(randomIndex).text();
            cy.wrap(dropdown).select(randomOptionText);
         });

         cy.get('input[name="Product_Code"]').type("22");
         cy.get('input[name="Product_Name"]').type(faker.commerce.productName());

         cy.wait(2000);

         //select category

         cy.get(':nth-child(4) > .input-enabled').then(dropdown=>{
            const op= Cypress.$(dropdown).find('[value]');
            cy.log(op)
            const firstOption= op.first();
            cy.log(firstOption)
            firstOption.remove();
            const numOptions = op.length;
            const randomIndex = Math.floor(Math.random() * numOptions);
           const randomOptionText = op.eq(randomIndex).text();
           cy.wrap(dropdown).select(randomOptionText);
         });
         //cy.pause()

         cy.get('input[name="reason"]').type("Screen Crack");
         cy.wait(4000);
         cy.fixture('canon.png').then((data)=>{
            cy.get('input[type="file"]').attachFile('canon.png');
         })
         cy.get('.user__profile--btn-right > .button__blue').click();
         cy.get('.toast__paragraph').should('have.text',"Device has been listed to Repair");
         //verify that recently added value is present.
         cy.wait(4000);
         cy.get(':nth-child(1) > [data-cell="Product Code"]').should('have.text',"ITJ-DA-22");

         //search recently added 
         cy.get('.search-input').type("22");
         cy.wait(2000);
         cy.get('[data-cell="Product Code"]').contains('ITJ-DA-22');
         cy.wait(2000);
         
         //view recently added 
         cy.get('.view__button').click();
        // cy.get(':nth-child(2) > .input__field > .toggle__showHide--container > input').should('have.text',"22"); This doesn't work
        // cy.get('input[name="Product_Code"]').invoke("removeClass",'input-disabled   undefined ').should('have.text',"22"); This also does not work
        cy.get('input[name="Product_Code"][disabled]').should('have.value','22');
         cy.get('.button__red').click();
         
         //edit
         cy.get(':nth-child(1) > .button-gap > [href="/repair/editRepairReplace"] > .edit__button').click();

         //edit device owner.
        /* cy.get(':nth-child(1) > select').then(dropdown => {
            const options = Cypress.$(dropdown).find('[value]');
            const firstOption = options.first();
            firstOption.remove();
            const numOptions = options.length;
            const randomIndex = Math.floor(Math.random() * numOptions);
           const randomOptionText = options.eq(randomIndex).text();
           cy.wrap(dropdown).select(randomOptionText);
        });*/

        
        cy.wait(2000);
        cy.get(':nth-child(1) > .button__red').click();
        
        
       cy.get('input[type="file"]').attachFile('tanjiro.jpg');

       cy.wait(2000);
       //edit device owner
       cy.get(':nth-child(1) > select').then(dropdown => {
        const options = Cypress.$(dropdown).find('[value]');
        const firstOption = options.first();
        firstOption.remove();
        const numOptions = options.length;
        const randomIndex = Math.floor(Math.random() * numOptions);
       const randomOptionText = options.eq(randomIndex).text();
       cy.wrap(dropdown).select(randomOptionText);
    });
//edit category
    cy.get(':nth-child(4) > .input-enabled').then(dropdown=>{
        const op= Cypress.$(dropdown).find('[value]');
        cy.log(op)
        const firstOption= op.first();
        cy.log(firstOption)
        firstOption.remove();
        const numOptions = op.length;
        const randomIndex = Math.floor(Math.random() * numOptions);
       const randomOptionText = op.eq(randomIndex).text();
       cy.wrap(dropdown).select(randomOptionText);
     });
       cy.get('.button__blue').click()
       cy.get('.toast__paragraph').should('have.text',"Repair has been updated");

            cy.wait(4000);

            //delete
            cy.get(':nth-child(1) > .button-gap > .delete__button').click();



         





         








    })


})