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

npx codeceptjs run --steps test_codeceptjs_6_e_test.js
npx codeceptjs run --steps --verbose test_codeceptjs_6_e_test.js



npx codeceptjs run --steps --grep "@post" test_codeceptjs_6_e_test.js
npx codeceptjs run --steps --verbose --grep "@post" test_codeceptjs_6_e_test.js

 */ 

/* Config V1 */
// let globals = require('./_data/config/config_values_codecept.js');

/* Config V2 */
/* 
      * to inject the properties for globalData object 
      * e.g. `objectName.propertyName` or `objectName["propertyName 
*/
const { globalData } = inject();


// @general @writing
Feature('Backoffice :: ensure that I can login and publish a post @post @creation');

/*
Scenario('Check WP Backoffice Post creation', async (I) => {


  I.say("\n--- LOGIN");
  I.amOnPage('wp-login.php');
  I.say('Backoffice :: enter username and password for WP');
  I.fillField({css: '#user_login'}, globalData.LOGIN_USERNAME);
  // I.fillField({css: '#user_pass'}, globalData.LOGIN_PASSWORD);
  I.fillField({css: '#user_pass'}, secret(globalData.LOGIN_PASSWORD));
  I.click('Log In','//*[@id="wp-submit"]');
  I.seeInCurrentUrl('/wp-admin/');
  I.see(globalData.DASHBOARD_H1, 'h1');

    I.say('\n--- POST');

    // Add a post
    I.click(globalData.POSTS_LINK_LABEL);
    
    I.click(globalData.POST_NEW_LABEL);
    I.see(globalData.POST_NEW_TITLE);
    // Check I am on /wp-admin/post-new.php
    I.seeInCurrentUrl('/wp-admin/post-new.php');

    // Add a title for Post
    I.fillField('#title', ' '+globalData.startDateString+' Test title article codeceptJS '+globalData.andomString+' '); 

    // Add a content for Post
    I.fillField('#content', ''+globalData.startDateString+' Test content article codeceptJS '+globalData.RandomString+' ');

    // Publish
    I.click('#publish');
    I.click(globalData.POST_VIEW_POST_LABEL);

    // Post with no plugin
    I.see('Test content article codeceptJS');

});

*/
Scenario('Backoffice :: ensure that I can debug @debug', async (I) => {

    I.say("\n###\n");
    I.say('--- HARD DEBUG');
    I.say("\n");    
    I.say('globalData.DASHBOARD_H1 => '+globalData.DASHBOARD_H1+'');
    I.say('globalData["DASHBOARD_H1"] => '+globalData["DASHBOARD_H1"]+'');
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
