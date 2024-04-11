describe("photo upload",()=>{
    beforeEach(()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")
    })
    it("photo upload using default cypress API",()=>{
        //apply this only if input type is file 

        cy.fixture('tanjiro.jpg').as('photo')
        cy.get('input[type="file"]').eq(0).then(function (input){
            //Cypress.Blob.base64StringToBlob() function converts the base64 string representation of the photo (stored in 'photo') into a Blob object. Blobs are binary large objects, often used for handling binary data in JavaScript.
            const blob = Cypress.Blob.base64StringToBlob(this.photo,'image/jpeg')

            //This creates a File object using the Blob object created earlier. The File constructor takes an array of Blob objects, the file name ('tanjiro.jpg' in this case), and additional options, such as the file type ('image/jpeg').
            const file = new File([blob], 'tanjiro.jpg',{
                type:'image/jpeg'
            })

            //This section creates a new DataTransfer object, adds the File object to it, and then assigns the DataTransfer object's files to the file input element's files property. This is essentially simulating a user selecting a file to upload by programmatically setting the files property of the file input element.
            const data = new DataTransfer()
            data.items.add(file)
            input[0].files = data.files;

            //Here, a new 'change' event is created with the Event() constructor. The event is then dispatched on the file input element, simulating a user triggering a change event after selecting a file to upload.
            const changeEvent = new Event('change',{
                bubbles : true
            })
            input[0].dispatchEvent(changeEvent)
            cy.get('#file-upload').should('be.visible',"tanjiro.jpg")
            cy.get("#file-submit").click()
            cy.wait(4000)
            cy.get('h3').should('have.text',"File Uploaded!")

        })
        

    })
    
})