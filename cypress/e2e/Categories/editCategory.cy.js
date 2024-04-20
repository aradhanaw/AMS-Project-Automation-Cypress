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
    
    it("Add Sub Category with valid data",()=>{
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

    it("Edit Category",()=>{
        cy.visit("/categories");
        //choose one category to edit
        cy.get(':nth-child(7) > .button-gap > :nth-child(2)').click()
        cy.get('.universal__input--container > .input__field > .toggle__showHide--container > .input-enabled').clear().type("Parent Catagorriess");
        //click correct
        cy.get('.universal__FormButton > :nth-child(1)').click();
        cy.get('.toast__heading').should('have.text',"Success");
    })

    it.only("Edit Subcategory",()=>{
        cy.visit("/categories")
        //drop
        cy.get(':nth-child(7) > .button-gap > :nth-child(1)').click();
        //click edit icon
        cy.get('.subcategory__button > .edit__button').click();
        //clear and type
        cy.get('.universal__input--container > .input__field > .toggle__showHide--container > .input-enabled').clear().type("child category");
        //click correctx
        cy.get('.universal__FormButton > :nth-child(1)').click();
        cy.get('.toast__paragraph').should('have.text',"Sub Category has been updated");




    })

})