describe("Sorting",()=>{
    beforeEach(()=>{
        cy.login()
        cy.wait(3000)
        cy.visit("/employees?Search=");
    })
    it("Sort name in Ascending order",()=>{
       // cy.get('thead > :nth-child(1)').click();
        cy.get('thead > :nth-child(2)').click();

       
    })
    it.only("Sort id in Ascending order",()=>{
        cy.get('thead > :nth-child(1) > span').click();
        //cy.get('.main__table>thead>th')
       // cy.get('thead > :nth-child(3)').click();
      cy.contains("button","2")
        
     })


    
})