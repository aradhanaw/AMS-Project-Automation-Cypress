describe("Login_with_valid_credentials",()=>{
    it("Verify_login_success",()=>{
        cy.visit("/login")
        cy.get('input[name="username"]').type('admin')
        cy.get('input[name="password"]').type('Adminadmin1!')
        cy.get('button[type="submit"]').click();
        cy.get('.toast__heading').should("have.text",'Success')
       // cy.url().should('include', '/dashboard');
    })
})