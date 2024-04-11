describe("Filter Procurement",()=>{
    beforeEach(()=>{
        cy.login();
        cy.wait(4000);
        cy.visit("/procurement?Search=");

    })
    it("Filter by request by name",()=>{
        cy.get('.filter--button').click();
        cy.get('select').eq(0).select("Ekta Thapa").should('have.value',"Ekta Thapa");
        cy.get('.filter__button--flex > .button__blue').click();
    })

    it("Filter by Assigned date",()=>{
        cy.get('.filter--button').click();
        cy.get('input[name="fromDate"]').type("2024-04-03");
        cy.get('input[name="toDate"]').type("2024-04-05");
        cy.get('.filter__button--flex > .button__blue').click();

    })

    it("Check clear filter",()=>{
        cy.get('.filter--button').click();
        cy.get('select').eq(0).select("Ekta Thapa");
        cy.get('.button__red').click();
        //cy.get('h2').click();
        //close filter button
        cy.get('.filter__hide').click();

    })
    it("Try to filter through invalid data",()=>{
        cy.get('.filter--button').click();
        cy.get('select').eq(2).select("Approved");
        //cy.get('select').eq(2).select("Pending");
        cy.get('.filter__button--flex > .button__blue').click();
        cy.get('.empty-table-message > p').should('have.text',"No data available");


    })
})