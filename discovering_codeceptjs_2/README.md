## Redefining a testing automation strategy for a P.O? Introduction to CodeceptJS (codecept.io), a End 2 End Testing framework. Usecase with WordPress.

**This file is designed to facilitate understanding and eventual cut-paste for code chunks appearing in chapter "1 Pioneer or Basic Level" of the book "Defining a testing automation strategy for a P.O. with CODECEPTION_ & WordPress"**


## Commmands from the book


```bash
cd /Users/brunoflaven/Documents/02_copy/_discovering_codeceptjs_2/
```


```bash
npm install codeceptjs puppeteer --save-dev
```



```bash
npx codeceptjs init
```

```javascript
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      // url: 'http://localhost',
      url: 'http://codecept.mydomain.priv/wordpress/',
      show: true
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: '_discovering_codeceptjs_2'
}
```

```bash
# be sure to be in the correct directory where you install CPJS
cd /Users/brunoflaven/Documents/02_copy/_discovering_codeceptjs_2/


# The name of the future file first_test_codeceptjs_1
npx codeceptjs gt
```


```javascript
// first_test_codeceptjs_1_test.js
Feature('First test_codeceptjs_1');
Scenario('test something', (I) => {

});

```

```bash
# Using filename test_codeceptjs_3 and giving a different name for the feature "Beginning CPJS"
npx codeceptjs gt 

```

```javascript
// test_codeceptjs_3_test.js

Feature('Beginning CPJS');

Scenario('test something', (I) => {

});

```

```javascript 

// Call with command: npx codeceptjs run --steps --grep "@starting"
Feature('Beginning CPJS 1 @starting');
Scenario('test something 1', (I) => {
    I.say('tag @starting');
});

// Call with command: npx codeceptjs run --steps --grep "@expert"
Feature('Beginning CPJS 2 @expert');
Scenario('test something 2', (I) => {
      I.say('tag @expert');
});

// Call with command: npx codeceptjs run --steps --grep "@advanced"
// Call with command: npx codeceptjs run --steps --grep "@important"

Feature('Beginning CPJS 3');
Scenario('test something again 3', (I) => {
      I.say('tag @advanced');
}).tag('@advanced').tag('important');


```

```bash 

npx codeceptjs run --steps --grep "@starting"

npx codeceptjs run --steps --grep "@expert"

npx codeceptjs run --steps --grep "@advanced"

npx codeceptjs run --steps --grep "important"

```



```bash 
# Go to your dir
cd /Users/brunoflaven/Documents/02_copy/_discovering_codeceptjs_2/

# Run all the tests with step-by-step output
npx codeceptjs run --steps

# Run the specific file test_codeceptjs_3_test.js with step-by-step output
npx codeceptjs run --steps test_codeceptjs_3_test.js

# Run the specific file test_codeceptjs_3_test.js with step-by-step output and verbose mode
npx codeceptjs run --steps --verbose test_codeceptjs_3_test.js

# Run the specific file test_codeceptjs_3_test.js with debug mode for more detailed output and tag
npx codeceptjs run --steps --debug --grep "@starting" test_codeceptjs_3_test.js

# Run the specific file test_codeceptjs_3_test.js with verbose mode for very detailed output and tag
npx codeceptjs run --steps --verbose --grep "@starting" test_codeceptjs_3_test.js

```


```bash
# add for the testing session
127.0.0.1 codecept.mydomain.priv


# add for the testing session
127.0.0.1 wp.codecept.flaven.fr.priv

# add for the testing session
127.0.0.1 wp.flaven.fr.priv
```

```bash 
sudo -s
#get the password for admin
vi /etc/hosts
```

``` ruby
# testing the baseline on the frontoffice
# wp_check_frontend_default_installation_site_description.feature
Feature: Check WordPress Frontend default installation.
In order to have confidence that my WordPress Frontend installation is reliable
As a user, I want to see the default WordPress site description

  Background: 
    Given I have a WordPress installation
  
  Scenario: A user access to the WP website (frontoffice)
     When I go to "/"
     Then I should be on the homepage
      And I should see "Just another WordPress site"

```


```bash
# Go to your dir
cd /Users/brunoflaven/Documents/02_copy/_discovering_codeceptjs_2/

# Using filename test_codeceptjs_4 and giving a different name for the feature "Testing Local WordPress Website"
npx codeceptjs gt
```

```javascript 
/*
cd /Users/brunoflaven/Documents/02_copy/_discovering_codeceptjs_2/

npx codeceptjs run --steps test_codeceptjs_4_test.js
npx codeceptjs run --steps --verbose test_codeceptjs_4_test.js


npx codeceptjs run --steps --grep "@starting" test_codeceptjs_4_test.js
npx codeceptjs run --steps --verbose --grep "@starting" test_codeceptjs_4_test.js

*/


Feature('Testing Local WordPress Website @starting');
Scenario('Ensure I have the WP default baseline correct', (I) => {
    I.amOnPage('http://codecept.mydomain.priv/wordpress/');
    I.see('Just another WordPress site');
});

```


```bash
# Run the specific file
npx codeceptjs run --steps test_codeceptjs_4_test.js
```

```javascript 
Feature('Testing Local WordPress Website @starting');

Scenario('Ensure I have the WP default baseline correct', (I) => {

    I.amOnPage('http://codecept.mydomain.priv/wordpress/');

    // Correct
    //I.see('Just another WordPress site');

    // False
    I.see('No more WordPress application');

});

```

```bash
# Run the specific file with the wrong baseline
npx codeceptjs run --steps test_codeceptjs_4_test.js

# Run the specific file with the wrong baseline with more output
npx codeceptjs run --steps --verbose test_codeceptjs_4_test.js


```


```php
$I->comment('Backoffice :: enter username and password for WP'); 
```


```javascript 
I.say('Backoffice :: enter username and password for WP');
```

```javascript 
Feature('Testing Local WordPress Website @starting');

Scenario('Ensure I have the WP default baseline correct', (I) => {

  I.say('\n --- Frontoffice :: access to the local WP');
    I.amOnPage('http://codecept.mydomain.priv/wordpress/');

    // Correct
    I.see('Just another WordPress site');

    // False
    // I.see('No more WordPress application');

});
```

```javascript 
helpers: {
    Puppeteer: {
      // url: 'http://localhost',
      url: 'http://codecept.mydomain.priv/wordpress/',
      show: false, // true, false to intitiate the browser  
      disableScreenshots: true, // don't save screenshot on failure.
      uniqueScreenshotNames: true, // option to prevent screenshot override if you have scenarios with the same name in different suites.
      fullPageScreenshots: true, // make full page screenshots on failure.
      keepBrowserState: true, //keep browser state between tests when restart set to false.
      restart: false, // restart browser between tests.
      keepCookies: true, // keep cookies between tests when restart set to false.
      waitForAction: 500, // (optional) how long to wait after click, doubleClick or PressKey actions in ms. Default: 500.
      windowSize: '1280x960' // (optional) default window size. Set a dimension like 640x480.
    }
  },
```


```javascript 
"restart": false,
"keepCookies": true
```



```bash
npx --version
npx codeceptjs --version
npx codeceptjs info

# Carfull with the update command, some scripts may not work due to change in the core functions of CPJS
npx codeceptjs update
```



```javascript
I.checkOption('#agree');
I.checkOption('I Agree to Terms and Conditions');
I.checkOption('agree', '//form');
```

```javascript
I.selectOption('Choose Plan', 'Monthly'); // select by label
I.selectOption('subscription', 'Monthly'); // match option by text
I.selectOption('subscription', '0'); // or by value
I.selectOption('//form/select[@name=account]','Premium');
I.selectOption('form select[name=account]', 'Premium');
I.selectOption({css: 'form select[name=account]'}, 'Premium');
```


```javascript
I.selectOption('Which OS do you use?', ['Android', 'iOS']);
```



```javascript

// use of grabTextFrom
let label_username_email_address = await I.grabTextFrom('//*[@id="loginform"]/p[1]/label');
I.say(' label_username_email_address :: '+label_username_email_address+'');


// use of grabAttributeFrom
I.fillField({css: '#user_login'}, LOGIN_USERNAME);
let grab_login_username = await I.grabAttributeFrom('#user_login', 'value');
I.say(' grab_login_username :: '+grab_login_username+'');



```


```bash
# Go to the directory
cd /Users/brunoflaven/Documents/02_copy/_discovering_codeceptjs_2/

# Make the directories top store data
mkdir _data
mkdir _data/config # will store data e.g translations...etc
mkdir _data/pictures # will store pictures
 
touch _data/config/config_values_codecept.js

# In _data/pictures, I will cut and paste my 2 pictures....
# cobweb_with_raindrops.jpg, southern_hawker_golden_ringed_dragonfly.jpg
```


``` ruby
# login to the backend & create a Post.
# wp_login_backoffice_create_post.feature
Feature: Check Login and WordPress Simple Post Creation.
  In order to have confidence that Simple Post Creation is reliable
  As an admin
  I want to login, create and publish a simple Post

  Background: 
    Given I have a vanilla wordpress installation
      | user_login | user_pass | user_email     | role          | 
      | admin      | admin     | admin@test.com | administrator | 
  
  Scenario: A valid user access to the platform and create a post
     When I am on "/wp-login.php"
     Then I fill in "#user_login" with "admin"
     Then I fill in "#user_pass" with "admin"
     Then I press "#wp-submit"
     Then I should be on "/wp-admin/"
     Then I should see "Howdy, admin"
     Then I should click on "Posts"
     Then I should click on "Add New"
     Then I should be on "/wp-admin/post-new.php"
     Then I fill in "#title" with ""<startDateString>" Test title article codeceptJS "<RandomString>""
     Then I fill in "#content" with ""<startDateString>" Test content article codeceptJS "<RandomString>""
      Then I press "Publish"
      Then I press "View post"
     Then I should see "Test content article codeceptJS" 
  
```

```javascript
/* Random string */
let RandomString=Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

/* Date */
let startDate = new Date();
let startDateString = startDate.toString();
```


```javascript
// extract for `test_codeceptjs_6_a_test.js`

/* CONSTANTS */
const LOGIN_USERNAME = 'admin';
const LOGIN_PASSWORD = 'admin';
const DASHBOARD_H1 = 'Dashboard';

// Settings Backoffice
const GENERAL_SETTINGS_H1 = 'General Settings';
const GENERAL_BLOGNAME_VALUE = 'codecept_test_site';
const GENERAL_BLOGDESCRIPTION_VALUE = 'Just another WordPress site';
const GENERAL_SITEURL_VALUE = 'http://codecept.mydomain.priv/wordpress';
const GENERAL_HOME_VALUE = 'http://codecept.mydomain.priv/wordpress';
const GENERAL_NEW_ADMIN_EMAIL_VALUE = 'admin@test.com';

const WRITING_SETTINGS_H1='Writing Settings';
const READING_SETTINGS_H1='Reading Settings';


// Post Backoffice

const POSTS_LINK_LABEL='Posts';
const POST_NEW_LABEL='Add New';
const POST_NEW_TITLE='Add New Post';
const POST_VIEW_POST_LABEL='View Post';
```



```javascript
// extract for `test_codeceptjs_6_a_test.js`
  // I.fillField({css: '#user_pass'}, LOGIN_PASSWORD);
  I.fillField({css: '#user_pass'}, secret(LOGIN_PASSWORD));
```


```javascript
// extract for `test_codeceptjs_6_a_test.js`
    /* extract from */

    let label_username_email_address = await I.grabTextFrom('//*[@id="loginform"]/p[1]/label');

    I.say(' label_username_email_address :: '+label_username_email_address+'');

```




```javascript
// extract for `test_codeceptjs_6_a_test.js`
    /* extract from */

    I.fillField({css: '#user_login'}, LOGIN_USERNAME);
    let grab_login_username = await I.grabAttributeFrom('#user_login', 'value');

    I.say(' grab_login_username :: '+grab_login_username+'');

```


