describe("Filtering",()=>{

    beforeEach(()=>{
        cy.login()
        cy.wait(3000)
    })

    it("Filtering through Department and Designation",()=>{
        cy.visit("/employees?Search=");
        cy.get('.filter--button').click();
        cy.get('h3').eq(1).should('have.text',"Filter");
        cy.get('select').eq(0).select("Project Manager");
        cy.get('select').eq(1).select("frontend");
        cy.get('.filter__button--flex > .button__blue').click();
        cy.get('.empty-table-message > p').should('have.text',"No data available")

    })

    it.only("Filtering Through Department",()=>{
        cy.visit("/employees?Search=");
        cy.get('.filter--button').click();
        cy.get('h3').eq(1).should('have.text',"Filter");
        cy.get('select').eq(0).select("Project Manager");
        cy.get('.filter__button--flex > .button__blue').click();
        

    })
})