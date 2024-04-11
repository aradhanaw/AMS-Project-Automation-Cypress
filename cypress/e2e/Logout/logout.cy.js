describe("Logout Functionality",()=>{
    beforeEach(()=>{
        cy.sessionLogin('admin','Adminadmin1!');

    })
    it("Logout",()=>{
        cy.visit("/")
        cy.get('.navbar__list--toggle.link').click();
        cy.url().should('include','/login');
        
    })

})