```javascript
/**
 * This file is part of the book package: "Redefining a test strategy for a P.O? Introduction to CodeceptJS (codecept.io), a End 2 End Testing framework. Usecase with WordPress."
 *
 * (c) Bruno Flaven <info@flaven.fr>
 * 
 * Intended to test a FRONTOFFICE and BACKOFFICE made with WP
 *
 * @package Codeception WordPress Testing 
 * @subpackage BACKOFFICE
 * @since codeceptVersion: 2.3.6, nodeInfo: 12.8.0, WordPress: 5.2.3, npx: 6.13.1
 */
/*
NOTE: *** MAKE IT WORK ***
cd /Users/brunoflaven/Documents/02_copy/_discovering_codeceptjs_2/

npx codeceptjs run --steps test_codeceptjs_6_test.js
npx codeceptjs run --steps --verbose test_codeceptjs_6_test.js


npx codeceptjs run --steps --grep "@post" test_codeceptjs_6_test.js
npx codeceptjs run --steps --verbose --grep "@post" test_codeceptjs_6_test.js

 */ 

/* String */
let RandomString=Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

/* Date */
let startDate = new Date();
let startDateString = startDate.toString();

/* CONSTANTS */
const LOGIN_USERNAME = 'admin';
const LOGIN_PASSWORD = 'admin';
const DASHBOARD_H1 = 'Dashboard';

// Settings Backoffice
const GENERAL_SETTINGS_H1 = 'General Settings';
const GENERAL_BLOGNAME_VALUE = 'codecept_test_site';
const GENERAL_BLOGDESCRIPTION_VALUE = 'Just another WordPress site';
const GENERAL_SITEURL_VALUE = 'http://codecept.mydomain.priv/wordpress';
const GENERAL_HOME_VALUE = 'http://codecept.mydomain.priv/wordpress';
const GENERAL_NEW_ADMIN_EMAIL_VALUE = 'admin@test.com';

const WRITING_SETTINGS_H1='Writing Settings';
const READING_SETTINGS_H1='Reading Settings';


// Post Backoffice

const POSTS_LINK_LABEL='Posts';
const POST_NEW_LABEL='Add New';
const POST_NEW_TITLE='Add New Post';
const POST_VIEW_POST_LABEL='View Post';



// @general @writing
Feature('Backoffice :: ensure that I can login and publish a post @post @creation');
Scenario('Check WP Backoffice Post creation', async (I) => {
    
  I.say("\n--- LOGIN");
  I.amOnPage('wp-login.php');
  I.say('Backoffice :: enter username and password for WP');
  I.fillField({css: '#user_login'}, LOGIN_USERNAME);
  // I.fillField({css: '#user_pass'}, LOGIN_PASSWORD);
  I.fillField({css: '#user_pass'}, secret(LOGIN_PASSWORD));
  I.click('Log In','//*[@id="wp-submit"]');
  I.seeInCurrentUrl('/wp-admin/');
  I.see(DASHBOARD_H1, 'h1');

    I.say('\n--- POST');

    // Add a post
    I.click(POSTS_LINK_LABEL);
    
    I.click(POST_NEW_LABEL);
    I.see(POST_NEW_TITLE);
    // Check I am on /wp-admin/post-new.php
    I.seeInCurrentUrl('/wp-admin/post-new.php');

    // Add a title for Post
    I.fillField('#title', ' '+startDateString+' Test title article codeceptJS '+RandomString+' '); 

    // Add a content for Post
    I.fillField('#content', ''+startDateString+' Test content article codeceptJS '+RandomString+' ');

    // Publish
    I.click('#publish');
    I.click(POST_VIEW_POST_LABEL);

    // Post with no plugin
    I.see('Test content article codeceptJS');
});


Scenario('Backoffice :: ensure that I can debug @debug', async (I) => {

    I.say("\n--- LOGIN");
    I.amOnPage('wp-login.php');
    I.say('Backoffice :: enter username and password for WP');
    
    let label_username_email_address = await I.grabTextFrom('//*[@id="loginform"]/p[1]/label');

    I.fillField({css: '#user_login'}, LOGIN_USERNAME);
    let grab_login_username = await I.grabAttributeFrom('#user_login', 'value');

    I.say("\n###\n");
    I.say('--- HARD DEBUG');
    I.say(' label_username_email_address :: '+label_username_email_address+'');
    I.say(' grab_login_username :: '+grab_login_username+'');
    I.say("\n###\n");

    // The password will be shown in clear
    // I.fillField({css: '#user_pass'}, LOGIN_PASSWORD);
    
    // Let have the password secret
    I.fillField({css: '#user_pass'}, secret(LOGIN_PASSWORD));

    I.click('Log In','//*[@id="wp-submit"]');
    I.seeInCurrentUrl('/wp-admin/');
    I.see(DASHBOARD_H1, 'h1');      
});

```



```javascript
/* version 1 */
let globalData = require('./_data/config/config_values_codecept.js');
```

```php

// Examples in PHP for including a file.
include ('relative_path_to_the_file/filename.php');
require ('relative_path_to_the_file/filename.php');
include_once ('relative_path_to_the_file/filename.php');

/* 
 * Extract from the code made with CP in PHP from "Defining a test strategy for a P.O? Introduction to a "testing" framework CODECEPTION_. Usecase with WordPress."
*/

// Set the languages
include_once('tests/_data/languages/en.php');


```

```javascript
/*
  * constants declared directly
  * inside test_codeceptjs_6_b_test.js
*/

/* String */
let RandomString=Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

/* Date */
let startDate = new Date();
let startDateString = startDate.toString();

/* CONSTANTS */
const LOGIN_USERNAME = 'admin';
const LOGIN_PASSWORD = 'admin';
const DASHBOARD_H1 = 'Dashboard';

/* to be continued */
```

```javascript
/*
  * propreties of the object `globalData`
  * inside config_values_codecept.js
*/
    module.exports = {

        /* String */
        RandomString:''+Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)+'',

        /* Date */
        startDateString: ''+ new Date().toString() +'',


        // Login
        LOGIN_USERNAME: 'admin',
        LOGIN_PASSWORD: 'admin',
        DASHBOARD_H1: 'Dashboard',

        /* to be continued */

    }

```


```javascript
/* 
  * Way 1 to access to a property of an object in 
  $ objectName.propertyName

  * Way 2 to access to a property of an object in JavaScript
  * objectName["propertyName"]
*/

Scenario('Backoffice :: ensure that I can debug @debug', async (I) => {

    I.say("\n###\n");
    I.say('--- HARD DEBUG');
    I.say("\n");    
    I.say('globalData.LOGIN_USERNAME => '+globalData.LOGIN_USERNAME+'');
    I.say('globalData["LOGIN_USERNAME"] => '+ globalData["LOGIN_USERNAME"]+'');
    I.say("\n");
    I.say(''+globalData.LOGIN_PASSWORD+'');
    I.say(''+globalData.DASHBOARD_H1+'');
    I.say(''+globalData.GENERAL_SETTINGS_H1+'');
    I.say(''+globalData.GENERAL_BLOGNAME_VALUE+'');
    I.say(''+globalData.GENERAL_BLOGDESCRIPTION_VALUE+'');
    I.say(''+globalData.GENERAL_SITEURL_VALUE+'');
    I.say(''+globalData.GENERAL_HOME_VALUE+'');
    I.say(''+globalData.WRITING_SETTINGS_H1+'');
    I.say(''+globalData.READING_SETTINGS_H1+'');
    I.say(''+globalData.GENERAL_NEW_ADMIN_EMAIL_VALUE+'');
    I.say(''+globalData.POSTS_LINK_LABEL+'');
    I.say(''+globalData.POST_NEW_LABEL+'');
    I.say(''+globalData.POST_NEW_TITLE+'');
    I.say(''+globalData.POST_VIEW_POST_LABEL+'');
    I.say(''+globalData.RandomString+'');
    I.say("\n###\n");
});

```

```javascript

include: {
    I: './steps_file.js',
    /* 
      * to inject the properties for globalData object 
      * e.g. `objectName.propertyName` or `objectName["propertyName 
    */
    globalData: './_data/config/config_values_codecept.js'
  },

```

```javascript
/* Config V2 */
/* 
      * to inject the properties for globalData object 
      * e.g. `objectName.propertyName` or `objectName["propertyName 
    */
const { globalData } = inject();
```


```ruby
# login to the backend & testing the Wordpress settings.
# wp_check_backoffice_wordpress_general_settings_and_writing_settings.feature
Feature: Check Login and WordPress General Settings and Writing Settings.
  In order to have confidence that my WordPress installation is reliable
  As an admin
  I want to login, check default values for WordPress General Settings and Writing Settings


  Background: 
    Given I have a vanilla wordpress installation
      | user_login | user_pass | user_email     | role          | 
      | admin      | admin     | admin@test.com | administrator | 
  
  Scenario: A valid user access to the platform 
  and check the general settings, check writing settings
     When I am on "/wp-login.php"
     Then I fill in "#user_login" with "admin"
     Then I fill in "#user_pass" with "admin"
     Then I press "#wp-submit"
     Then I should be on "/wp-admin/"
     Then I should see "Dashboard"
     Then I should click on "Settings"
     Then I should be on "/wp-admin/options-general.php"
     Then I should see "General Settings"
  # start to test the fields on after the other
     Then I should see the general settings following values
      | LABEL                        | LOCATOR               | VALUE                                     | 
      | Site Title                   | "#blogname"           | "codecept_test_site"                      | 
      | Tagline                      | "#blogdescription"    | "Just another WordPress site"             | 
      | WordPress Address (URL)      | "#siteurl"            | "http://codecept.mydomain.priv/wordpress" | 
      | Site Address (URL)           | "#home"               | "http://codecept.mydomain.priv/wordpress" | 
      | Administration Email Address | "#new_admin_email"    | "admin@test.com"                          | 
      | Membership                   | "#users_can_register" | 0                                         | 
      | New User Default Role        | "#default_role"       | Subscriber                                | 
      | Week Starts On               | "#start_of_week"      | Monday                                    | 
     Then I should click on "Writing"
     Then I should be on "/wp-admin/options-writing.php"
     Then I should see "Writing Settings"
  # start to test the fields on after the other
     Then I should see the general settings following values
      | LABEL                 | LOCATOR                   | VALUE               | 
      | Default Post Category | "#default_category"       | "Uncategorized"     | 
      | Default Post Format   | "#default_post_format"    | "Standard"          | 
      | Mail Server           | "#mailserver_url"         | "mail.example.com"  | 
      | Mail Server Port      | "#mailserver_port"        | "110"               | 
      | Login Name            | "#mailserver_login"       | "login@example.com" | 
      | Password              | "#mailserver_pass"        | "password"          | 
      | Default Mail Category | "#default_email_category" | "Uncategorized"     | 

# to be continued for all the settings Reading, Discussion, Media, Permalinks... etc.
```

```javascript

        /* version 1 */
        // Check Site Title
        I.seeInField('//*[@id="blogname"]', globalData.GENERAL_BLOGNAME_VALUE);
        
        /* version 2 */
        // Check Site Title
        I.say("\n\n--- version 2 --- Check Site Title ---\n\n");
        const general_blogname_value = await I.grabAttributeFrom('//*[@id="blogname"]', 'value');
        I.say("--- DEBUG :: general_blogname_value :: string = "+general_blogname_value+", length = "+general_blogname_value.length+" ");
        assert.equal(general_blogname_value, globalData.GENERAL_BLOGNAME_VALUE);
        assert.equal(general_blogname_value.length, 18);
        I.say("\n\n--- // version 2 --- Check Site Title ---\n\n");
```

```javascript
const default_role = await I.grabTextFrom('//*[@id="default_role"]/option[1]');

    I.say("--- DEBUG :: select[name=default_role] :: string = "+default_role+" length = "+default_role.length+" ");
    // assert.equal(default_role, 'Subscriber');
    //assert.equal(default_role.length, 10);

    assert.equal(default_role, globalData.MEMBERSHIP_DEFAULT_ROLE);
    assert.equal(default_role.length, globalData.MEMBERSHIP_DEFAULT_ROLE_LENGTH);

    const start_of_week = await I.grabTextFrom('select[name=start_of_week] option:nth-child(2)');
    // This prints the value selected
    I.say("--- DEBUG :: select[name=start_of_week] :: string = "+start_of_week+" length = "+start_of_week.length+" ");
    // assert.equal(start_of_week, 'Monday');
    // assert.equal(start_of_week.length, 6);

    assert.equal(start_of_week, globalData.MEMBERSHIP_START_OF_WEEK);
    assert.equal(start_of_week.length, globalData.MEMBERSHIP_START_OF_WEEK_LENGTH);
```

```javascript
/* Add the values inside config_values_codecept.js */
// Membership

// make it fails
// MEMBERSHIP_DEFAULT_ROLE:'Subscriber mistake',
MEMBERSHIP_DEFAULT_ROLE:'Subscriber',
MEMBERSHIP_DEFAULT_ROLE_LENGTH:10,

MEMBERSHIP_START_OF_WEEK:'Monday',
MEMBERSHIP_START_OF_WEEK_LENGTH:6,
```

```javascript

const { globalData } = inject();

/* REQUIREMENTS */
let assert = require('assert');


