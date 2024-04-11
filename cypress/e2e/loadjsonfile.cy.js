/*describe('Example Test Suite', () => {
    beforeEach(() => {
      cy.visit('http://yourappurl.com');
    });
  
    it('should display user names from fixture data', () => {
      cy.fixture('example_data.json').then((userData) => {
        userData.users.forEach((user) => {
          cy.contains('div', user.name).should('be.visible');
        });
      });
    });
  
    it('should log in user from fixture data', () => {
      cy.fixture('example_data.json').then((userData) => {
        const user = userData.users[0];
        cy.get('#username').type(user.email);
        cy.get('#password').type('password123');
        cy.get('button[type="submit"]').click();
        cy.contains('Welcome, ' + user.name).should('be.visible');
      });
    });
  }); */
  