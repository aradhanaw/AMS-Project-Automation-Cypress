describe("Delete Assets Functionality",()=>{
    beforeEach(()=>{
        cy.login()
        cy.wait(3000)
        cy.viewport(1600,800);
    })
    it("Check for the presence of delete confirmation messgae",()=>{

        cy.visit("/assets/?Search=");
        cy.get(':nth-child(1) > .button-gap > .delete__button').click();
        cy.get('.delete__confirmation').should('have.text',"Delete Asset? Are you sure you want to delete this asset permanently?This action cannot be undone. Cancel Proceed");

    })

    it("Check for successfully deleted message",()=>{
        cy.visit("/assets/?Search=");
        cy.get(':nth-child(1) > .button-gap > .delete__button').click();
        //click proceed button
        cy.get('.delete__confirmation--button > .button__blue').click();
        cy.get('.toast__paragraph').should('have.text',"Asset Deleted Successfully");


    })

    it.only("Check for cancel button",()=>{
        cy.visit("/assets/?Search=");
        cy.get(':nth-child(1) > .button-gap > .delete__button').click();
        //click cancel button
        cy.get('.button__red').click();
        cy.get('.toast__paragraph').should('have.text',"Asset Deleted Successfully");
        
    })
})