// @general @writing
Feature('Backoffice :: ensure that I can check and change General Settings @settings @general');
Scenario('Check WP Backoffice', async (I) => {

      I.say("\n--- LOGIN");
      I.amOnPage('wp-login.php');
      I.say('Backoffice :: enter username and password for WP');
      I.fillField({css: '#user_login'}, globalData.LOGIN_USERNAME);
      I.fillField({css: '#user_pass'}, globalData.LOGIN_PASSWORD);
      I.click(globalData.LOGIN_BTN_LABEL,'//*[@id="wp-submit"]');
      I.seeInCurrentUrl('/wp-admin/');
      I.see(globalData.DASHBOARD_H1, 'h1');


      I.say("\n--- SETTING");
      I.click('//*[@id="menu-settings"]/a/div[3]');
      // Check I am on /wp-admin/options-general.php
      I.seeInCurrentUrl('/wp-admin/options-general.php');
      // See General Settings
      I.see(globalData.GENERAL_SETTINGS_H1, '#wpbody-content > div.wrap > h1');

        /* version 1 */
        // Check Site Title
        I.seeInField('//*[@id="blogname"]', globalData.GENERAL_BLOGNAME_VALUE);


        /* version 2 */
        // Check Site Title
        I.say("\n\n--- version 2 --- Check Site Title ---\n\n");
        const general_blogname_value = await I.grabAttributeFrom('//*[@id="blogname"]', 'value');
        I.say("--- DEBUG :: general_blogname_value :: string = "+general_blogname_value+", length = "+general_blogname_value.length+" ");
        assert.equal(general_blogname_value, globalData.GENERAL_BLOGNAME_VALUE);
        assert.equal(general_blogname_value.length, 18);
        I.say("\n\n--- // version 2 --- Check Site Title ---\n\n");

    
      // Check Tagline
      I.seeInField('//*[@id="blogdescription"]', globalData.GENERAL_BLOGDESCRIPTION_VALUE);
      // Check WordPress Address (URL)  
      I.seeInField('//*[@id="siteurl"]',globalData.GENERAL_SITEURL_VALUE);
      // Check Site Address (URL) 
      I.seeInField('//*[@id="home"]', globalData.GENERAL_HOME_VALUE);
      // Check Email Address
      I.seeInField('//*[@id="new_admin_email"]', globalData.GENERAL_NEW_ADMIN_EMAIL_VALUE);

      I.say("\n--- MEMBERSHIP");
      //  Membership
      // Anyone can register, the answer is NO
        I.dontSeeCheckboxIsChecked('#users_can_register');

    // Anyone can register, the answer is Yes
    // I.seeCheckboxIsChecked('#users_can_register');

    /*
    Test against Administrator
    //*[@id="default_role"]
    Subscriber
  */
    
    
    const default_role = await I.grabTextFrom('//*[@id="default_role"]/option[1]');

    I.say("--- DEBUG :: select[name=default_role] :: string = "+default_role+" length = "+default_role.length+" ");
    // assert.equal(default_role, 'Subscriber');
    //assert.equal(default_role.length, 10);

    assert.equal(default_role, globalData.MEMBERSHIP_DEFAULT_ROLE);
    assert.equal(default_role.length, globalData.MEMBERSHIP_DEFAULT_ROLE_LENGTH);

    const start_of_week = await I.grabTextFrom('select[name=start_of_week] option:nth-child(2)');
    // This prints the value selected
    I.say("--- DEBUG :: select[name=start_of_week] :: string = "+start_of_week+" length = "+start_of_week.length+" ");
    // assert.equal(start_of_week, 'Monday');
    // assert.equal(start_of_week.length, 6);

    assert.equal(start_of_week, globalData.MEMBERSHIP_START_OF_WEEK);
    assert.equal(start_of_week.length, globalData.MEMBERSHIP_START_OF_WEEK_LENGTH);


    

    I.say("\n--- WRITING SETTINGS");
    I.say('ensure that I can check and change Writing Settings');

    // Click on Writing Settings
    I.say("--- Check if I am on the page for Writing Settings");
    I.click('//*[@id="menu-settings"]/ul/li[3]/a');
    // Check I am on /wp-admin/options-writing.php
    I.seeInCurrentUrl('/wp-admin/options-writing.php');

    // See Writing Settings
    I.see(globalData.WRITING_SETTINGS_H1, '#wpbody-content > div.wrap > h1');


    // Default Post Category
     I.say("--- Check the value for Dropdown Default Post Category");
    // const default_category = await I.grabTextFrom('//*[@id="default_category"]/option');
    const default_category = await I.grabTextFrom('//*[@id="default_category"]/option[10]');
    I.say('--- DEBUG :: select[name=default_category] :: '+default_category+'');
    // Uncategorized
    assert.equal(default_category, 'Uncategorized');
    assert.equal(default_category.length, 13);

    // Default Post Format
    I.say("--- Check the value for Dropdown Default Post Format");
    const default_post_format = await I.grabTextFrom('//*[@id="default_post_format"]/option[1]');
    I.say('--- DEBUG :: select[name=default_post_format] :: '+default_post_format+'');
    // Standard
    assert.equal(default_post_format, 'Standard');
    assert.equal(default_post_format.length, 8);



    /* Post via email */
    I.say("--- Check the values for Post via email");

    // Post via email
    const mailserver_url = await I.grabAttributeFrom('input[name=mailserver_url]', 'value');
    I.say('--- DEBUG :: select[name=mailserver_url] :: '+mailserver_url+'');
    I.seeInField('//*[@id="mailserver_url"]', mailserver_url);

    const mailserver_port = await I.grabAttributeFrom('input[name=mailserver_port]', 'value');
    I.say('--- DEBUG :: select[name=mailserver_port] :: '+mailserver_port+'');
    I.seeInField('//*[@id="mailserver_port"]', mailserver_port);

    const mailserver_login = await I.grabAttributeFrom('input[name=mailserver_login]', 'value');
    I.say('--- DEBUG :: select[name=mailserver_login] :: '+mailserver_login+'');
    I.seeInField('//*[@id="mailserver_login"]', mailserver_login);

    const mailserver_pass = await I.grabAttributeFrom('input[name=mailserver_pass]', 'value');
    I.say('--- DEBUG :: select[name=mailserver_pass] :: '+mailserver_pass+'');
    I.seeInField('//*[@id="mailserver_pass"]', mailserver_pass);


    // Default Mail Category
    I.say("--- Check the value for Dropdown Default Mail Category ");
    

    const default_email_category = await I.grabTextFrom('//*[@id="default_email_category"]/option[10]');
    const default_email_category_values = await I.grabTextFrom('select[name=default_email_category]');

    // const default_email_category = await I.grabTextFrom('//*[@id="default_email_category"]/option');

    // This prints the value selected
    I.say('--- DEBUG :: //*[@id="default_email_category"]/option[10] :: label = '+default_email_category+' length = '+default_email_category.length+'');

    // Uncategorized
    assert.equal(default_email_category, 'Uncategorized');
    assert.equal(default_email_category.length, 13);
    

    // I.say('--- DEBUG :: select[name=default_email_category] :: label = '+default_email_category_values+' length = '+default_email_category_values.length+' ');
    // 
    

});

```

```php
// General
    public function checkOptionsGeneral (AcceptanceTester $I)
    {
                $I->wantTo('Backoffice :: ensure that I can check and change General Settings');
                /* LOGIN */
                $I->comment("\n--- LOGIN");

                //Go to the login
                $I->amGoingTo('to pass the login page');
                $I->amOnPage('/wp-login.php');
                $I->comment('Backoffice :: enter username and password for WP');
                $I->fillField('#user_login', LOGIN_USERNAME);
                $I->fillField('#user_pass', LOGIN_PASSWORD);
                $I->click('//*[@id="wp-submit"]');

                // Go to the Admin page
                $I->expect('to be connected and I can access to the WP dashboard');
                $I->amOnPage('/wp-admin/');
                $I->see(DASHBOARD_H1);


                $I->comment("\n--- SETTING");
                // SETTING
                # Check some values from http://project.test/wordpress/wp-admin/options-general.php
                # Click on Settings
                $I->click('//*[@id="menu-settings"]/a/div[3]');
                # Check I am on /wp-admin/options-general.php
                $I->amOnPage('/wp-admin/options-general.php');
                # See General Settings
                $I->see(GENERAL_SETTINGS_H1, '#wpbody-content > div.wrap > h1');


                # SOURCE : https://codeception.com/docs/modules/PhpBrowser
                // Update and Check
                # //*[@id="blogname"] # codecept_test_site
                # //*[@id="blogdescription"] # Just another WordPress site
                # //*[@id="siteurl"] # http://codecept.mydomain.priv/wordpress
                # //*[@id="home"] # http://codecept.mydomain.priv/wordpress
                # //*[@id="new_admin_email"] # admin@test.com

                # Check Site Title
                $I->seeInField('//*[@id="blogname"]', GENERAL_BLOGNAME_VALUE);
                # Check Tagline
                $I->seeInField('//*[@id="blogdescription"]', GENERAL_BLOGDESCRIPTION_VALUE);
                # Check WordPress Address (URL) 
                $I->seeInField('//*[@id="siteurl"]', GENERAL_SITEURL_VALUE);
                # Check Site Address (URL)  
                $I->seeInField('//*[@id="home"]', GENERAL_HOME_VALUE);
                # Check Email Address
                $I->seeInField('//*[@id="new_admin_email"]', GENERAL_NEW_ADMIN_EMAIL_VALUE);


                # Membership
                # Anyone can register, the answer is NO
                $I->dontSeeCheckboxIsChecked('#users_can_register');

                # Anyone can register, the answer is Yes
                // $I->seeCheckboxIsChecked('#users_can_register');


                # Test against Administrator
                # //*[@id="default_role"]
                # Subscriber

                $default_role = $I->grabTextFrom('#default_role > option:nth-child(1)');
                $default_role = $I->grabTextFrom('//*[@id="default_role"]/option[1]');
                $I->selectOption("select[name=default_role]", $default_role);

                // This prints the value selected
                $I->comment("\n--- DEBUG :: select[name=default_role] :: $default_role ");
                $I->seeOptionIsSelected('//*[@id="default_role"]', $default_role);

                /* 
                    * to be continued....
                */

}// End of Class
```


```ruby

# login to the backend & testing the WordPress advanced Post creation with Tags and Categories.
# wp_check_backoffice_wordpress_advanced_post_creation.feature
Feature: Check Login and WordPress Advanced Post Creation with Tags and Categories.
  In order to have confidence that Post Creation is reliable
  As an admin
  I want to login, create and publish a Post with Tags and existing Categories


  Background: 
    Given I have a vanilla wordpress installation
      | user_login | user_pass | user_email     | role          | 
      | admin      | admin     | admin@test.com | administrator | 
      And there are categories:
      | LABEL                   | LOCATOR           | VALUE | 
      | Artificial Intelligence | "#in-category-9"  | 9     | 
      | Business Computing      | "#in-category-6"  | 6     | 
      | Communications          | "#in-category-4"  | 4     | 
      | Databases               | "#in-category-8"  | 8     | 
      | Hypermedia              | "#in-category-11" | 11    | 
  Scenario: A valid user access to the platform 
  and check the general settings, check writing settings
     When I am on "/wp-login.php"
     Then I fill in "#user_login" with "admin"
     Then I fill in "#user_pass" with "admin"
     Then I press "#wp-submit"
     Then I should be on "/wp-admin/"
     Then I should see "Dashboard"
  # go and create the post
     Then I should click on "All Posts"
     Then I should be on "/wp-admin/edit.php"
     Then I should see "Posts"
     Then I should click on "Add New"
     Then I should be on "/wp-admin/post-new.php"
      And I fill in "#title" with ""<startDateString>" Test title article codeceptJS "<RandomString>""
      And I fill in "#content" with ""<startDateString>" Test content article codeceptJS "<RandomString>""
     Then I check the following categories
      | LABEL                   | LOCATOR           | VALUE | 
      | Artificial Intelligence | "#in-category-9"  | 9     | 
      | Business Computing      | "#in-category-6"  | 6     | 
      | Communications          | "#in-category-4"  | 4     | 
      | Databases               | "#in-category-8"  | 8     | 
      | Hypermedia              | "#in-category-11" | 11    | 
      And I fill in "#new-tag-post_tag" with "WordPress,Plugin,Drupal,PHP,Development,CI,Cypress,Feature,Gherkin,Laravel,Symfony,OOP"
     Then I press "Add"
     Then I press "Publish"
     Then I press "View post"
     Then I should see "Test title article CodeceptJS" 
     Then I should see "Test content article codeceptJS" 


```


```javascript
/* Add the values inside config_values_codecept.js */
// Tags and Categories
POST_CATEGORY_CHECKLIST: ['#in-category-9','#in-category-6','#in-category-4','#in-category-8','#in-category-11'],

POST_TAGS_LIST: ['WordPress', 'Plugin', 'Drupal', 'PHP', 'Development', 'CI', 'Cypress', 'Feature', 'Gherkin', 'Laravel', 'Symfony', 'OOP'],

