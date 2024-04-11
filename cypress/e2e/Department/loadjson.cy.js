describe('department',()=>{
    beforeEach(()=>{
        cy.login()
        cy.wait(2000)
    })
    it('Department add through fixtures',()=>{
        cy.visit("/departments")
        cy.fixture('sample.json').then((data)=>{
            cy.get('.input-enabled').type(data.departmentname);
            cy.get('.button__blue').click();
            cy.get('.toast__heading').should('have.text',data.expected);
            cy.get('h2').should('have.text',"Department")
    
           // cy.get('[data-name="abc"]').should('have.text',"abc");

        })
       

    })
   
})