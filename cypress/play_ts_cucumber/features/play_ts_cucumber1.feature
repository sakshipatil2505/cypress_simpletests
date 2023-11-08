Feature: User Authentication tests 

  Background:
   Given User navigates to theapplication
    And User click on login link 

  @smoke @reg
  Scenario: Login should be successful
     And User enter the username as "ortoni"
     And User enter the password as "Pass1234"
     When User click on the login button 
     Then Login should be successful

  @smoke @reg
  Scinario :Login should not be successful
     Given User enter the username as "koushik"
     Given User enter the password as "Passkoushik"
     When User click on the login button 
     But Logib should fail with

