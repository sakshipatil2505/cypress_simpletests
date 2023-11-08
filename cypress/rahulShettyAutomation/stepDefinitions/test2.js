
const {Given, When, Then ,And,After } = require("@badeball/cypress-cucumber-preprocessor");

Given("follow the link",()=>{
  cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
  cy.get("#checkBoxOption1").check().should("be.checked").and("have.value","option1")
  cy.get("#checkBoxOption1").uncheck().should("not.be.checked")
  cy.get("input[type='checkbox'").check(["option2","option3"])
})

When("select option from options",()=>{
  cy.get("select").select("option2").should("have.value","option2")

  cy.get('#autocomplete').type("Ind")

  cy.get(".ui-menu-item div").each(($el, index,$list) => {

    if($el.text()==="India")

    cy.wrap($el).click()
  })

cy.get("#autocomplete").should ("have.value","India")
})   

Then("we show visible and invisible element",()=>{
  cy.get("#displayed-text").should("be.visible")
  cy.get("#hide-textbox").click()
  cy.get("#displayed-text").should("not.be.visible")
  cy.get("#show-textbox").click()
  cy.get("#displayed-text").should("be.visible")
})

Then("radio button",()=>{
  cy.get("[value='radio3']").check().should("be.checked")
})
