describe("Search Functionality",()=>{
    beforeEach(()=>{
        cy.login();
        cy.wait(4000);
        cy.visit("/procurement?Search=");
    })

    it("Search through request by name",()=>{
        cy.get('.search-input').type("Ekta Thapa");
        cy.contains("tbody","Ekta Thapa").should("exist")
    })

    it("Search through Verified Date",()=>{
        cy.get('.search-input').type("2024-04-08");
        cy.contains("tbody","2024-04-08").should("exist")

    })

    it("Invalid Search",()=>{
        cy.get('.search-input').type("@@");
        cy.get('.empty-table-message > p').should('have.text',"No data available");


    })
    it("Search through request by name",()=>{
        cy.get('.search-input').type("Ekta Thapa");
        cy.contains("tbody","Ekta Thapa").should("exist")
    })

})