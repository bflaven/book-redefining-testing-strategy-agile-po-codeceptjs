# 07_wp_backoffice_menu_navigation.feature
Feature: You can write and read blogs
In order to write and read blogs
As a valid user of the platform
I need to manage all my blog posts

  Background: 
    Given I have a vanilla wordpress installation
      | user_login | user_pass | user_email        | role          | 
      | admin      | admin     | bflaven@gmail.com | administrator | 
  
  Scenario: A valid user access to the platform and validate
     When I am on "/wp-login.php"
     Then I fill in "#user_login" with "admin"
     Then I fill in "#user_pass" with "admin"
     Then I press "#wp-submit"
  #And I press "Log In"
     Then I should be on "/wp-admin/"
     Then I should see "Howdy, admin"
     Then The admin menu should appear as follow, be clickable and check the title
      | NAME        | URL                                      | TITLE                                          | 
      | Dashboard   | /wp-admin/index.php                      | Dashboard ‹ codecept_test_site — WordPress     | 
      | Posts       | /wp-admin/edit.php                       | Posts ‹ codecept_test_site — WordPress         | 
      | Journalists | /wp-admin/edit.php?post_type=journalists | Journalists ‹ codecept_test_site — WordPress   | 
      | Media       | /wp-admin/upload.php                     | Media Library ‹ codecept_test_site — WordPress | 
      | Pages       | /wp-admin/edit.php?post_type=page        | Pages ‹ codecept_test_site — WordPress         | 
  # | Comments    | /wp-admin/edit-comments.php              | Dashboard   |
  # | Appearance  | /wp-admin/themes.php                     | Dashboard   |
  # | Plugins     | /wp-admin/plugins.php                    | Dashboard   |
  # | Users       | /wp-admin/users.php                      | Dashboard   |
  # | Tools       | /wp-admin/tools.php                      | Dashboard   |
  # | Settings    | /wp-admin/options-general.php            | Dashboard   |
  
  
