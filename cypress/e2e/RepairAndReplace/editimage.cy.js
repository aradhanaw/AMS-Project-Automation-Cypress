import 'cypress-file-upload'
describe("Edit",()=>{
    beforeEach(()=>{
        cy.login();
        cy.wait(4000);
        cy.visit("/repair?Search=");

    })
    it("Edit Image",()=>{
        cy.get(':nth-child(1) > .button-gap > [href="/repair/editRepairReplace"] > .edit__button').click();
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
       cy.get('.toast__paragraph').should('have.text',"Product already sent for repair or replace !");
       cy.get('.link > .button__red').click();
       

    })
})