POST_VIEW_POST_LABEL_BTN_ADD:'Add',
```


```javascript

    globalData.POST_CATEGORY_CHECKLIST.forEach((locator, index) => {
        // I.say('\n--- '+locator+' '+index+'');
        I.checkOption(locator);
    });

    /* version 1 */
    /*
    let the_post_tags_list = [];
    for (let i = 0; i < globalData.POST_TAGS_LIST.length; i += 1) {
        // I.say('\n--- '+globalData.POST_TAGS_LIST[i]+'');
        the_post_tags_list.push(globalData.POST_TAGS_LIST[i]);        
    }
        // I.say('\n--- '+the_post_tags_list+'');
        I.fillField('//*[@id="new-tag-post_tag"]', the_post_tags_list);
        I.click(globalData.POST_VIEW_POST_LABEL_BTN_ADD, '//*[@id="post_tag"]/div/div[2]/input[2]');
    */
   
    /* version 2 */
    let the_post_tags_list = [];
    globalData.POST_TAGS_LIST.forEach((tag, index) => {
        // I.say('\n--- '+tag+' '+index+'');
        the_post_tags_list.push(tag);        
    });
    // I.say('\n--- '+the_post_tags_list+'');
    I.fillField('//*[@id="new-tag-post_tag"]', the_post_tags_list);
    I.click(globalData.POST_VIEW_POST_LABEL_BTN_ADD, '//*[@id="post_tag"]/div/div[2]/input[2]');

```


```javascript
const { globalData } = inject();

/* REQUIREMENTS */
let assert = require('assert');


Feature('Backoffice :: ensure that I publish a post with Tags and Categories @advanced @creation @post');
Scenario('Check WP Backoffice Post creation', async (I) => {

    I.say("\n--- LOGIN");
    I.amOnPage('wp-login.php');
    I.say('Backoffice :: enter username and password for WP');
    I.fillField({css: '#user_login'}, globalData.LOGIN_USERNAME);
    // I.fillField({css: '#user_pass'}, LOGIN_PASSWORD);
    I.fillField({css: '#user_pass'}, secret(globalData.LOGIN_PASSWORD));
    I.click('Log In','//*[@id="wp-submit"]');
    I.seeInCurrentUrl('/wp-admin/');
    I.see(globalData.DASHBOARD_H1, 'h1');

    I.say('\n--- POST');

    // Add a post
    // I.click('//*[@id="menu-posts"]/a/div[3]');
    I.click(globalData.POSTS_LINK_LABEL);
    
    I.click(globalData.POST_NEW_LABEL);
    I.see(globalData.POST_NEW_TITLE);
    // Check I am on /wp-admin/post-new.php
    I.seeInCurrentUrl('/wp-admin/post-new.php');

    // Add a title for Post
    I.fillField('#title', ''+globalData.startDateString+' Test title article CodeceptJS '+globalData.RandomString+' '); 

    // Add a content for Post
    I.fillField('#content', ''+globalData.startDateString+' Test content article CodeceptJS '+globalData.RandomString+'');

    globalData.POST_CATEGORY_CHECKLIST.forEach((locator, index) => {
        // I.say('\n--- '+locator+' '+index+'');
        I.checkOption(locator);
    });

    /* version 1 */
    /*
    let the_post_tags_list = [];
    for (let i = 0; i < globalData.POST_TAGS_LIST.length; i += 1) {
        // I.say('\n--- '+globalData.POST_TAGS_LIST[i]+'');
        the_post_tags_list.push(globalData.POST_TAGS_LIST[i]);        
    }
        // I.say('\n--- '+the_post_tags_list+'');
        I.fillField('//*[@id="new-tag-post_tag"]', the_post_tags_list);
        I.click(globalData.POST_VIEW_POST_LABEL_BTN_ADD, '//*[@id="post_tag"]/div/div[2]/input[2]');
    */
   
    /* version 2 */
    let the_post_tags_list = [];
    globalData.POST_TAGS_LIST.forEach((tag, index) => {
        // I.say('\n--- '+tag+' '+index+'');
        the_post_tags_list.push(tag);        
    });
    // I.say('\n--- '+the_post_tags_list+'');
    I.fillField('//*[@id="new-tag-post_tag"]', the_post_tags_list);
    I.click(globalData.POST_VIEW_POST_LABEL_BTN_ADD, '//*[@id="post_tag"]/div/div[2]/input[2]');


    // Publish
    I.click('#publish');
    I.click(globalData.POST_VIEW_POST_LABEL);

    // Post with no plugin
    I.see('Test title article CodeceptJS');
    I.see('Test content article CodeceptJS');

    // Post with no plugin
    I.say('I have a complete Post with Tags and Categories');

});
```

```javascript
        // SINGLE-FILE UPLOADER
        //  CSS or XPath Path to file is relative current codecept directory (where codecept.json or codecept.conf.js is located)
             
        /*
            * Picures are in _data/pictures/.
            * Image 1 (cobweb_with_raindrops.jpg)
            * Image 2 (southern_hawker_golden_ringed_dragonfly.jpg)

         */
        
        // Image 1
        // I.attachFile('//*[@id="async-upload"]', globalData.UPLOAD_NEW_MEDIA_IMAGE_1);
        
        // Image 2
        I.attachFile('//*[@id="async-upload"]', globalData.UPLOAD_NEW_MEDIA_IMAGE_2);
        // BTN UPLOAD
        I.click('//*[@id="html-upload"]');
```


```ruby

# login to the backend & testing the WordPress advanced Post creation with Tags and Categories.
# wp_check_backoffice_wordpress_advanced_post_creation.feature
Feature: Check Login and WordPress journalist profile creation. Required the codeception_journalist_extended_profile plugin installed.
In order to have confidence that the plugin codeception_journalist_extended_profile is reliable
As an admin
I want to login, create and publish a journalist profile.
  Background: 
    Given I have a vanilla wordpress installation
      | user_login | user_pass | user_email     | role          | 
      | admin      | admin     | admin@test.com | administrator | 
      And the plugin "codeception_journalist_extended_profile" is active
  
  Scenario: A valid user access to the platform 
  and check the general settings, check writing settings
     When I am on "/wp-login.php"
     Then I fill in "#user_login" with "admin"
     Then I fill in "#user_pass" with "admin"
     Then I press "#wp-submit"
     Then I should be on "/wp-admin/"
     Then I should see "Dashboard"
  # go and create the journalist profile
     Then I should click on "Journalists"
     Then I should be on "/wp-admin/edit.php?post_type=journalists"
     Then I should see "Published"
     Then I should click on "Published"
     Then I should be on "/wp-admin/edit.php?post_status=publish&post_type=journalists"
     Then I should see "Add New Journalist"
     Then I should click on "Add New Journalist"
     Then I should be on "/wp-admin/post-new.php"
      And I fill in "#title" with ""<startDateString>" Test journalist profile title CodeceptJS "<RandomString>""
      And I fill in "#content" with ""<startDateString>" Test journalist profile content CodeceptJS "<RandomString>""
      And I fill in "#excerpt" with ""<startDateString>" Test journalist profile excerpt CodeceptJS "<RandomString>""
  # add expertises and languages
     Then I check the following expertises
      | LABEL                   | LOCATOR              | VALUE | 
      | Animation               | "#in-expertises-127" | 127   | 
      | Artificial Intelligence | "#in-expertises-128" | 128   | 
      | Business Computing      | "#in-expertises-129" | 129   | 
      | Databases               | "#in-expertises-131" | 131   | 
      | Green IT                | "#in-expertises-133" | 133   | 
      | Hypermedia              | "#in-expertises-134" | 134   | 
      | Video                   | "#in-expertises-136" | 136   | 
     Then I check the following languages
      | LABEL                   | LOCATOR            | VALUE | 
      | Artificial Intelligence | "#in-category-138" | 138   | 
      | Business Computing      | "#in-category-140" | 140   | 
      | Communications          | "#in-category-141" | 141   | 
      | Databases               | "#in-category-142" | 142   | 
      | Hypermedia              | "#in-category-145" | 145   | 
      | Hypermedia              | "#in-category-146" | 146   | 
     Then I press "Publish"
     Then I press "View post"
     Then I should see "Test journalist profile title CodeceptJS" 
     Then I should see "Test journalist profile content CodeceptJS" 
  
```

```javascript
include: {
    I: './steps_file.js',
    /* 
      * to inject the properties for globalData object 
      * e.g. `objectName.propertyName` or `objectName["propertyName 
      * we have inserted 2 additional objects: uiElement, pluginJournalist
    */
    globalData: './_data/config/config_values_codecept.js',
    uiElement: './_data/ui/object_repository_ui_elements.js',
    pluginJournalist: './_data/plugin/plugin_post_type_journalist.js'
  },
```


```javascript

/* 
    * version 1 for Dependency Injection
*/

        // We inject these objects globally by its name declared in the configuration
         const { globalData, uiElement, pluginJournalist} = inject();
         
         Scenario('Check WP Backoffice Journalist profile creation', async (I) => {
             // the script is coming here
             // here we can retrieve any porpreties of these object
         });

```

```javascript
/* 
    * version 2 for Dependency Injection
 */
        // We inject these objects directly in scenario by its name declared in the configuration
        Scenario('sample test', (I, globalData, uiElement, pluginJournalist) => {
         // the script is coming here
         });
```

```javascript
// Stored in /_data/ui/object_repository_ui_elements.js
// object_repository_ui_elements.js
module.exports = {
    css_user_login:'#user_login',
    css_user_pass:'#user_pass',
    css_wp_submit:'//*[@id="wp-submit"]',

}

// Stored in /_data/plugin/plugin_post_type_journalist.js
// plugin_post_type_journalist.js
module.exports = {

    // Journalist plugin label  
    PLUGIN_JOURNALIST_LABEL: 'Journalists',
    PLUGIN_JOURNALIST_STATUS: 'Published',
    PLUGIN_JOURNALIST_ADD_NEW_BTN: 'Add New Journalist',

    // Journalist plugin css
    css_plugin_journalist_published: '//*[@id="wpbody-content"]/div[3]/ul/li[2]/a',
    css_plugin_add_new_journalist: '//*[@id="wpbody-content"]/div[3]/a',


}

// Stored in /_data/extra/extra_data.js
// extra_data.js
module.exports = {
    firstName: 'Bruno',
    lastName: 'Flaven'
}

```

```javascript
Feature('Debug :: Do some debug @debug');
Scenario('Debug :: ensure I can debug some tricky part ', async (I, extraData) => {

    I.say('--- HARD DEBUG for extraData');
    I.say('extraData.firstName => '+extraData.firstName+'');
    I.say('extraData.lastName => '+extraData.lastName+'');



}).injectDependencies({ extraData: require('./_data/extra/extra_data.js') });
```


```javascript
/*
    *
    * Plugins configuration for 
    * screenshotOnFail, autoDelay, stepByStepReport, allure
 */
plugins: {
    /* plugins' configuration will come here*/
  },
bootstrap: null,
```


```javascript
screenshotOnFail: {
      enabled: true,
      fullPageScreenshots: false, //  make full page screenshots
      uniqueScreenshotNames:false  // use unique names for screenshot. true or false
    },
```

```javascript
autoDelay: {
      enabled: true,
      delayBefore: 150, //  put a delay before a command. 100ms by default
      delayAfter: 150 // put a delay after a command. 200ms by default
    },
```


```bash
npx codeceptjs run --plugins stepByStepReport
```

```javascript
stepByStepReport: {
      enabled: true,
      deleteSuccessful: false, // do not save screenshots for successfully executed tests. Default: true.
      animateSlides: true, //  should animation for slides to be used. Default: true.
      fullPageScreenshots: true // should full page screenshots be used. Default: false.
      output: 'output' // a directory where reports should be stored. Default: output.
      screenshotsForAllureReport: true // If Allure plugin is enabled this plugin attaches each saved screenshot to allure report. Default: false.
    },
```

```bash

# be sure to be in the project directory
cd /Users/brunoflaven/Documents/02_copy/_discovering_codeceptjs_2

#launch the installs
npm install -g allure-commandline --save-dev

```

```bash
npx codeceptjs run --steps test_codeceptjs_9_e_test.js --plugins allure
```

```bash
allure serve output
```

```bash
# run the test with steps only
npx codeceptjs run --steps test_codeceptjs_9_e_test.js

# run the test with steps only and debug
npx codeceptjs run --steps --verbose test_codeceptjs_9_e_test.js

# run the test with the stepByStepReport plugin
npx codeceptjs run --plugins stepByStepReport --steps test_codeceptjs_9_e_test.js

# run the test with the stepByStepReport images + allure reports
npx codeceptjs run --plugins allure --plugins stepByStepReport  --steps test_codeceptjs_7_a_test.js

