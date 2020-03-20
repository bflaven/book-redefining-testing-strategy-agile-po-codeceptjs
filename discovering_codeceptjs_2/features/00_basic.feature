#00_basic.feature
Feature: Gherkin minimum vitam rules
  In order to achieve my goals
  As a persona
  I want to be able to interact CPJS in Gherkin

 Background: 
    Given I have install "CPJS"

  Scenario: Say hello
     When I launch the feature "00_basic.feature"
     Then I must see "Hello CPJS Gherkin"
      And I must see "Ready to go for E2E"
