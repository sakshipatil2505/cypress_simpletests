
const {Given, When, Then ,And,After } = require("@badeball/cypress-cucumber-preprocessor");

Given("open url",()=>{
     cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
})

Then("open url in cypress at that page",()=>{
         
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
 
    cy.get("#opentab").invoke('removeAttr','target').click();

    cy.origin("https://www.qaclickacademy.com",()=>
    {
     cy.get("#navbarSupportedContent a[href*='about']").click();
     cy.get(".mt-50 h2").should('contain','QAClick Academy');

    })
})