npx codeceptjs run --plugins allure --plugins stepByStepReport  --steps test_codeceptjs_8_b_test.js

npx codeceptjs run --plugins allure --plugins stepByStepReport  --steps test_codeceptjs_9_e_test.js


# run the test with the stepByStepReport images + allure reports + steps + debug
npx codeceptjs run --plugins allure --plugins stepByStepReport  --steps --verbose test_codeceptjs_7_a_test.js

npx codeceptjs run --plugins allure --plugins stepByStepReport  --steps --verbose test_codeceptjs_8_b_test.js

npx codeceptjs run --plugins allure --plugins stepByStepReport  --steps --verbose test_codeceptjs_9_e_test.js


```



```javascript
/*
    *
    * Plugins configuration for 
    * screenshotOnFail, autoDelay, stepByStepReport, allure
 */
plugins: {
       screenshotOnFail: {
      enabled: true,
      fullPageScreenshots: false, //  make full page screenshots
      uniqueScreenshotNames:false  // use unique names for screenshot. true or false
    },
    autoDelay: {
      enabled: true,
      delayBefore: 150, //  put a delay before a command. 100ms by default
      delayAfter: 150 // put a delay after a command. 200ms by default
    },
    stepByStepReport: {
      enabled: true,
      deleteSuccessful: false, // do not save screenshots for successfully executed tests. Default: true.
      animateSlides: true, //  should animation for slides to be used. Default: true.
      fullPageScreenshots: true // should full page screenshots be used. Default: false.
      output: 'output' // a directory where reports should be stored. Default: output.
      screenshotsForAllureReport: true // If Allure plugin is enabled this plugin attaches each saved screenshot to allure report. Default: false.
    },
    allure: {
      enabled: true
    }
  },
```


```javascript

    I.say("\n--- LOGIN");
    I.amOnPage('wp-login.php');
    I.say('Backoffice :: enter username and password for WP');
    I.fillField({css: uiElement.css_user_login}, globalData.LOGIN_USERNAME);
    I.fillField({css: uiElement.css_user_pass}, secret(globalData.LOGIN_PASSWORD));
    I.click(globalData.LOGIN_BTN_LABEL, uiElement.css_wp_submit);    
    I.seeInCurrentUrl('/wp-admin/');
    I.see(globalData.DASHBOARD_H1, 'h1');


```

```javascript
   
    // V1
    /*
    WpLogin: function(email, password) {
    this.fillField({css: '#user_login'}, email);
    this.fillField({css: '#user_pass'}, password);
    this.click('Log In','//*[@id="wp-submit"]');
    }
    */

    // V2
    /*
    WpLogin: function(css_user_login, login, css_user_pass, password, css_wp_submit, submit) {
    this.fillField({css: css_user_login}, login);
    this.fillField({css: css_user_pass}, password);
    this.click(submit, css_wp_submit);
    }
    */

    // V3
    WpLogin: function(css_user_login, login, css_user_pass, password, css_wp_submit, submit, dashboard_h1) {
    
        this.say("\n--- LOGIN");
        this.amOnPage('wp-login.php');
        this.say('Backoffice :: enter username and password for WP');
        this.fillField({css: css_user_login}, login);
        this.fillField({css: css_user_pass}, password);
        this.click(submit, css_wp_submit);
        this.seeInCurrentUrl('/wp-admin/');
        this.see(dashboard_h1, 'h1');

    }




```

```javascript

// V2 using an Actor    
    I.WpLogin(uiElement.css_user_login, globalData.LOGIN_USERNAME, uiElement.css_user_pass, secret(globalData.LOGIN_PASSWORD), uiElement.css_wp_submit, globalData.LOGIN_BTN_LABEL, globalData.DASHBOARD_H1);

```


```bash

# go to your directory
cd /Users/brunoflaven/Documents/02_copy/_discovering_codeceptjs_2/

# Tyeo the follwoing command and give this name to the PageObject: login
npx codeceptjs gpo

```

```javascript
/* 
      * Include configuration
      * to inject the properties for globalData object 
      * e.g. `objectName.propertyName` or `objectName["propertyName 
      * we have inserted 2 additional objects: uiElement, pluginJournalist
    */
  include: {
    I: './steps_file.js',
    globalData: './_data/config/config_values_codecept.js',
    uiElement: './_data/ui/object_repository_ui_elements.js',
    pluginJournalist: './_data/plugin/plugin_post_type_journalist.js',
    loginPageObject: './pages/login.js'
  },
```

```javascript
// Globally
const { globalData, uiElement, pluginJournalist, loginPageObject} = inject();

// OR
 
