describe("Pagination",()=>{
    beforeEach(()=>{
        cy.login();
        cy.wait(3000);

    })
    it("Paaa",()=>{
        cy.visit("/employees?Search=");
        cy.get('.main__table>tbody>tr').should('have.length',"7");

        

         //pagination
         let totalPages = 4;
         for(let p=1;p<=totalPages;p++)
         {
             if(totalPages>1){
                 cy.log("Active Page is "+p);
                 cy.get("div[class='pagination']>button:nth-child("+p+")").click();
                 cy.wait(4000);
                 cy.get('.main_table>tbody>tr')// capture all the rows
                 .each( ($row,index,$rows)=>{          //read each and every row.
                     cy.wrap($row).within( ()=>{       //wrap that particular row and go inside of that row
                       
 
                     })
                 })
                 
                 
             }
         }
 
 
     })
 



})