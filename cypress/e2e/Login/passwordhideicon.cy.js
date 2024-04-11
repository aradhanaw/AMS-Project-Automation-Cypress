describe("check_password_hide_icon",()=>{
    it("hide_password",()=>{
        cy.visit("/login")
        cy.get('input[name="password"]').type("Password@00")
        
        //cy.get('your-selector').should('have.attr', 'attribute-name', 'expected-value');
        cy.wait(3000)
        cy.get('input[name="password"]').should('have.attr','type','password')

    })
    it("unhide_password",()=>{
        cy.visit("/login")
        cy.get('input[name="password"]').type("Password@00")
        cy.get('img').click()
        cy.get('input[name="password"]').should('have.attr','type','text')

    })

})