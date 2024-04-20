describe("Categories",()=>{
    beforeEach(()=>{
        cy.sessionLogin('admin','Adminadmin1!')
    })
    it("Add Categories with valid data",()=>{
        cy .visit("/categories");
        //add parent category
        cy.get('.input-enabled').type("Devices");
        cy.get('.button__blue').click();
        cy.get('.toast__paragraph').should('have.text',"Category has been added");
    })
    
    it.only("Add Sub Category with valid data",()=>{
        cy .visit("/categories");
        //add parent category
        cy.get('.input-enabled').type("DemoSubCategory");
        cy.get('.button__blue').click()
        cy.get('.toast__paragraph').should('have.text',"Category has been added");
        cy.wait(5000)
        cy.get('.input-enabled').type("Demo");
        cy.get('select').select("DemoSubCategory")
        cy.get('.button__blue').click();
        cy.get('.toast__paragraph').should('have.text',"Sub Category has been added");
        

    })
})