//Call it in the scenario directly
Scenario('Check WP Backoffice Journalist profile creation', async (I, loginPageObject) => {  }

```

```javascript
const { I } = inject();

module.exports = {

// insert your locators and methods here

/*

    I.say("\n--- LOGIN");
    I.amOnPage('wp-login.php');
    I.say('Backoffice :: enter username and password for WP');
    I.fillField({css: uiElement.css_user_login}, globalData.LOGIN_USERNAME);
    I.fillField({css: uiElement.css_user_pass}, secret(globalData.LOGIN_PASSWORD));
    I.click(globalData.LOGIN_BTN_LABEL, uiElement.css_wp_submit);
    I.seeInCurrentUrl('/wp-admin/');
    I.see(globalData.DASHBOARD_H1, 'h1');

 */

// setting locators
  
  values: {
    value_1: '\n--- LOGIN',
    value_2: 'wp-login.php',
    value_3: 'Backoffice :: enter username and password for WP',
    value_4: '/wp-admin/',
    value_5: 'Dashboard',
    value_6: 'h1'
  }, 
  fields: {
    email: '#user_login',
    password: '#user_pass'
  },
  submitButton: {
    label: 'Log In', 
    css: '//*[@id="wp-submit"]'
  },

  // introducing methods
  FunctionSendForm (email, password) {
    I.say(this.values.value_1);
    I.amOnPage(this.values.value_2);
    I.say(this.values.value_3);

    I.fillField({css: this.fields.email}, email);
    I.fillField({css: this.fields.password}, password);
    I.click(this.submitButton.label, this.submitButton.css);
    
    I.seeInCurrentUrl(this.values.value_4);
    I.see(this.values.value_5, this.values.value_6);
    
  }

}

```


```bash

# be in the root directory my dear  where you installed the CPJS
cd /Users/brunoflaven/Documents/02_copy/_discovering_codeceptjs_2/

# I gave the following name to the helper: mobile, tablet
# gh stand for generate helper
npx codeceptjs gh

```

```javascript
  helpers: {
        /*
              * Add the custom helper to the codecept.conf.js 
            */
             mobile: {
                require: './mobile_helper.js'
            },
            tablet: {
                require: './tablet_helper.js'
            }
 },
```


```javascript
sayHelloWorld(msg) {
    return;
  }
```

```javascript
Feature('Advanced technics for CPJS @advanced @helper');
Scenario('Use Custom Helper', async (I) => {
    I.say("\n--- mobile_helper");
    I.sayHelloWorld("from mobile_helper");

});
```

```javascript 
TheMessage(msg) {
    return;
  }
  
  async AnotherMeOnPage(url) {
    const { page } = this.helpers.Puppeteer;
    await page.goto(url, { timeout: 170000 });
  }
```

```javascript
Feature('Advanced technics for CPJS @advanced @helper');
Scenario('Use Custom Helper', I => {
    I.say("\n--- mobile_helper");
    I.sayHelloWorld("It comes from mobile_helper.js");
    I.say("\n--- tablet_helper");
    I.TheMessage("It comes from tablet_helper.js");
    I.AnotherMeOnPage("http://codecept.mydomain.priv/wordpress/journalists/");

});
```


```bash
# be in the root directory my dear  where you installed the CPJS
cd /Users/brunoflaven/Documents/02_copy/_discovering_codeceptjs_2/

#init the gherkin stuff with CPJS
npx codeceptjs gherkin:init
```

```javascript
gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
```

```ruby
Feature: Business rules
  In order to achieve my goals
  As a persona
  I want to be able to interact with a system
  Scenario: do something
    Given I have a defined step
```

```javascript
const { I } = inject();
// Add in your custom step files

Given('I have a defined step', () => {
  // TODO: replace with your own step
});
```

```ruby
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
```

```javascript
Feature('My First Test');
Scenario('test something', (I) => {
  I.amOnPage('http://codecept.mydomain.priv/wordpress/');
  I.see('Just another WordPress site');
});
```

```javascript
const { I } = inject();
// Add in your custom step files

/* 
    * the
    * for 01_wp_check_frontend_default_installation.feature 
*/

/* Background: 
    Given I have a WordPress installation */
Given('I have a WordPress installation', () => {

// It is pretty light as a test we will go up a notch soon
  I.say("Lucky you good boy");
});

/* When I go to "/" */
When('I go to {string}', (url) => {
  I.amOnPage(url);
});

/* Then I should be on the homepage */
Then('I should be on the homepage', () => {
// It is pretty light as a test we will go up a notch soon
  I.say('Yep you are on the HP');
});

/* And I should see "Just another WordPress site" */
Then('I should see {string}', (string) => {
  I.see(string);
});
```




```bash
# be in the root directory my dear  where you installed the CPJS
cd /Users/brunoflaven/Documents/02_copy/_discovering_codeceptjs_2/

# launch dry-run for the gherkin stuff with CPJS
# It will not excecute the tests
npx codeceptjs dry-run --features  --steps


# launch run for the gherkin stuff with CPJS
# It will excecute the tests
npx codeceptjs run --features  --steps

# Ditto but with the debug flag --verbose
npx codeceptjs run --features  --steps --verbose


```



```javascript

const { I, globalData, uiElement, pluginJournalist } = inject();


/* 
    * the
    * for 02_wp_check_frontend_default_installation.feature
*/
Given('I have a WordPress installation', () => {
        
        I.say("\n--- LOGIN :: Lucky you good boy, you have WP installed and I test it!");
        I.amOnPage('wp-login.php');
        I.say('Backoffice :: enter username and password for WP');      
        I.fillField({css: uiElement.css_user_login}, globalData.LOGIN_USERNAME);
        I.fillField({css: uiElement.css_user_pass}, secret(globalData.LOGIN_PASSWORD));
        I.click(globalData.LOGIN_BTN_LABEL, uiElement.css_wp_submit);
        I.seeInCurrentUrl('/wp-admin/');
        I.see(globalData.DASHBOARD_H1, 'h1');
});

Then('I should be on the homepage', () => {
            I.say("\n--- HOMEPAGE :: Yep you are on the HP");
            I.say("\n--- Checking source code. See plugin codeceptjs_check_homepage");


            // Checks that the current page contains the given string in its raw source code.
            // Thanks to my plugin codecept_check_homepage, if I am on the homepage, the source code show the value below.
            I.seeInSource('<!-- '+globalData.PLUGIN_CHECK_HOMEPAGE_SEEINSOURCE.trim()+' -->');

            // Checks that the current page does not contains the given string in its raw source code.
            // Thanks to my plugin codecept_check_homepage, if I am on the homepage, the source code show the value below.
            I.dontSeeInSource('<!-- '+globalData.PLUGIN_CHECK_HOMEPAGE_DONTSEEINSOURCE.trim()+' -->');            
            // Checks that title contains text.
            I.seeInTitle(globalData.PLUGIN_CHECK_HOMEPAGE_SEEINTITLE.trim());
            
            
});

```

```ruby
# exctract from 04_wp_backoffice_menu_navigation.feature
     Then I should see "Howdy, admin"
     Then The admin menu should appear as follow and be clickable
      | NAME        | URL                                      | 
      | Dashboard   | /wp-admin/index.php                      | 
      | Posts       | /wp-admin/edit.php                       | 
      | Journalists | /wp-admin/edit.php?post_type=journalists | 
      | Media       | /wp-admin/upload.php                     | 
      | Pages       | /wp-admin/edit.php?post_type=page        | 
      # | Comments    | /wp-admin/edit-comments.php              | 
      | Appearance  | /wp-admin/themes.php                     | 
      | Plugins     | /wp-admin/plugins.php                    | 
      | Users       | /wp-admin/users.php                      | 
      | Tools       | /wp-admin/tools.php                      | 
      | Settings    | /wp-admin/options-general.php            | 

```

```javascript
Given('The admin menu should appear as follow and be clickable', (table) => {
  for (const id in table.rows) {
    if (id < 1) {
      continue; // skip a header of a table
    }

    // go by row cells
    const cells = table.rows[id].cells;

    // take values
    const name = cells[0].value;
    const url = cells[1].value;
    // const price = cells[1].value;
    // ...
    // I.say(name);
    I.see(name);
    I.click(name);
    I.seeInCurrentUrl(url);
  }
});
```

```bash

# be sure to be in the project directory
cd /Users/brunoflaven/Documents/02_copy/_discovering_codeceptjs_2

# launch run for the gherkin stuff with CPJS
# It will excecute the tests
npx codeceptjs run --features  --steps


```

```javascript
/* 
    * Add gherkin to the project
    * Do not forget to add the functions 
    * inside the file steps.js for each line of gherkin feature
  */
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
```

```bash
# Dry Run
npx codeceptjs dry-run --features 
npx codeceptjs dry-run --features  --steps
npx codeceptjs dry-run --features --debug
npx codeceptjs dry-run --features --steps --debug --verbose

# Run
npx codeceptjs run --features 
npx codeceptjs run --features  --steps
npx codeceptjs run --features --steps --debug
npx codeceptjs run --features --steps --debug --verbose

# To list all defined steps run gherkin:steps command
npx codeceptjs gherkin:steps
```

```javascript
//Add the helper for testing API
          REST: {
          // endpoint: "http://localhost/api/v1/",
          endpoint: "http://codecept.mydomain.priv/wordpress",
          defaultHeaders: {
            // 'Auth': '11111',
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            }
          }
```

```php
// Let the CPT or the CT appears in the JSON WP API
'show_in_rest' => true,
```

```bash
# be sure to be in the project directory
cd /Users/brunoflaven/Documents/02_copy/_discovering_codeceptjs_2

# launch the install
npm install --save-dev chai

```


```javascript
//  exctract from test_codeceptjs_13_a2_test.js

                    for (var post in response.data) {

                    let postDetails = response.data[post];

                    // console.log("\n\n--- DEBUG");
                    // console.log(postDetails.id);
                    // console.log(isNaN(postDetails.id));
                    // console.log(postDetails.title.rendered);
                    
                    // id
                    expect(isNaN(postDetails.id)).to.be.false;
                    postDetails.should.have.property('id');
                    
                    // Post elements
                    assert.isString(postDetails.title.rendered);
                    assert.isString(postDetails.content.rendered);
                    assert.isString(postDetails.excerpt.rendered);
                    assert.isNumber(postDetails.author);


            }
```


```php

// Extract from codeception_api_route_journalists plugin

public function register() {

                    register_rest_route( 'journalists/v1', '/profiles', array(
                            'methods' => 'GET',
                            'callback' => array($this,'get_journalists'),
                            )
                    );
                    /*
                    (?P<id>\d+)
                    (?P<id>[\\d]+)
                     */
                    register_rest_route( 'journalists/v1', '/profile/(?P<id>\d+)', array(
                            'methods' => 'GET',
                            'callback' => array($this,'get_journalist'),
                            
                            ));


                }//EOF
```
```javascript

// required
      I.amOnPage('/wp-json/journalists/v1/profiles');

      // output
      // console.log(response.data);
      response.status.should.eql(200);

      //check json object
      response.data.should.be.an('object');

            Object.keys(response.data).forEach(function (journalist) {
            // journalist is an id
            // console.log(journalist);
            // console.log(isNaN(journalist));
            expect(isNaN(journalist)).to.be.false;

            // console.log(response.data[journalist]);
                let journalistDetails = response.data[journalist];
                // console.log("\n\n--- DEBUG");
                // console.log("name :: "+journalistDetails.title); 

                  journalistDetails.should.have.property('title');
                  journalistDetails.should.have.property('content');
                  journalistDetails.should.have.property('author');
                  journalistDetails.should.have.property('twitter_account');
                  journalistDetails.should.have.property('facebook_account');
                  journalistDetails.should.have.property('linkedin_account');


                  assert.isString(journalistDetails.title);
                  assert.isString(journalistDetails.content);
                  assert.isString(journalistDetails.excerpt);
                  assert.isString(journalistDetails.author);
                  assert.isString(journalistDetails.twitter_account);
                  assert.isString(journalistDetails.facebook_account);
                  assert.isString(journalistDetails.linkedin_account);

                  
                  

                  expect(journalistDetails.content).to.be.a('string');
                  expect(journalistDetails.excerpt).to.be.a('string');

                  // console.log(journalistDetails.expertises);
                  // console.log(journalistDetails.languages);

            
                  let journalistExpertiseDetails = journalistDetails.expertises;
                  Object.keys(journalistExpertiseDetails).forEach(function (expertise) {
                    // console.log("expertises :: "+expertise); // key
                    // console.log("expertises :: "+journalistExpertiseDetails[expertise].term_id);
                    // console.log("expertises :: "+journalistExpertiseDetails[expertise].name);
                    
                    


                    journalistExpertiseDetails[expertise].should.have.property('term_id');
                    journalistExpertiseDetails[expertise].should.have.property('name');
                    journalistExpertiseDetails[expertise].should.have.property('slug');
                    journalistExpertiseDetails[expertise].should.have.property('taxonomy');

                    assert.isNumber(journalistExpertiseDetails[expertise].term_id);
                    assert.isString(journalistExpertiseDetails[expertise].name);
                    assert.isString(journalistExpertiseDetails[expertise].taxonomy);

                    expect(journalistExpertiseDetails[expertise].term_id).to.be.a('number');
                    expect(journalistExpertiseDetails[expertise].name).to.be.a('string');
                    expect(journalistExpertiseDetails[expertise].taxonomy).to.be.a('string');


                    expect(journalistExpertiseDetails[expertise].taxonomy).to.deep.equal('expertises');
 

                  });

                  let journalistLanguageDetails = journalistDetails.languages;
                  Object.keys(journalistLanguageDetails).forEach(function (language) {
                    // console.log("languages :: "+language); // key
                    // console.log("languages :: "+journalistExpertiseDetails[language].term_id);
                    // console.log("languages :: "+journalistLanguageDetails[language].name);

                    journalistLanguageDetails[language].should.have.property('term_id');
                    journalistLanguageDetails[language].should.have.property('name');
                    journalistLanguageDetails[language].should.have.property('slug');
                    journalistLanguageDetails[language].should.have.property('taxonomy');

                    assert.isNumber(journalistLanguageDetails[language].term_id);
                    assert.isString(journalistLanguageDetails[language].name);
                    assert.isString(journalistLanguageDetails[language].taxonomy);
                    assert.isString(journalistLanguageDetails[language].taxonomy);

                    expect(journalistLanguageDetails[language].term_id).to.be.a('number');
                    expect(journalistLanguageDetails[language].name).to.be.a('string');
                    expect(journalistLanguageDetails[language].taxonomy).to.be.a('string');

                    expect(journalistLanguageDetails[language].taxonomy).to.deep.equal('languages');

                  });

```


```javascript
/*
cd /Users/brunoflaven/Documents/02_copy/_discovering_codeceptjs_2/
node test-js-1.js

*/

 
// console.log("Testing");
 

var language = {
        "term_id": 146,
        "name": "Turkish",
        "slug": "turkish",
        "term_group": 0,
        "term_taxonomy_id": 146,
        "taxonomy": "languages",
        "description": "",
        "parent": 0,
        "count": 12,
        "filter": "raw"
};

// Object.keys() and Array.forEach()

Object.keys(language).forEach(function (key) {
  console.log("\n\n--- ");
  console.log("key :: "+key); // key
  console.log("value :: "+language[key]); // value
  console.log("---\n\n");

});

```

```sh
curl --user admin:admin http://codecept.mydomain.priv/wordpress/wp-json/
curl --user admin:admin http://codecept.mydomain.priv/wordpress/wp-json/wp/v2/posts
```


```javascript
const WPAPI = require('./wpapi')
const wp = new WPAPI({
    endpoint: 'https://example.com/wp-json',
    username: 'editor',
    password: 'password'
});
```


```bash
/usr/bin/ruby -e "$(curl -k -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

```bash
brew update
brew doctor
export PATH="/usr/local/bin:$PATH"
brew install node
```


```bash

#If you have NPM installed, installing Newman is as easy as: 
npm install -g newman
```

```bash

# Go to your directly where the postman collection and the environment files are...
cd /Users/brunoflaven/Documents/02_copy/_discovering_codeceptjs_2/api-wp-postman-newman/

#Launch the collection with the proper environment
newman run 0003_codecepjs_WP_API.postman_collection.json -e wp_api_cpjs.postman_environment.json
```

```json
{
    "id": "bf062f39-865b-4593-a437-7cfe2d49b15a",
    "name": "wp_api_cpjs",
    "values": [
        {
            "key": "wp_local_api_path",
            "value": "http://codecept.mydomain.priv/wordpress/wp-json/wp/v2",
            "enabled": true
        }
    ],
    "_postman_variable_scope": "environment",
    "_postman_exported_at": "2019-12-20T12:56:10.948Z",
    "_postman_exported_using": "Postman/7.14.0"
}
```



```bash
+ 0003_codecepjs_WP_API.postman_collection.json
│
+─── wp_api_cpjs.postman_environment.json   
│
+─── wp_api_create_extended_user_1
│   ins_wp_api_create_extended_user_1.js
│   
+─── wp_api_create_extended_user_2
│   ins_wp_api_create_extended_user_2.js
│      
+─── wp_api_create_extended_user_3
│   ins_wp_api_create_extended_user_3.js
│   pre_wp_api_create_extended_user_3.js
│   
+─── wp_api_delete_post_delete
│   ins_wp_api_delete_post_delete.js
│   pre_wp_api_delete_post_delete.js
│   
+─── wp_api_delete_user_delete
│   ins_wp_api_delete_user_delete.js
│   pre_wp_api_delete_user_delete.js
│   
+─── wp_api_list_posts_1
│   ins_wp_api_list_posts_1.js
│   
+─── wp_api_list_users_2
│   ins_wp_api_list_users_2.js
│   
+─── wp_api_post_extended_post_3
│   ins_wp_api_post_extended_post_3.js
│   pre_wp_api_post_extended_post_3.js
│   
+─── wp_api_post_extended_post_3a
│   ins_wp_api_post_extended_post_3a.js
│   pre_wp_api_post_extended_post_3a.js
│   
+─── wp_api_post_extended_post_4
│   ins_wp_api_post_extended_post_4.js
│   pre_wp_api_post_extended_post_4.js
│   
+─── wp_api_post_extended_post_5
│   ins_wp_api_post_extended_post_5.js
│   pre_wp_api_post_extended_post_5.js
│   
+─── wp_api_post_extended_post_6
│   ins_wp_api_post_extended_post_6.js
│   pre_wp_api_post_extended_post_6.js
│   
+─── wp_api_update_extended_post_1
│   ins_wp_api_update_extended_post_1.js
│   pre_wp_api_update_extended_post_1.js
│   
+─── wp_api_update_extended_post_1a
│   ins_wp_api_update_extended_post_1a.js
│   pre_wp_api_update_extended_post_1a.js
│   
+─── wp_api_update_extended_post_2
│   ins_wp_api_update_extended_post_2.js
│   pre_wp_api_update_extended_post_2.js
│   
+─── wp_api_update_extended_post_3
│   ins_wp_api_update_extended_post_3.js
│   pre_wp_api_update_extended_post_3.js
│   
```


```json
"scripts": {
    "test:e2e:wp:full": "codeceptjs run --verbose --config=./e2e_suite/configs/codecept.conf.js"
  },
```
```json
"scripts": {
    "test:e2e:wp:full": "codeceptjs run --steps --config=./e2e_suite/configs/wp_test.conf.js"
  },
```

```json
"scripts": {
    "test:e2e:wp:full": "codeceptjs run --steps --plugins allure --config=./e2e_suite/configs/wp_test.conf.js" 
  },
```


```javascript
allure: {
        enabled: true
      }
```


```bash
# to lauch the tests
npm run test:e2e:wp:full
```


```bash
# be sure to be in the project directory
cd /Users/brunoflaven/Documents/02_copy/_discovering_codeceptjs_5

# to install chai library
npm install --save-dev chai
# to install the plugin
npm install --save-dev allure-commandline 
```


```bash
# To create the Custom Helpers: mobile, tablet
# You launch the command, enter the name "mobile"
npx codeceptjs gh
# You need to add this path according to our directories tree.
# ./e2e_suite/helpers/mobile_helper.js

# Ditto for tablet
# You launch the command, enter the name "tablet"
npx codeceptjs gh
# You need to add this path according to our directories tree.
#./e2e_suite/helpers/tablet_helper.js
```


```json
mobile: {
      require: './e2e_suite/helpers/mobile_helper.js'
    },
    tablet: {
      require: './e2e_suite/helpers/tablet_helper.js'
    },
```


```bash

# go to the directory
cd /Volumes/mi_disco/_discovering_codeceptjs_3/better_testing_management_2/

# create file package.json and add the following {}
touch package.json 

# make your directories tree
mkdir e2e_suite
mkdir e2e_suite/configs
mkdir e2e_suite/helpers
mkdir e2e_suite/output
mkdir e2e_suite/tests
# for actor used in the tests
mkdir e2e_suite/step_files
# for data used in the tests
mkdir e2e_suite/_data
# for page objects used in the tests
mkdir e2e_suite/pages
# for gherkin features
mkdir e2e_suite/features
mkdir e2e_suite/step_definitions


# init the project, complete the fields with you content.
npm init

# keywords: End-to-End, E2E, suite, CodeceptJS, BDD, tests, automation, Rationalization, strategy, P.O, Introduction to CodeceptJS, codecept.io, Testing framework,  Usecase, WordPress

# Add the devDependencies
# "codeceptjs": "^2.1.3", 
# "puppeteer": "^1.6.2"

# Install the project
npm install

# Install CodeceptJS
npx codeceptjs init

#../tests/*_test.js
#../output
#../step_files/step_files.json


```

```bash
+ better_testing_management_1
+─── e2e_suite
│    │
│    + _data
│    │
│    + configs
│    │    
│    + helpers
│    │    
│    + output
│    │
│    + tests
│    
+─── package.json   
│
+─── node_modules
│    │
│    + @types
│    │    
│    + abbrev
│    │        
│    + agent-base
│    │
│    + allure-js-commons
│    │
│    + allure-js-commons
│    │
│    + etc...
```

```javascript
Scenario('Backoffice :: ensure I can debug some tricky part @debug', async (I, extraData) => {

    I.say("\n###\n");
    I.say('--- HARD DEBUG for extraData');
    I.say('extraData.firstName => '+extraData.firstName+'');
    I.say('extraData.lastName => '+extraData.lastName+'');
    I.say('--- HARD DEBUG for uiElement');
    I.say('uiElement.css_user_login => '+uiElement.css_user_login+'');
    I.say('uiElement.css_user_pass => '+uiElement.css_user_pass+'');
    I.say('--- HARD DEBUG for globalData');    
    I.say('globalData.LOGIN_USERNAME => '+globalData.LOGIN_USERNAME+'');
    I.say('globalData["LOGIN_USERNAME"] => '+ globalData["LOGIN_USERNAME"]+'');
    I.say(''+globalData.LOGIN_PASSWORD+'');
    I.say('# below it is all globalData object\'s properties');
    I.say(''+globalData.DASHBOARD_H1+'');
    I.say(''+globalData.GENERAL_SETTINGS_H1+'');
    I.say(''+globalData.GENERAL_BLOGNAME_VALUE+'');
    I.say(''+globalData.GENERAL_BLOGDESCRIPTION_VALUE+'');
    I.say(''+globalData.GENERAL_SITEURL_VALUE+'');
    I.say(''+globalData.GENERAL_HOME_VALUE+'');
    I.say(''+globalData.WRITING_SETTINGS_H1+'');
    I.say(''+globalData.READING_SETTINGS_H1+'');
    I.say(''+globalData.GENERAL_NEW_ADMIN_EMAIL_VALUE+'');
    I.say(''+globalData.POSTS_LINK_LABEL+'');
    I.say(''+globalData.POST_NEW_LABEL+'');
    I.say(''+globalData.POST_NEW_TITLE+'');
    I.say(''+globalData.POST_VIEW_POST_LABEL+'');
    I.say(''+globalData.RandomString+'');
    I.say(''+globalData.POST_CATEGORY_CHECKLIST+'');
    I.say(''+globalData.POST_TAGS_LIST+'');
    I.say("\n###\n");

// Fornthe suite do not forget to change the path!
// }).injectDependencies({ extraData: require('./_data/extra/extra_data.js') });
}).injectDependencies({ extraData: require('../_data/extra/extra_data.js') });
```

```javascript
// UPLOAD_NEW_MEDIA_IMAGE_1:'./_data/pictures/cobweb_with_raindrops.jpg',
// UPLOAD_NEW_MEDIA_IMAGE_2:'./_data/pictures/southern_hawker_golden_ringed_dragonfly.jpg',
 
UPLOAD_NEW_MEDIA_IMAGE_1:'../_data/pictures/cobweb_with_raindrops.jpg',
UPLOAD_NEW_MEDIA_IMAGE_2:'../_data/pictures/southern_hawker_golden_ringed_dragonfly.jpg',

```
```json
"scripts": {
    "test:e2e:wp:full": "codeceptjs run --steps --config=./e2e_suite/configs/codecept.conf.js"
  },
  "devDependencies": {
    "chai": "^4.2.0",
    "codeceptjs": "^2.1.3",
    "puppeteer": "^1.6.2"
  },
```

```json
{
  "name": "better_testing_management_2",
  "version": "1.0.0",
  "description": "End-to-End (E2E) suite using CodeceptJS BDD tests. Redefining a test automation strategy for a P.O? Introduction to CodeceptJS (codecept.io), an End2End Testing framework. Usecase with WordPress.",
  "scripts": {
    "test:e2e:wp:full": "codeceptjs run --steps --config=./e2e_suite/configs/codecept.conf.js"
  },
  "devDependencies": {
    "chai": "^4.2.0",
    "codeceptjs": "^2.1.3",
    "puppeteer": "^1.6.2"
  },
  "keywords": [
    "End-to-End",
    "E2E",
    "suite",
    "CodeceptJS",
    "BDD",
    "tests",
    "automation",
    "Rationalization",
    "strategy",
    "P.O",
    "Introduction",
    "to",
    "CodeceptJS",
    "codecept.io",
    "Testing",
    "framework",
    "Usecase",
    "WordPress"
  ],
  "author": "Bruno Flaven",
  "license": "ISC"
}
```

```bash

# get the list of the network
docker network ls

# list the instances
docker-compose ps

#List all containers (only IDs) 
docker ps -aq

#go to bash
docker-compose run --rm cli bash

# get into the codeception console, run codeception as codecept in bash
docker-compose run --rm --entrypoint bash codecept



### CAUTION ###

#to access to wp-cli
docker-compose run --rm cli bash


#Stop all running containers. 
docker stop $(docker ps -aq)

#Remove all containers. 
docker rm $(docker ps -aq)

#Remove all images. 
docker rmi $(docker images -q)

#Be careful! This will remove all images
docker rmi -f $(docker images -q)

```

```bash
cd /Volumes/mi_disco/_discovering_codeceptjs_3/
mkdir better_testing_management_4
cd /Volumes/mi_disco/_discovering_codeceptjs_3/better_testing_management_4
# add the source avalaible in package.json below
touch package.json
npm install
# make the files compliant with the tree directory.
```

```bash
+ better_testing_management_1
+─── e2e_suite
│    │
│    + configs
│    │    
│    + helpers
│    │    
│    + output   
│    │    
│    + steps_file
│    │
│    + tests
│    
+─── Makefile
│    
+─── docker-compose.yml
│    
+─── package.json   
│
+─── node_modules
│    │
│    + @types
│    │    
│    + abbrev
│    │        
│    + agent-base
│    │
│    + allure-js-commons
│    │
│    + allure-js-commons
│    │
│    + etc...
```

```json
{
  "name": "better_testing_management_5",
  "version": "1.0.0",
  "description": "End-to-End (E2E) suite using CodeceptJS BDD tests. Redefining a test automation strategy for a P.O? Introduction to CodeceptJS (codecept.io), an End2End Testing framework. Usecase with WordPress. Webdriver.io, Next-gen WebDriver test framework for Node.js",
  "scripts": {
    "test:webdriver": "codeceptjs run --steps --config=./e2e_suite/configs/codecept.conf.js"
  },
  "devDependencies": {
    "codeceptjs": "^2.1.3",
    "puppeteer": "^1.6.2",
    "webdriverio": "^5.4.13"
  },
  "keywords": [
    "Next-gen",
    "WebDriver",
    "test framework",
    "Node.js",
    "Webdriver.io",
    "End-to-End",
    "E2E",
    "suite",
    "CodeceptJS",
    "BDD",
    "tests",
    "automation",
    "Rationalization",
    "strategy",
    "P.O",
    "Introduction",
    "CodeceptJS",
    "codecept.io",
    "Testing",
    "framework",
    "Usecase",
    "WordPress"
  ],
  "author": "Bruno Flaven",
  "license": "ISC"
}
```


```yaml
version: "3"
services:
  selenium:
    image: selenium/standalone-chrome-debug:3.6.0
    ports:
      - "4444:4444"
      - "5902:5900"
    volumes:
      - ${PWD}:${PWD}
      - /dev/shm:/dev/shm
    networks:
      - e2e
networks:
  e2e:
```

```javascript
exports.config = {
  tests: '../tests/*_test.js',
  output: '../output',
  helpers: {
    tablet: {
      require: '../helpers/tablet_helper.js',
    },
    WebDriver: {
      url: 'http://localhost',
      browser: 'chrome'
    }
  },
  include: {
    I: '../steps_file/steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'better_testing_management_4'
}
```


```javascript
Feature('CodeceptJS with docker');
Before(I => {
  I.resizeWindow(1366, 768);
});

Feature('Testing Search on Amazon @starting');
Scenario('Navigate and Search on Amazon', I => {
  I.amOnPage('https://www.amazon.com/');
  I.isPageLoaded();
  I.see('Amazon.com', '//*[@id="navFooter"]/div[5]/ul/li[4]');
  I.fillField({css: '#twotabsearchtextbox'}, 'Bruno Flaven');
  I.click({xpath: '//*[@id="nav-search"]/form/div[2]/div/input'});
  I.saveScreenshot('looking_for_me_on_amazon.png');
  I.anotherGiveMessage("Find you!");
});
```


```Makefile
#value
DOCKER_COMPOSE=docker-compose
NPM_RUN=npm run

#make start
start:
    $(DOCKER_COMPOSE) up -d --build

#make stop
stop:
    $(DOCKER_COMPOSE) stop

#make down
down:
    $(DOCKER_COMPOSE) down

#make ps
ps:
    $(DOCKER_COMPOSE) ps

#caution be sure to have launch docker and docker compose up
#make test
test:
    $(NPM_RUN) test:webdriver
```

```bash
npm run test:webdriver
```

```bash
# stop the selenium/standalone-chrome-debug
docker-compose down -v

# start the selenium/standalone-chrome-debug
docker-compose up -d 

```


```applescript
set MY_PATH to "open -a 'Terminal' /Volumes/mi_disco/_discovering_codeceptjs_3/using_jenkins_1/"
-- set THEME to "Ocean"
set THEME to "Homebrew"
set CMD_1 to "pwd"
set CMD_2 to "npx --version"
set CMD_3 to "npx codeceptjs --version"
set CMD_4 to "clear"
(* do not use \n\n *)
set CMD_5 to "echo LAUNCH THE SHELL"
```


```bash
# go to the directory, be sure to change the path to your default folder where CPJS is installed
cd /Volumes/mi_disco/_discovering_codeceptjs_3/using_jenkins_1/

# launch the script
npx codeceptjs run --steps pokpoc_test_codeceptjs_2_test.js
```


```applescript
(**
 * This file is part of the book package: "Redefining a test strategy for a P.O? Introduction to CodeceptJS (codecept.io), a End 2 End Testing framework. Usecase with WordPress."
 *
 * (c) Bruno Flaven <info@flaven.fr>
 * 
 * Intended to test a FRONTOFFICE and BACKOFFICE made with WP
 *
 * @package Codeception WordPress Testing 
 * @subpackage BACKOFFICE
 * @since codeceptVersion: 2.3.6, nodeInfo: 12.8.0, WordPress: 5.2.3, npx: 6.13.1
 *)

(* Set the default path to you script *)
set MY_PATH to "open -a 'Terminal' /Volumes/mi_disco/_discovering_codeceptjs_3/using_jenkins_1/"

-- set THEME to "Ocean"
set THEME to "Homebrew"
set CMD_1 to "pwd"
set CMD_2 to "npx --version"
set CMD_3 to "npx codeceptjs --version"
set CMD_4 to "clear"
(* do not use \n\n *)
set CMD_5 to "echo LAUNCH THE SHELL"

(* set MY_SCRIPT to "npx codeceptjs run --steps pokpoc_test_codeceptjs_2_test.js" *)
set MY_SCRIPT to "sh launch_npx_good.sh"

if application "Terminal" is running then
    tell application "Terminal"
        do shell script MY_PATH
        set current settings of window 1 to settings set THEME
        do script CMD_1 in window 1
        do script CMD_2 in window 1
        do script CMD_3 in window 1
        delay 5
        do script CMD_4 in window 1
        do script MY_SCRIPT in window 1
    end tell
else
    tell application "Terminal"
        do shell script MY_PATH
        set current settings of window 1 to settings set THEME
        do script CMD_1 in window 1
        do script CMD_2 in window 1
        do script CMD_3 in window 1
        delay 5
        do script CMD_4 in window 1
        do script MY_SCRIPT in window 1
    end tell
end if

```


```bash
+ launch_npx_12.scpt
     │
    launch_npx_good
         │
        npx codeceptjs run --steps pokpoc_test_codeceptjs_2_test.js
```

```bash
#!/bin/bash
# This file is part of the book package: "Redefining a test strategy for a P.O? Introduction to CodeceptJS (codecept.io), a End 2 End Testing framework. Usecase with WordPress."
#
# (c) Bruno Flaven <info@flaven.fr>
# 
# Intended to test a FRONTOFFICE and BACKOFFICE made with WP
#
# @package Codeception WordPress Testing 
# @subpackage BACKOFFICE
# @since codeceptVersion: 2.3.6, nodeInfo: 12.8.0, WordPress: 5.2.3, npx: 6.13.1
#

# #### MANUAL USAGE
# cd /Volumes/mi_disco/_discovering_codeceptjs_3/using_jenkins_1/
# sh launch_npx_good.sh
# chmod +x on a file (your script) only means, that you'll make it executable.
# chmod +x launch_npx_good.sh

### CONFIG ####

SCRIPT_VERB="run";
#SCRIPT_FILE="--features  --steps";
SCRIPT_FILE="--steps pokpoc_test_codeceptjs_2_test.js";

# Other commands in comment
#npx codeceptjs dry-run --features  --steps
#npx codeceptjs run --features  --steps
#npx codeceptjs run --features  --steps --verbose


### ---  SCRIPT --- ###

### CONFIG ####
echo "\n"
echo "\033[1;33m ### START ### \033[0m"
echo "\n"


#SHOW
# echo "npx codeceptjs run --features  --steps"
echo "npx codeceptjs "$SCRIPT_VERB" "$SCRIPT_FILE""
echo "\n"



### ---  EXECUTE --- ###
# npx codeceptjs run --features --steps
# npx codeceptjs run --steps test_codeceptjs_9_e_test.js
# npx codeceptjs run --features --steps
npx codeceptjs $SCRIPT_VERB $SCRIPT_FILE



### ---  DONE --- ###
echo "\n\n"
echo "\033[1;33m ### END It is DONE !!! ### \033[0m"
echo "\n\n"
exit 0;
`
```bash
@echo off
:: * This file is part of the book package: "Redefining a test strategy for a P.O? Introduction to CodeceptJS (codecept.io), a End 2 End Testing framework. Usecase with WordPress."
::*
::* (c) Bruno Flaven <info@flaven.fr>
::* 
::* Intended to test a FRONTOFFICE and BACKOFFICE made with WP
::*
::* @package Codeception WordPress Testing 
::* @subpackage BACKOFFICE
::* @since codeceptVersion: 2.3.6, nodeInfo: 12.8.0, WordPress: 5.2.3, npx: 6.13.1
::*
    :::::::::::::::::::::::::::::::::::::::::::::
    ::                                         ::
    ::                                         ::
    ::      Launch CodeCP JS Windows           ::
    ::                                         ::
    ::                                         ::
    ::                                         ::
    :: ======================================= ::
    ::                                         ::
    ::                                         ::
    ::                                         ::
    :::::::::::::::::::::::::::::::::::::::::::::

    :: copyright
 
    echo        === Run CodeceptJS on Windows ===
    echo        === version 1.0 ===
    echo.

    :: VALUES
 
    :: set your proper path    
    set my_path_cpjs="C:\Users\bflaven\Documents\node_test_codeceptjs\"

    set dd=%date:~0,2%
    set mm=%date:~3,2%
    set yyyy=%date:~6,4%
 
 
    set hour=%time:~0,2%
    set min=%time:~3,2%
    set sec=%time:~6,2%
    set mmsec=%time:~9,2%

    title  === Run CodeceptJS on Windows ===
    Color 0A
    :: Debug if needed
    :: cd "C:\Users\bflaven\Documents\node_test_codeceptjs\"
    :: dir  /b /a-d
    :: cscript "npx codeceptjs run --steps try_windows_7_test.js"
    :: dir \*
    echo === BEGIN ===
    echo.
    echo.
    cd %my_path_cpjs%
    echo.
    echo === DEBUG %my_path_cpjs% ===
    echo.
    echo.
        
            :: script goes here    
            :: dir /b /a-d
            :: npx codeceptjs run --steps bach_create_article_draft_6_test.js

            :: SCRIPTS
            npx codeceptjs run --steps pokpoc_test_codeceptjs_2_test.js

            :: FEATURES
            :: npx codeceptjs run --features  --steps

    :: ############################################################# // PUT YOUR CODE HERE
 
    pause>nul
```

```python
#!/usr/bin/env python3

# USAGE
# python launch_npx_python_3.py

#VALUES
my_path='/Volumes/mi_disco/_discovering_codeceptjs_3/using_jenkins_1/'
my_script='launch_npx_good.sh'
my_test='npx codeceptjs run --steps test_codeceptjs_7_a_test.js'


print("\n--- Basic Automation with Python for CPJS---\n")
import sys
print("--- Python version "+sys.version+" ---\n")

#EXECUTE
import os 
os.system("cd " + my_path)
# os.system("sh " + my_script)
os.system("" + my_test)
```

```ruby
#!/usr/bin/env ruby
# USAGE
# ruby launch_npx_ruby_3.rb

# Set the correct values for your path and script
#VALUES
my_path='/Volumes/mi_disco/_discovering_codeceptjs_3/using_jenkins_1/'
my_script='launch_npx_good.sh'
my_test='npx codeceptjs run --steps test_codeceptjs_7_a_test.js'


print("\n--- Basic Automation with Ruby for CPJS---\n")
print("--- Ruby version #{ RUBY_VERSION } p#{ RUBY_PATCHLEVEL} ---\n\n")


#EXECUTE
system("cd #{my_path}")
# system("sh #{my_script}")
system("#{my_test}")

#OR

# puts %x{cd #{my_path}}
#puts %x{sh #{my_script}}
# puts %x{#{my_test}}
```

```bash
# log as admin on your mac in the console
sudo -s

# edit the hosts file
vi /etc/hosts

# add to your hosts file for the jenkins tool
127.0.0.1 local.jenkins.flaven.net
```


```bash

# update homebrew
brew update
brew doctor

#launch the install, require java, required to login as admin on your machine
brew cask install homebrew/cask-versions/adoptopenjdk8

#launch the install of jenkins latest
brew install jenkins-lts

```


```bash
cat /Users/[your-mac-user-name]/.jenkins/secrets/initialAdminPassword
```


```bash
<string>--httpListenAddress=127.0.0.1</string>
```

```bash
<string>--httpListenAddress=0.0.0.0</string>
```

```bash
<string>--httpPort=9090</string>
```

```yaml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
  <dict>
    <key>Label</key>
    <string>homebrew.mxcl.jenkins-lts</string>
    <key>ProgramArguments</key>
    <array>
      <string>/usr/libexec/java_home</string>
      <string>-v</string>
      <string>1.8</string>
      <string>--exec</string>
      <string>java</string>
      <string>-Dmail.smtp.starttls.enable=true</string>
      <string>-jar</string>
      <string>/usr/local/opt/jenkins-lts/libexec/jenkins.war</string>
      <string>--httpListenAddress=127.0.0.1</string>
      <string>--httpPort=9090</string>
    </array>
    <key>RunAtLoad</key>
    <true/>
  </dict>
</plist>

```


```bash
#To start Jenkins
brew services start jenkins-lts

#To stop Jenkins
brew services stop jenkins-lts

```

```bash
# add the PATH as Environment variables
# Print it in the console and add it to jenkins
echo $PATH
# Print out the path of your machine
#  just copy and paste /usr/local/bin:/usr/bin


```

```bash
# cpjs-using-jenkins-1
cd /Volumes/mi_disco/_discovering_codeceptjs_3/using_jenkins_1/
sh launch_npx_good.sh
```

```bash
# cpjs-using-jenkins-2
cd /Volumes/mi_disco/_discovering_codeceptjs_3/using_jenkins_1/
npx codeceptjs run --steps test_codeceptjs_7_a_test.js
```


```bash
# cpjs-using-jenkins-3
cd /Volumes/mi_disco/_discovering_codeceptjs_3/better_testing_management_2
npm run test:e2e:wp:full
```

```bash
# cpjs-using-jenkins-4
cd /Users/brunoflaven/Documents/02_copy/_discovering_codeceptjs_2/api-wp-postman-newman/
newman run 0003_codecepjs_WP_API.postman_collection.json -e wp_api_cpjs.postman_environment.json
```

```javascript
/**
 * This file is part of the book package: "Redefining a test strategy for a P.O? Introduction to CodeceptJS (codecept.io), a End 2 End Testing framework. Usecase with WordPress."
 *
 * (c) Bruno Flaven <info@flaven.fr>
 * 
 * Intended to test a FRONTOFFICE and BACKOFFICE made with WP
 *
 * @package Codeception WordPress Testing 
 * @subpackage BACKOFFICE
 * @since codeceptVersion: 2.3.6, nodeInfo: 12.8.0, WordPress: 5.2.3, npx: 6.13.1
 */
/*
NOTE: *** MAKE IT WORK ***
cd /Volumes/mi_disco/_discovering_codeceptjs_custome_runner_4/
node custom_runner_5.js

 */ 

const { codecept: Codecept, container } = require('codeceptjs');

const configuration = { 
  helpers: { 
        Puppeteer: {
              url: 'http://codecept.mydomain.priv/wordpress/',
              show: false,
              disableScreenshots: true,
              uniqueScreenshotNames: true,
              fullPageScreenshots: true,
              keepBrowserState: true,
              restart: false,
              keepCookies: true,
              waitForAction: 500,
              windowSize: '1280x960'
            }
  },
  include: {
    I: './steps_file.js',
    globalData: './_data/config/config_values_codecept.js',
    uiElement: './_data/ui/object_repository_ui_elements.js',
    pluginJournalist: './_data/plugin/plugin_post_type_journalist.js',
    loginPageObject: './pages/login.js',
    basePage: './pages/openMainArticle.js'
  },
  name: '_discovering_codeceptjs_custome_runner_4' 
};


const options = { 
  // equivalent to the argument --steps in the command line
  // steps: true,
  // equivalent to the argument --verbose in the command line
  // verbose: true
};

// create runner
const codecept = new Codecept(configuration, options);

// initialize codeceptjs in current dir
codecept.initGlobals(__dirname);

// create helpers, support files, mocha
container.create(configuration, options);

// initialize listeners
codecept.runHooks();

// run bootstrap function from config
codecept.runBootstrap((err) => {

// load tests
codecept.loadTests('*_test.js');

// run tests
codecept.run();
});


```

```bash
 Interactive shell started
 Use JavaScript syntax to try steps in action
 - Press ENTER to run the next step
 - Press TAB twice to see all available commands
 - Type exit + Enter to exit the interactive shell
```

```php
pause ();
```



```php

$I->wantTo('Backoffice :: ensure that I can check and change General Settings');
/* LOGIN */
$I->comment("\n--- LOGIN");
```


```javascript 
I.say('Backoffice :: ensure that I can check and change General Settings');
/* LOGIN */
I.say("\n--- LOGIN");
I.say("\n--- LOGIN RED", "red"); //red is used
I.say("\n--- LOGIN RED", "blue"); //blue is used
I.say("\n--- LOGIN RED"); //cyan is used
```

```php
//Go to the login
$I->amGoingTo('to pass the login page');
$I->amOnPage('/wp-login.php');
$I->comment('Backoffice :: enter username and password for WP');
$I->fillField('#user_login', LOGIN_USERNAME);
$I->fillField('#user_pass', secret(LOGIN_PASSWORD));
$I->click('Log In', '//*[@id="wp-submit"]');

// Go to the Admin page
$I->expect('to be connected and I can access to the WP dashboard');
$I->amOnPage('/wp-admin/');
$I->see(DASHBOARD_H1);
```

```javascript
I.say("to pass the login page");
I.amOnPage('wp-login.php');
I.say('Backoffice :: enter username and password for WP');
I.fillField({css: '#user_login'}, LOGIN_USERNAME);
I.fillField({css: '#user_pass'}, secret(LOGIN_PASSWORD));
I.click('Log In','//*[@id="wp-submit"]');

// Go to the Admin page
I.say('to be connected and I can access to the WP dashboard');
I.seeInCurrentUrl('/wp-admin/');
I.see(DASHBOARD_H1);

```

```bash
# Go to your directly where the postman collection and the environment files are...
cd /Users/brunoflaven/Documents/02_copy/_discovering_codeceptjs_2/

#List all the commands
npx codeceptjs list

```



