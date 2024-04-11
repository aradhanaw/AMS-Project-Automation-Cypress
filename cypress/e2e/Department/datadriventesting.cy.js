describe('department',()=>{
    beforeEach(()=>{
        cy.login()
        cy.wait(2000)
    })
    it('DataDrivenTesting',()=>{
        cy.visit("/departments")
        cy.fixture('departmentfile.json').then((data)=>{
            data.forEach((userdata,index)=>{cy.get('.input-enabled').type(userdata.departmentname);
            cy.log(index)
            cy.get('.button__blue').click();
            if(index==0)
            {
            cy.get('.toast__heading').should('have.text',userdata.expected);

            }
            else if(index==1){
            cy.get('.toast__paragraph').should('have.text',userdata.expected);


            }
            else if(userdata.departmentname=='111'){
                cy.get('.error-message').should('have.text',userdata.expected)
                
            }
        
            cy.get('.Toastify__close-button').click()
            cy.get('.input-enabled').clear();

            })

            cy.wait(4000)
            

        })
       

    })
   
})