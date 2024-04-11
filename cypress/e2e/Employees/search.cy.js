describe("Add Employee Profile",()=>{
    beforeEach(()=>{
        cy.login()
        cy.wait(3000)
        cy.visit("/employees?Search=")
    })
    it("Search by user's name",()=>{   
        cy.get('.search__form').type("Nezuko")
        cy.get(':nth-child(1) > [data-cell="User"]').should('have.text',"Nezuko")
        cy.get('.search-input').clear().type("Developer")
        //cy.pause()
        cy.get(':nth-child(1) > [data-cell="designation"]').should('have.text',"Developer")

    })
     

})