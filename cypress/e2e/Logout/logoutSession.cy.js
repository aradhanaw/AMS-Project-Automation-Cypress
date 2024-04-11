describe('Logout functionality', () => {
    it('should delete the token upon logout', () => {
      // Perform login actions (assuming you have a custom login command)
        cy.sessionLogin('admin','Adminadmin1!');
         // Verify that the token exists in local storage
        cy.window().its('localStorage').should('have.property', '');


  
      // Perform logout actions (assuming you have a custom logout command)
      //cy.logout();
  
      // Verify that the token is deleted from local storage
    //  cy.window().its('localStorage').should('not.have.property', 'your_token_key');
    });
  });
  
  