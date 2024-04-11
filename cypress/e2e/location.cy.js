describe('location',()=>{
    beforeEach(()=>{
        cy.login()
        cy.wait(2000)
    cy.log(Cypress.env("USERNAME"))
    })
    it('scenario1',()=>{
        cy.visit('/location')
        cy.get('.input-enabled').type('Paris')
        cy.get('.category--button').click()
        cy.get(':nth-child(13) > :nth-child(2)').should('have.text','Paris')
    })
   
})