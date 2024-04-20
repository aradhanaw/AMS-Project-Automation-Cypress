// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


//custom command for login
Cypress.Commands.add("login",()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
    cy.visit('/')
    cy.get('input[name="username"]').type('admin')
    cy.get('input[name="password"]').type('Adminadmin1!')
    cy.get('button[type="submit"]').click();
   

})



//custom command for login with session
Cypress.Commands.add("sessionLogin",(username,password)=>{
  cy.session([username,password],()=>{
    cy.visit('/login')
    cy.get('input[name="username"]').type(username)
    cy.get('input[name="password"]').type(password)
    cy.get('button[type="submit"]').click();
    cy.wait(2000)

  })

})


//custom command for logout
Cypress.Commands.add("logout",()=>{
  cy.sessionLogin('admin','Adminadmin1!');
  cy.visit("/")
  cy.get('.navbar__list--toggle.link').click();
  cy.url().should('include','/login');


})


