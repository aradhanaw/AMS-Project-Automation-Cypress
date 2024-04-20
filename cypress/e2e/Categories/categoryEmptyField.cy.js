describe("Category Empty Field",()=>{
    beforeEach(()=>{
        cy.sessionLogin('admin','Adminadmin1!')
    })
    it("Check empty field validation message",()=>{
        cy.viewport(1600,800)
        cy .visit("/categories");
        //directly click on add category button
        cy.get('.button__blue').click();
        cy.get('.error-message').should('have.text',"Please enter a Category name");
        
    })

})