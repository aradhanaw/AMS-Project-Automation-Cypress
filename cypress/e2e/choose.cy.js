// describe('choose_departure_and_designation', () => {
//     it('selection_of_departure', () => {
//       cy.visit('https://blazedemo.com/')
//     //   cy.get('h1').should('have.text','Welcome to the Simple Travel Agency!')
//     //   cy.get('select').select('Paris').should('have.value','Paris')
      
//     })
//   })

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

describe('choose_departure_and_designation', () => {
    it('selection_of_departure', () => {
      cy.visit('https://blazedemo.com/')
      cy.contains('h1', 'Welcome to the Simple Travel Agency!').should('be.visible')
      cy.get('select[name="fromPort"]').select('Paris').should('have.value', 'Paris')
      
    })
})




