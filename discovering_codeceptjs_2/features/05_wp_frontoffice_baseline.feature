# 05_wp_frontoffice_baseline.feature
Feature: Checking website made with WordPress
In order to make sure this is a WordPress installation
As a user
I need to see the default WordPress site description

  Background: 
    Given I have a WordPress installation

  Scenario: A user access to the WP website (frontoffice)
     When I go to "/"
     Then I should be on the homepage
     And I should see "Just another WordPress site"
