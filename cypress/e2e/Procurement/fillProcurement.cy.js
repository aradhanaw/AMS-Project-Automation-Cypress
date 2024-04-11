describe("Procurement Form",()=>{
    beforeEach(()=>{
        // cy.sessionLogin('admin','Adminadmin1!');
        cy.login();
        cy.wait(4000);
        cy.visit("/procurement?Search=");
     })
     it("Fill Procurement with valid data",()=>{
        cy.viewport(1600,800);
        cy.get('.button__blue').click();
        cy.get('.procurement__employee--dets > :nth-child(1) > select').select("Ekta Thapa").should('have.value',"446");
        cy.get('select[name="request_urgency"]').select("high").should('have.value',"high");
        //add product lists.
        cy.get('input[name="product_name"]').type("Laptop");
        cy.get('[data-cell="Category"] > div > .input-enabled').select("Computer").should('have.value',"646");
        cy.get('input[name="brand"]').type("Acer Aspire");
        cy.get('input[name="estimated_price"]').type("$12000");
        cy.get('input[name="link"]').type("www.google.com");
        cy.get('.edit__button').click();

        //add another product list
        cy.get('.procurement__product--list > .procurement--button').click();
        cy.get('input[name="product_name"]').eq(1).type("Camera");
        cy.get('[data-cell="Category"] > div > .input-enabled').eq(1).select("Accessories").should('have.value',"650");
        cy.get('input[name="brand"]').eq(1).type("Sony");
        cy.get('input[name="estimated_price"]').eq(1).type("$1500");
        cy.get('input[name="link"]').eq(1).type("www.google.com");
        cy.get('.edit__button').eq(1).click();
        cy.get('.procurement__bottom--buttons > .procurement--button').click();
        cy.get('.toast__paragraph').should('have.text',"Procurement email has been sent to admin");
        cy.wait(4000);
        //cy.get(':nth-child(1) > .button-gap > [href="/procurement/editProcurement"] > .edit__button').click();

        //edit the added product and update procurement
        cy.get('.edit__button ').eq(0).click();
        cy.wait(2000);
        cy.get('.edit__button').eq(0).click();
        cy.get('input[name="product_name"]').eq(0).clear().type("Mac-Book");
        cy.get('[data-cell="Category"] > div > .input-enabled').eq(0).select("Computer").should('have.value',"646");
        cy.get('.edit__button').eq(0).click();
        cy.get('.procurement--button').click();
        cy.get('.toast__paragraph').should('have.text',"Error editing procurement");

        //delete the added product
        cy.get('.delete__button').eq(1).click();
        cy.get('.button__blue').click();
         cy.contains("tbody","Camera").should("not.exist")
        // cy.contains("tbody",'Mac-Book').should("exist")
        cy.get('[placeholder="Enter Product Name"]').find('td').should('have.text','Mac-Book');
       // cy.get('table>tbody').find('tr').contains('td','Mac-Book').should('exist');

       // cy.get('.main__table>').find('.procurement__tablerow').contains('td','Camera').should('not.exist');
       // cy.get('.main__table>').find('.procurement__tablerow').contains('td','Mac-Book').should('not.exist');
      //  cy.get('[placeholder="Enter Product Name"]').invoke('removeClass',"input__notEditable ").then(($el)=>{
      //   expect($el).to.have.text("Mac-Book")
      //  })


        


     })
    
    
})