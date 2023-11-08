
const {Given, When, Then ,And,After } = require("@badeball/cypress-cucumber-preprocessor");
 
 Given("open the page",()=>{
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    cy.get("input.search-keyword").type("ca")
    cy.wait(2000)
    cy.get(".product").should("have.length",5)
    cy.get(".product:visible").should("have.length",4)
    cy.get(".products").find(".product").should ("have.length",4)
    cy.get(".products").find(".product").eq(1).contains("ADD TO CART").click()

    cy.get(".products").as("productLocator")
    cy.get("@productLocator").find(".product").each(($el,index,$list)=>{

    const textVeg =$el.find("h4.product-name").text()
    if(textVeg.includes("Cashews"))
    {
      cy.wrap($el).find("button").click()
    }
    })
 })

When("Go to cart",()=>{
  cy.get(".Cart-icon > img").click()
  cy.get("div.action-block").contains("PROCEED TO CHECKOUT").click()
  cy.contains("Place Order").click()
})