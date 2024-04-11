import { faker } from '@faker-js/faker';
import 'cypress-file-upload'
describe("Add Employee Profile",()=>{
    beforeEach(()=>{
        cy.login()
        cy.wait(3000)
    })
    it.only("Add employee with valid Data",()=>{
        cy.visit("/employees?Search=")
        cy.get('.button__blue').click()
        cy.get('input[name="username"]').type("Yourname")
        cy.get('input[type="radio"]').eq(1).check()
        cy.get('input[name="designation"]').type("Developer")
        cy.get('select[name="department"]').select("Project Manager")
        cy.get('input[name="email"]').type(faker.internet.email())
        cy.get('input[name="phoneNumber"]').type("9841162189")
        cy.get('input[type="file"]').invoke("removeClass","user__profile--none").attachFile("tanjiro.jpg")
        cy.get('.user__profile--image > input',{timeout: 6000}).should('be.visible',"tanjiro.jpg")
        cy.get('.user__profile--btn > .button__blue').click()
        cy.get('.toast__heading').should('have.text',"Success");

    })
    it("Add employee with valid Data along with edit and delete",()=>{
        cy.visit("/employees?Search=")
        cy.get('.button__blue').click()
        cy.get('input[name="username"]').type("Nezuko")
        cy.get('input[type="radio"]').eq(1).check()
        cy.get('input[name="designation"]').type("Developer")
        cy.get('select[name="department"]').select("Project Manager")
        cy.get('input[name="email"]').type(faker.internet.email())
        cy.get('input[name="phoneNumber"]').type("9841162128")
        cy.get('input[type="file"]').invoke("removeClass","user__profile--none").attachFile("tanjiro.jpg")
        cy.get('.user__profile--image > input',{timeout: 6000}).should('be.visible',"tanjiro.jpg")
        cy.get('.user__profile--btn > .button__blue').click()
        cy.get('.toast__heading').should('have.text',"Success");
        //cy.get(':nth-child(3) > .button-gap > :nth-child(1)').click()

        //view
        cy.wait(4000);
        cy.get(':nth-child(1) > .button-gap > .view__button').click();
        cy.get('h2').should('have.text',"Nezuko");
        cy.get('.button__red').click();

        //search the added employee
        cy.get('.search-input').type("Nezuko");
        cy.wait(6000);

        
       

        //edit
        cy.wait(4000);
        cy.get(':nth-child(1) > .button-gap > .edit__button').click();
        cy.get('input[name="username"]').clear().type("Tanjiro");
        cy.get('input[name="designation"]').clear().type("Designer");
        cy.get('.user__profile--btn > .button__blue').click();
        cy.get('.toast__heading').should('have.text',"Success");

        //view edited data
        cy.wait(4000);
        cy.get(':nth-child(1) > .button-gap > .view__button').click();
        cy.get('h2').should('have.text',"Tanjiro");
        cy.get('.button__red').click();
        

        //delete recently added data.
        cy.wait(4000);
        cy.get(':nth-child(1) > .button-gap > .delete__button').click();
        cy.get('.delete__confirmation--button > .button__blue').click();
        cy.get('.toast__paragraph').should('have.text',"Employee Deleted Successfully");





    })

    it("Filtering through Department and Designation",()=>{
        cy.visit("/employees?Search=");
        cy.get('.filter--button').click();
        cy.get('h3').eq(1).should('have.text',"Filter");
        cy.get('select').eq(0).select("Project Manager");
        cy.get('select').eq(1).select("frontend");
        cy.get('.filter__button--flex > .button__blue').click();
        cy.get('.empty-table-message > p').should('have.text',"No data available")

    })

    
   

    it("Add employee with invalid name",()=>{
        cy.visit("/employees?Search=")
        cy.get('.button__blue').click()
        cy.get('input[name="username"]').type("xy@@@")
        cy.get('input[type="radio"]').eq(1).check()
        cy.get('input[name="designation"]').type("Developer")
        cy.get('select[name="department"]').select("Project Manager")
        cy.get('input[name="email"]').type(faker.internet.email())
        cy.get('input[name="phoneNumber"]').type("9841162121")
        cy.get('input[type="file"]').attachFile("canon.png")
        cy.get('.user__profile--btn > .button__blue').click()


    })

    it("Add employee with invalid email",()=>{
        cy.visit("/employees?Search=")
        cy.get('.button__blue').click()
        cy.get('input[name="username"]').type("abccs")
        cy.get('input[type="radio"]').eq(1).check()
        cy.get('input[name="designation"]').type("Developer")
        cy.get('select[name="department"]').select("Project Manager")
        cy.get('input[name="email"]').type('a.@mailcom')
        cy.get('input[name="phoneNumber"]').type("9841162121")
        cy.get('input[type="file"]').attachFile("canon.png")
        cy.get('.user__profile--btn > .button__blue').click()
        cy.get(':nth-child(5) > .input__field > .error-message').should('have.text',"Invalid Email. Please provide a valid email")


    })
    it("Add employee with invalid email",()=>{
        cy.visit("/employees?Search=")
        cy.get('.button__blue').click()
        cy.get('input[name="username"]').type("abccs")
        cy.get('input[type="radio"]').eq(1).check()
        cy.get('input[name="designation"]').type("Developer")
        cy.get('select[name="department"]').select("Project Manager")
        cy.get('input[name="email"]').type('Hi!@gmail.com')
        cy.get('input[name="phoneNumber"]').type("9841162121")
        cy.get('input[type="file"]').attachFile("canon.png")
        cy.get('.user__profile--btn > .button__blue').click()
        cy.get(':nth-child(5) > .input__field > .error-message').should('have.text',"Invalid Email. Please provide a valid email")


    })
})