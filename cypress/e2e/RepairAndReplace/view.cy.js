describe("View",()=>{
    beforeEach(()=>{
        cy.login();
        cy.wait(4000);
        cy.visit("/repair?Search=");

    })
    it("View Added Repair Request",()=>{
        cy.get(':nth-child(1) > .button-gap > [href="/repair/viewRepair"] > .view__button').click();
       // cy.get(':nth-child(2) > .input__field > .toggle__showHide--container > .input-disabled').should('have.text',"142"); This does not work.
       cy.get('input[name="Product_Code"][disabled]').should('have.value','142');

       //cy.get(':nth-child(2) > .input__field > .toggle__showHide--container > .input-disabled').should('have.value',"142"); This also works

    })
})
