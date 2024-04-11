describe("Filter functionality",()=>{
    beforeEach(()=>{
        cy.sessionLogin('admin','Adminadmin1!');
        cy.visit("/repair?Search=");
        
    })

    // beforeEach(()=>{
    //     cy.login();
    //     cy.wait(4000);
    //     cy.visit("/repair?Search=");

    // })

    it("Filter through date",()=>{
        cy.viewport(1600,800);
       
        cy.get('.filter--button').click();
        cy.get(':nth-child(3) > .input__field > .toggle__showHide--container > .input-enabled').type("2024-04-01");
        cy.get(':nth-child(4) > .input__field > .toggle__showHide--container > .input-enabled').type("2024-04-04");
        cy.get('.filter__button--flex > .button__blue').click();
        cy.url().should('include','repair?assigned_date=2024-04-01+AND+2024-04-04');


    })
})