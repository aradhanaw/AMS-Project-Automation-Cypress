describe("Search functionality",()=>{
    beforeEach(()=>{
        cy.login()
        cy.wait(4000)
    })
    it("Search by name",()=>{
        cy.visit("/repair?Search=");
        cy.get(".search-input").type("mac book pro");
        cy.contains('td',"mac book pro").should('be.visible');
        cy.get(".main__table tbody").contains('td',"mac book pro").should('be.visible');
    })
})

