describe("Sorting Functionality",()=>{
    beforeEach(()=>{
        cy.login();
        cy.wait(4000);
        cy.visit("/procurement?Search=");

    })
    it("Sort Request by name in Ascending Order on first click",()=>{
        //cy.get('thead > tr > :nth-child(1)').click();
        cy.get(':nth-child(1)>.sort__icon').click();
        cy.url().should('include',"/procurement?sortOrder=asc&sortBy=requested_by_id");
        //second click to sort the request by name in descending order
        cy.get('.selected-tablehead >.sort__icon').click();
        cy.url().should('include',"/procurement?sortOrder=desc&sortBy=requested_by_id");
        
    })
})