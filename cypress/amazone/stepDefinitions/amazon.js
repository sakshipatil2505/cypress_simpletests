const { Given,When,Then,And} = require("@badeball/cypress-cucumber-preprocessor")
import 'cypress-xpath';


Given("open link",()=>{
    cy.visit("https://www.amazon.in/")
})

When("sign in to the app",()=>{
    cy.get('#nav-signin-tooltip').click()
    cy.get("#ap_email").type("9689422505")
    cy.get('[type="submit"]').click()
    cy.get("#ap_password").type("sakshipatil2505")
    cy.get('[type="checkbox"]').check();
    cy.get("#signInSubmit").click()

})

Then("go to the products",()=>{
    cy.get("#twotabsearchtextbox").type("smartwatches for women branded")
    cy.get("#nav-search-submit-button").click()
})


Then("select the product",()=>{
    cy.xpath("(//div[@class='a-section aok-relative s-image-fixed-height'])[3]/..").invoke('attr', 'target', '_self').click();
})


Then("add product to wishList",()=>{
    cy.get("#wishListMainButton").click()
})


    