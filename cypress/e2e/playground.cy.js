import { faker } from '@faker-js/faker';
describe("Playground",()=>{

it("play",()=>{

    cy.visit("www.google.com")
     

    cy.get('textarea[id="APjFqb"]').type(faker.animal.dog())
})

})