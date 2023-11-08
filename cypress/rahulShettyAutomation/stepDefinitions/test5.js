 
const { Given, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given("open app by given link",()=>{
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
})

Then("handing the Web table",()=>{
     cy.get("tr td:nth-child(2)").each(($el, index, $list) => {

        const text = $el.text()

     if(text.includes("Python"))
        {
            cy.get("tr td:nth-child(2)").eq(index).next().then(function(price)
            {
            
     const pricetext = price.text()
     expect(pricetext).to.equal("25")
           
            })
        }
})
}) 

Then("handle the mouse hover", () => {
    cy.get('#mousehover').trigger('mouseover');
  });

Then("I should see two options",()=>{
    cy.get('a[href="#top"]').click({force:true}); 
})
  