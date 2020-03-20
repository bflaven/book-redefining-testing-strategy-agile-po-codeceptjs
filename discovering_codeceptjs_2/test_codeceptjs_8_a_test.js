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

npx codeceptjs run --steps test_codeceptjs_8_a_test.js
npx codeceptjs run --steps --verbose test_codeceptjs_8_a_test.js


npx codeceptjs run --steps --grep "@post" test_codeceptjs_8_a_test.js
npx codeceptjs run --steps --verbose --grep "@post" test_codeceptjs_8_a_test.js

 */ 

/* Config V1 */
// let globals = require('./_data/config/config_values_codecept.js');

/* Config V2 */
/* 
      * to inject the properties for globalData object 
      * e.g. `objectName.propertyName` or `objectName["propertyName 
*/
const { globalData } = inject();

/* REQUIREMENTS */
let assert = require('assert');


Feature('Backoffice :: ensure that I publish a post with Tags and Categories @advanced @creation @post');
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
    I.say(''+globalData.POST_CATEGORY_CHECKLIST+'');
    I.say(''+globalData.POST_TAGS_LIST+'');
    I.say("\n###\n");


  
});



