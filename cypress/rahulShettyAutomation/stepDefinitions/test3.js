
const {Given, When, Then ,And,After } = require("@badeball/cypress-cucumber-preprocessor");
 
Given("open given link",()=>{
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
})

Then("alert and confirm button",()=>{
    cy.get("#alertbtn").click()
    cy.get('[value="Confirm"]').click()
    cy.on("window:alert",(str)=>
{
    expect(str).to.equal("Hello , share this practice page and share your knowledge")
})
     cy.on("window.confirm",(str)=>
{
    expect(str).to.equal("Hello , Are you sure you want to confirm?")
})
})