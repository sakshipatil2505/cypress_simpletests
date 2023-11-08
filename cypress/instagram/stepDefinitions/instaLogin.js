
const {Given , When, And, Then } = require("@badeball/cypress-cucumber-preprocessor");
import 'cypress-xpath';

Given("open instagram application",()=>{
    cy.visit("https://www.instagram.com")
})
When("open",()=>{
    cy.get('.x1q0g3np.x1oa3qoh > :nth-child(1) > .x1i10hfl').click()
})

Then("I login as following",()=>{
    cy.get("[name=username]").type("sakshipatil3702")
    cy.get("[name=password]").type("sakshipatil2505")
})

Then("click on the Log in button",()=>{
    cy.xpath('//button[@type="submit"]').click();
})

Then("click on the backup code",()=>{
    cy.get 
})




// datatable.hashes().forEach(element =>{
//     cy.get("[name=username]").type(element.username) 
//     cy.get("[name=password]").type(element.password)