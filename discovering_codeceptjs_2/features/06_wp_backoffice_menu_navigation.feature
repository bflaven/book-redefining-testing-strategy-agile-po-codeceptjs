# 06_wp_backoffice_menu_navigation.feature
Feature: You can write and read blogs
In order to write and read blogs
As a valid user of the platform
I need to manage all my blog posts

  Background: 
    Given I have a vanilla wordpress installation
      | user_login | user_pass | user_email        | role          | 
      | admin      | admin     | bflaven@gmail.com | administrator | 
  
  Scenario: A valid user access to the platform and validate menu
     When I am on "/wp-login.php"
      Then I fill in "#user_login" with "admin"
      Then I fill in "#user_pass" with "admin"
      Then I press "#wp-submit"
      Then I should be on "/wp-admin/"
      Then I should see "Howdy, admin"
      Then The admin menu should appear as
      | NAME       | 
      | Dashboard  | 
      | Posts      | 
      | Journalists| 
      | Media      | 
      | Pages      | 
      | Comments   | 
      | Appearance | 
      | Plugins    | 
      | Users      | 
      | Tools      | 
      | Settings   | 