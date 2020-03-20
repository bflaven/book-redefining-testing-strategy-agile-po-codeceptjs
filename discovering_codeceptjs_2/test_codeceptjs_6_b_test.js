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

npx codeceptjs run --steps test_codeceptjs_6_b_test.js
npx codeceptjs run --steps --verbose test_codeceptjs_6_b_test.js


npx codeceptjs run --steps --grep "@post" test_codeceptjs_6_b_test.js
npx codeceptjs run --steps --verbose --grep "@post" test_codeceptjs_6_b_test.js

 */ 

let globalData = require('./_data/config/config_values_codecept.js');

/*  
  * All the constants will be removed and externalise in a file in _data/config_values_codecept.js
*/
/*--- BEGIN ---*/ 

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

/*--- END ---*/  
/*
  * Stop before the beginning of your tests !
*/

// @general @writing
Feature('Backoffice :: ensure that I can login and publish a post @post @creation');
Scenario('Check WP Backoffice Post creation', async (I) => {

/*

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
*/
});


Scenario('Backoffice :: ensure that I can debug @debug', async (I) => {

    I.say("\n###\n");
    I.say('--- HARD DEBUG');
    
    I.say(''+globalData.LOGIN_USERNAME+'');
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
