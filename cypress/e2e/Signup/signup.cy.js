import { faker } from '@faker-js/faker';

describe("Signup",()=>{
    it("input_valid_data_repeated_username",()=>{
        cy.visit("/signup")
        cy.get('input[placeholder="Enter your name"]').type("Jeryy")
        cy.get('input[name="username"]').type(faker.person.firstName())
        cy.get('input[placeholder="Enter your email address"]').type("jerry@gmail.com")
        cy.get('input[placeholder="Enter your password"]').type("Password1!")
        cy.get('input[placeholder="Enter your password again"]').type("Password1!")
        cy.get('.user__auth--button').click()
        

        //to verify that pop up success message has been displayed.
        cy.get('.toast__heading').should('have.text',"Success")

        //cy.contains('.toast__heading','Success').should('be.visible')
    
         
        cy.url().should('include', '/login',{timeout:20000});
       

    
    })

    it.skip("invalid_data_for_username",()=>{
        cy.visit("/signup")
        cy.get('input[placeholder="Enter your name"]').type("Jerry")
        cy.get('input[name="username"]').type("Je")
        cy.get('input[placeholder="Enter your email address"]').type("jerry@gmail.com")
        cy.get('input[placeholder="Enter your password"]').type("Password1!")
        cy.get('input[placeholder="Enter your password again"]').type("Password1!")
        cy.wait(2000)
        cy.get('.user__auth--button').click()
        //to verify the presence of validation message for username
        cy.get('.error-message').should('have.text','Username must be at least 4 characters long')

    })

}
)