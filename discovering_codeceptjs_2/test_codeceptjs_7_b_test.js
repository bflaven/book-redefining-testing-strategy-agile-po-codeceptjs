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

npx codeceptjs run --steps test_codeceptjs_7_b_test.js
npx codeceptjs run --steps --verbose test_codeceptjs_7_b_test.js


npx codeceptjs run --steps --grep "@post" test_codeceptjs_7_b_test.js
npx codeceptjs run --steps --verbose --grep "@post" test_codeceptjs_7_b_test.js

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


// @general @writing
Feature('Backoffice :: ensure that I can check and change General Settings @settings @general');
Scenario('Check WP Backoffice', async (I) => {

        I.say("\n--- LOGIN");
        I.amOnPage('wp-login.php');
        I.say('Backoffice :: enter username and password for WP');
        I.fillField({css: '#user_login'}, globalData.LOGIN_USERNAME);
        // I.fillField({css: '#user_pass'}, globalData.LOGIN_PASSWORD);
        I.fillField({css: '#user_pass'}, secret(globalData.LOGIN_PASSWORD));
        I.click('Log In','//*[@id="wp-submit"]');
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


    // This prints the value selected
    I.say('--- DEBUG :: //*[@id="default_email_category"]/option[10] :: label = '+default_email_category+' length = '+default_email_category.length+'');

    // Uncategorized
    assert.equal(default_email_category, 'Uncategorized');
    assert.equal(default_email_category.length, 13);
    

});


Scenario('Backoffice :: ensure that I can check and change Reading Settings @settings @reading', async (I) => {

        I.say("\n--- LOGIN");
        I.amOnPage('wp-login.php');
        I.say('Backoffice :: enter username and password for WP');
        I.fillField({css: '#user_login'}, globalData.LOGIN_USERNAME);
        // I.fillField({css: '#user_pass'}, LOGIN_PASSWORD);
        I.fillField({css: '#user_pass'}, secret(globalData.LOGIN_PASSWORD));
        I.click('Log In','//*[@id="wp-submit"]');
        I.seeInCurrentUrl('/wp-admin/');
        I.see(globalData.DASHBOARD_H1, 'h1');

    I.say("\n--- SETTING");
    I.click('//*[@id="menu-settings"]/a/div[3]');
    // Check I am on /wp-admin/options-general.php
    I.seeInCurrentUrl('/wp-admin/options-general.php');
    // See General Settings
    I.see(globalData.GENERAL_SETTINGS_H1, '#wpbody-content > div.wrap > h1');

    // Main Navigation
    I.say('\n--- OPTIONS-READING');
    // SETTING
    // Check some values from http://project.test/wordpress/wp-admin/options-reading.php
    // Click on Settings
    I.click('//*[@id="menu-settings"]/ul/li[4]/a');
    //
    // Check I am on /wp-admin/options-general.php
    I.seeInCurrentUrl('/wp-admin/options-reading.php');

    // See Reading Settings
    I.see(globalData.READING_SETTINGS_H1, '#wpbody-content > div.wrap > h1');



    // Your homepage displays
    I.say('--- TESTING :: Your homepage displays :: Your latest posts :: default (posts)');
    const show_on_front = await I.grabAttributeFrom('input[name=show_on_front]', 'value');
    I.say('--- DEBUG :: input[name=show_on_front] :: '+show_on_front+'');
    I.say('--- TESTING :: Your homepage displays :: Your latest posts :: default (posts)');
    // I.seeInField('input[name=show_on_front]', show_on_front);
    I.seeCheckboxIsChecked({xpath: 'input[name=show_on_front]'});

    I.say("\n###\n");
    I.say('--- TESTING :: Your homepage displays :: Your latest posts :: change default (page)');
    
    let show_on_front_posts = await I.grabAttributeFrom('//*[@id="front-static-pages"]/fieldset/p[1]/label/input', 'value');

    let show_on_front_page = await I.grabAttributeFrom('//*[@id="front-static-pages"]/fieldset/p[2]/label/input', 'value');


        I.say('--- CAUTION DEBUG :: input[name=show_on_front] :: posts :: '+show_on_front_posts+'');
        I.say('--- CAUTION DEBUG :: input[name=show_on_front] :: page :: '+show_on_front_page+'');

        I.checkOption('//*[@id="front-static-pages"]/fieldset/p[2]/label/input');
        // I.selectOption('input[name=show_on_front]','page');
    
    
    I.say("\n###\n");


    // Blog pages show at most
    I.say('--- TESTING :: Blog pages show at most');
    const posts_per_page = await I.grabAttributeFrom('//*[@id="posts_per_page"]', 'value');
    I.say('--- DEBUG :: select[name=posts_per_page] :: '+posts_per_page+'');
    I.seeInField('//*[@id="posts_per_page"]', posts_per_page);

    // Syndication feeds show the most recent
    I.say('--- TESTING :: Syndication feeds show the most recent');
    const posts_per_rss = await I.grabAttributeFrom('//*[@id="posts_per_rss"]', 'value');
    I.say('--- DEBUG :: select[name=posts_per_rss] :: '+posts_per_rss+'');
    I.seeInField('//*[@id="posts_per_rss"]', posts_per_rss);


    // For each post in a feed, include
    I.say('--- TESTING :: For each post in a feed, include');
    const rss_use_excerpt = await I.grabAttributeFrom('input[name=rss_use_excerpt]', 'value');
    I.say('--- DEBUG :: input[name=rss_use_excerpt] :: '+rss_use_excerpt+'');


    I.say('--- TESTING :: For each article in a feed, show :: Summary (1) ');
    const rss_use_excerpt_summary = await I.grabAttributeFrom('input[name=rss_use_excerpt]', 'value');
    I.say('--- DEBUG :: input[name=rss_use_excerpt] :: Summary (1) :: '+rss_use_excerpt_summary+'');
    I.checkOption('//*[@id="wpbody-content"]/div[3]/form/table/tbody/tr[4]/td/fieldset/p[1]/label[2]/input');
    I.click('//*[@id="submit"]');
    
    
                I.say('--- TESTING :: Search Engine Visibility :: checked');
                // I.seeCheckboxIsChecked('#blog_public'); // YES checked

                // I.say('--- TESTING :: Search Engine Visibility :: unchecked again to proceed to more testing');
                // I.uncheckOption('//*[@id="blog_public"]');
                // I.click('//*[@id="submit"]');
                I.dontSeeCheckboxIsChecked('//*[@id="blog_public"]'); // NO unchecked

});



