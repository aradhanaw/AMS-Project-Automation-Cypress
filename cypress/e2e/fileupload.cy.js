import 'cypress-file-upload'
describe("File Upload",()=>{
    it("Single file upload",()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get('#file-upload').attachFile('test1.pdf')
        cy.get("#file-submit").click()
        cy.wait(4000)
        cy.get('h3').should('have.text',"File Uploaded!")

    })

    it("Rename Upload filename ",()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get('#file-upload').attachFile({filePath:'test1.pdf',fileName:'me.pdf'})
        cy.get("#file-submit").click()
        cy.wait(4000)
        cy.get('h3').should('have.text',"File Uploaded!")

    })

    it("Drag and Drop Upload File ",()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#drag-drop-upload").attachFile("test1.pdf",{subjectType:'drag-n-drop'})
        cy.wait(5000)
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').contains("test1.pdf")


    })

    it.only("Multiple File upload ",()=>{
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")
        cy.get('#filesToUpload').attachFile(["test1.pdf","test2.pdf"])
        cy.wait(4000)
        cy.get(':nth-child(6) > strong').should("have.text",'Files You Selected:')


    })


})
