import 'cypress-file-upload';
import {  faker } from "@faker-js/faker";
describe("Replace",()=>{

    beforeEach(()=>{
         cy.sessionLogin('admin','Adminadmin1!');
       
         cy.visit("/repair?Search=");
     })
     it("Add replace request",()=>{
        cy.get('.repairReplace__inactive > .assets__btn').click();
        cy.get('.category--buttons').click();
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

        cy.get('input[name="Product_Code"]').type("125");
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
        cy.get('type="radio').check('Replace');

        cy.get('input[name="reason"]').type("Screen Crack");
        cy.wait(4000);
        cy.fixture('canon.png').then((data)=>{
           cy.get('input[type="file"]').attachFile('canon.png');
        })
        cy.get('.user__profile--btn-right > .button__blue').click();
        cy.get('.toast__paragraph').should('have.text',"Device has been listed to Replace");
     })
})