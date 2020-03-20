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


npx codeceptjs run --steps test_codeceptjs_6_a_test.js
npx codeceptjs run --steps --verbose test_codeceptjs_6_a_test.js


npx codeceptjs run --steps --grep "@post" test_codeceptjs_6_a_test.js
npx codeceptjs run --steps --verbose --grep "@post" test_codeceptjs_6_a_test.js

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

    /*
    
    For info, the chunk of HTML code containing the field #user_login

  <input type="text" name="log" id="user_login" aria-describedby="login_error" class="input" value="" size="20" autocapitalize="off">
    

    



     */
      
});