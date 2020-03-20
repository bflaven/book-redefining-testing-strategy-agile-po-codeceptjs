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


npx codeceptjs run --steps test_codeceptjs_10_c_test.js
npx codeceptjs run --steps --verbose test_codeceptjs_10_c_test.js

# with the stepByStepReport plugin
npx codeceptjs run --plugins stepByStepReport --steps test_codeceptjs_10_c_test.js

#with the stepByStepReport images + allure reports
npx codeceptjs run --plugins allure --plugins stepByStepReport  --steps test_codeceptjs_10_c_test.js


#with the stepByStepReport images + allure reports
npx codeceptjs run --plugins stepByStepReport --plugins allure --steps test_codeceptjs_10_c_test.js


npx codeceptjs run --steps --grep "@post" test_codeceptjs_10_c_test.js
npx codeceptjs run --steps --verbose --grep "@post" test_codeceptjs_10_c_test.js

 */ 

/* Config V1 */
// let globals = require('./_data/config/config_values_codecept.js');

/* Config V2 */
/* 
      * to inject the properties for globalData object 
      * e.g. `objectName.propertyName` or `objectName["propertyName 
*/

/* REQUIREMENTS */
let assert = require('assert');


const { globalData, uiElement, pluginJournalist, loginPageObject} = inject();

// const { globalData} = inject();

/* Features */

Feature('Backoffice :: Ensure the views for Journalists in Front, based on plugin post_type check codeception_journalist_extended_profile @advanced @plugin @journalist');
/* 
    * add if needed globalData, uiElement, pluginJournalist 
    * but not require
*/
Scenario('Check WP Backoffice Journalist profile creation', async (I) => {

    

    I.say("\n--- LOGIN");
    I.amOnPage('wp-login.php');
    I.say('Backoffice :: enter username and password for WP');
    
    /* V1 */
    /*
    I.fillField({css: uiElement.css_user_login}, globalData.LOGIN_USERNAME);
    I.fillField({css: uiElement.css_user_pass}, secret(globalData.LOGIN_PASSWORD));
    I.click(globalData.LOGIN_BTN_LABEL, uiElement.css_wp_submit);
    */
    
    // V2 using a PageObject    
    loginPageObject.FunctionSendForm(globalData.LOGIN_USERNAME, globalData.LOGIN_PASSWORD);


    I.seeInCurrentUrl('/wp-admin/');
    I.see(globalData.DASHBOARD_H1, 'h1');


    I.say('\n--- Connection made with function loginPageObject. Check ./pages/login.js');
/*
    I.say('\n--- ADD NEW JOURNALIST PROFILE');

        I.click(pluginJournalist.PLUGIN_JOURNALIST_LABEL);
        I.seeInCurrentUrl('/wp-admin/edit.php?post_type=journalists');

        I.see(pluginJournalist.PLUGIN_JOURNALIST_STATUS);
        I.click(pluginJournalist.PLUGIN_JOURNALIST_STATUS, pluginJournalist.css_plugin_journalist_published); 
        I.seeInCurrentUrl('/wp-admin/edit.php?post_status=publish&post_type=journalists');

        I.see(pluginJournalist.PLUGIN_JOURNALIST_ADD_NEW_BTN);
        // Add a new journalist
        I.click(pluginJournalist.PLUGIN_JOURNALIST_ADD_NEW_BTN, pluginJournalist.css_plugin_add_new_journalist);
                I.seeInCurrentUrl('/wp-admin/post-new.php?post_type=journalists');
  
  

    I.say('I am about to fill and publish a journalist profile.');

    // Add a title for journalist
    I.fillField(pluginJournalist.css_plugin_form_title, ''+globalData.startDateString+' Test journalist profile title CodeceptJS '+globalData.RandomString+' '); 

    // Add a content for journalist
    I.fillField(pluginJournalist.css_plugin_form_content, ''+globalData.startDateString+' Test journalist profile content CodeceptJS '+globalData.RandomString+'');


    // Add a excerpt for journalist
    I.fillField(pluginJournalist.css_plugin_form_excerpt, ''+globalData.startDateString+' Test journalist profile excerpt CodeceptJS '+globalData.RandomString+'');
        
    // Languages
    I.say('I fill Languages in journalist\'s profile.');

    pluginJournalist.JOURNALIST_LANGUAGES_CHECKLIST.forEach((locator, index) => {
        // I.say('\n--- '+locator+' '+index+'');
        I.checkOption(locator);
    });
    // Expertises
    I.say('I fill Expertises in journalist\'s profile.');
    pluginJournalist.JOURNALIST_EXPERTISES_CHECKLIST.forEach((locator, index) => {
        // I.say('\n--- '+locator+' '+index+'');
        I.checkOption(locator);
    });
    // Publish
    I.click(pluginJournalist.css_plugin_form_publish);
    // I.click(POST_VIEW_POST_LABEL);
    I.click(pluginJournalist.css_plugin_form_message);
    

    // Chck the journalist profile
    I.see('Test journalist profile title CodeceptJS');
    I.see('Test journalist profile content CodeceptJS');

    // Journalist
    I.say('\n--- JOURNALIST PROFILE The journaliste profile has been created.');
*/

});






