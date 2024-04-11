import 'cypress-file-upload'
describe("Assets Photo Upload",()=>{
    beforeEach(()=>{
        cy.login()
        cy.wait(3000)
    })

    it.only("Drag and Drop photo upload",()=>{
        cy.visit("/assets/*")
        cy.get('.button__blue').click()
        cy.wait(2000)
        cy.get('.upload__image--file > .button__blue').attachFile('tanjiro.jpg',{subjectType:"drag-n-drop"})
        

    })

    it("Single Photo Upload",()=>{
        cy.visit("/assets/*")
        cy.get('.button__blue').click()
        cy.wait(2000)
        cy.fixture('tanjiro.jpg').then(fileContent => {
            cy.get('.upload__image--file > .button__blue').attachFile({
              fileContent: fileContent.toString(), // Convert file content to string
              fileName: 'tanjiro.jpg',             // File name
              mimeType: 'image/jpg'               // MIME type
            });
          });
          
        

    })
    
    it("Upload Pics",()=>{
        cy.visit("/assets/*")
        cy.wait(6000)
        cy.get('.button__blue').click()
        cy.get('.button__blue upload__drag--btn button__style').click();

        // Wait for the file input to be present in the DOM
        cy.get('input[type="file"]').should('be.visible').then($input => {
          // Assuming you have a photo file named 'your_photo.jpg' in your fixtures folder
          const fileName = 'tanjiro.jpg';
          
          // Upload the file
          cy.fixture(fileName, 'base64').then(fileContent => {
            const blob = Cypress.Blob.base64StringToBlob(fileContent, 'image/jpeg');
            const testFile = new File([blob], fileName);
            
            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(testFile);
            
            // Attach the file to the input element
            $input[0].files = dataTransfer.files;
            
            // Trigger the change event to simulate file upload
            $input.trigger('change', { force: true });
          });
        });
    
        // Optionally, add assertions or further actions after the upload is completed
      });
  

})

    


