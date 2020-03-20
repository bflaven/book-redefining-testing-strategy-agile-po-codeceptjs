# testing the baseline on the frontoffice
# 02_wp_check_frontend_default_installation.feature
Feature: Check WordPress Frontend default installation.
In order to have confidence that my WordPress Frontend installation is reliable
As a user
I want to see the default WordPress site description

  Background: 
    Given I have a WordPress installation
    When I am on "/wp-login.php"
      Then I fill in "#user_login" with "admin"
      Then I fill in "#user_pass" with "admin"
      Then I press "#wp-submit"
      #And I press "Log In"
      Then I should be on "/wp-admin/"
      Then I should see "Dashboard"

  Scenario: A user access to the WP website (frontoffice)
     When I go to "/"
     Then I should be on the homepage
      And I should see "Just another WordPress site"