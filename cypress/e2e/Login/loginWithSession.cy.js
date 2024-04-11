describe("Login with Session",()=>{
    beforeEach(()=>{
        cy.sessionLogin("admin","Adminadmin1!")
    })
    it("Test Case 1",()=>{
        cy.visit('/location')
         cy.url().should('contains',"/location")
    })
})