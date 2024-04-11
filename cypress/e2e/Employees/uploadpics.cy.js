describe("Employee image upload",()=>{
    beforeEach(()=>{
        cy.login()
        cy.wait(3000)
    })
    it.only("upload image and assert it", ()=>{
        cy.visit("/addProfile")
        cy.get('.button__blue').eq(0).click
       // cy.get('.button__blue').click({multiple:true})
        cy.fixture('tanjiro.jpg').as('photo')
        cy.get('input[type="file"]').invoke("removeClass","user__profile--none").then(function (input){
            const blob = Cypress.Blob.base64StringToBlob(this.photo,'image/jpeg')
            const file = new File([blob], 'tanjiro.jpg',{
                type:'image/jpeg'
            })
            const data = new DataTransfer()
            data.items.add(file)
            input[0].files = data.files;
            const changeEvent = new Event('change',{
                bubbles : true
            })
            input[0].dispatchEvent(changeEvent)
            cy.get('.user__profile--image > input',{timeout: 6000}).should('be.visible',"tanjiro.jpg")

        })
        cy.get('.button__blue').eq(1).click()
        
        



    })
})












    
  /*  it("Image upload without use of plugin",()=>{
        cy.visit("/addProfile")
        cy.fixture('tanjiro.jpg').then(fileContent=>{
            Cypress.Blob.binaryStringToBlob(fileContent,'image/jpg').then(blob=>{
                const file= new File([blob],'tanjiro.jpg',{type: 'image/jpeg'})
                cy.get('.button__blue upload__btn button__style').then(input=>{
                    const dataTransfer = new DataTransfer();
                    dataTransfer.items.add(file);
                    input[0].files = dataTransfer.files;
                })
            })
        })

    })

    it("Image upload without use of plugin", () => {
        cy.visit("https://asset-management-system-one.vercel.app/addProfile");
    
        // Read the file content using cy.readFile instead of cy.fixture
        cy.readFile('cypress/fixtures/tanjiro.jpg', 'binary').then((fileContent) => {
            // Convert file content to blob
            const blob = Cypress.Blob.binaryStringToBlob(fileContent, 'image/jpeg');
    
            // Create a File object
            const file = new File([blob], 'tanjiro.jpg', { type: 'image/jpeg' });
    
            // Find the upload button and attach the file
            cy.get('.button__blue upload__btn button__style').then((input) => {
                const dataTransfer = new DataTransfer();
                dataTransfer.items.add(file);
                input[0].files = dataTransfer.files;
            });
        });
    });

}) 



      
    
    
    /*it('uploads a photo without drag and drop', () => {
        cy.visit('/addProfile');
        cy.get('.button__blue').click({multiple:true});
    
        // Assuming your upload button has a unique identifier or class
        cy.get('.user__profile--image > .button__blue').click();

        cy.fixture('tanjiro.jpg').then(fileContent => {
            // Convert base64 string to a blob
            const blob = Cypress.Blob.base64StringToBlob(fileContent, 'image/jpg');
            
              const testFile = new File([blob], 'tanjiro.jpg', { type: 'image/jpg' });
      
              // Create a file input and attach the file to it
              const uploadInput = cy.get('input[type="file"]').first();
              uploadInput.attachFile({ fileContent: testFile, fileName: 'tanjiro.jpg', mimeType: 'image/jpg' });
              
              // Assuming there's a submit button after file selection
              cy.get('your_submit_button_selector').click();
      
              // Add assertions or further steps as needed
            
          });
        
    
        // Assuming there's a submit button after file selection
        cy.get('.user__profile--btn > .button__blue').click();
    
        // Add assertions or further steps as needed
      }); */

    
    
