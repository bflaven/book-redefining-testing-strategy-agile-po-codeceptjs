# testing the baseline on the frontoffice
# 01_wp_check_frontend_default_installation.feature
Feature: Check WordPress Frontend default installation.
In order to have confidence that my WordPress Frontend installation is reliable
As a user
I want to see the default WordPress site description

  Background: 
    Given I have a WordPress installation

  Scenario: A user access to the WP website (frontoffice)
     When I go to "/"
     Then I should be on the homepage
      And I should see "Just another WordPress site"