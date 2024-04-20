describe("Category Invalid Cases",()=>{
    beforeEach(()=>{
        cy.sessionLogin('admin','Adminadmin1!')
    })
    it("Check if category name accepts only numbers",()=>{
        cy.viewport(1600,800)
        cy .visit("/categories");
        //directly click on add category button
        cy.get('.input-enabled').type("1111");
        cy.get('.button__blue').click();
        cy.get('.error-message').should('have.text',"Please enter valid alphanumeric string.");
        
    })

    it("Check if category name accepts special characters",()=>{
        cy.viewport(1600,800)
        cy .visit("/categories");
        //directly click on add category button
        cy.get('.input-enabled').type("@@@");
        cy.get('.button__blue').click();
        cy.get('.error-message').should('have.text',"Please enter valid alphanumeric string.");
        
    })



})