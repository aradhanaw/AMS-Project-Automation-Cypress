describe("login",()=>{
    it("empty_login_direct",()=>{
        cy.visit("/login")
        cy.get('.user__auth--title').should('have.text',"Login")
        cy.get('.user__auth--button').click()
        cy.get('.error-message').eq(0).should('have.text',"Please enter your username")
        cy.get('.error-message').eq(1).should('have.text',"Please enter your password") 
        

    })

    it("username_validation_disappear",()=>{
        cy.visit("/login")
        cy.get('.user__auth--button').click()
        cy.get('.error-message').eq(0).should('have.text',"Please enter your username")
        cy.get('.error-message').eq(1).should('have.text',"Please enter your password") 
        cy.get('input[name="username"]').type("Jerry")
        cy.wait(3000)
        cy.get('.error-message').eq(0).should('not.contain',"Please enter your username")
        cy.get('.error-message').eq(0).should('have.text',"Please enter your password")

        
    })
})