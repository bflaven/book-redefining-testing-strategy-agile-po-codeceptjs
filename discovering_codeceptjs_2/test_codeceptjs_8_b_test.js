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

npx codeceptjs run --steps test_codeceptjs_8_b_test.js
npx codeceptjs run --steps --verbose test_codeceptjs_8_b_test.js


npx codeceptjs run --steps --grep "@post" test_codeceptjs_8_b_test.js
npx codeceptjs run --steps --verbose --grep "@post" test_codeceptjs_8_b_test.js

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

/* Features */

Feature('Backoffice :: ensure ensure that I can send an image in the media library @advanced @media');
Scenario('Check WP Backoffice Upload a media', async (I) => {

        I.say("\n--- LOGIN");
        I.amOnPage('wp-login.php');
        I.say('Backoffice :: enter username and password for WP');
        I.fillField({css: '#user_login'}, globalData.LOGIN_USERNAME);
        // I.fillField({css: '#user_pass'}, globalData.LOGIN_PASSWORD);
        I.fillField({css: '#user_pass'}, secret(globalData.LOGIN_PASSWORD));
        I.click('Log In','//*[@id="wp-submit"]');
        I.seeInCurrentUrl('/wp-admin/');
        I.see(globalData.DASHBOARD_H1, 'h1');


        I.say('\n--- UPLOAD MEDIA');  
        I.click('Media','//*[@id="menu-media"]/a/div[3]');
        // Go direct to the Add New link in Media
        I.click('Add New','//*[@id="menu-media"]/ul/li[3]/a');
        I.seeInCurrentUrl('/wp-admin/media-new.php');
        I.see(globalData.UPLOAD_NEW_MEDIA_LABEL_BTN);
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

    // Post with no plugin
    I.say('\n--- UPLOAD MEDIA The image have been uploaded, I should see it in Media Library.');


});


/*
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
*/


