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


npx codeceptjs run --steps test_codeceptjs_12_a_test.js
npx codeceptjs run --steps --verbose test_codeceptjs_12_a_test.js

# with the stepByStepReport plugin
npx codeceptjs run --plugins stepByStepReport --steps test_codeceptjs_12_a_test.js

#with the stepByStepReport images + allure reports
npx codeceptjs run --plugins allure --plugins stepByStepReport  --steps test_codeceptjs_12_a_test.js


#with the stepByStepReport images + allure reports
npx codeceptjs run --plugins stepByStepReport --plugins allure --steps test_codeceptjs_12_a_test.js


npx codeceptjs run --steps --grep "@helper" test_codeceptjs_12_a_test.js
npx codeceptjs run --steps --verbose --grep "@post" test_codeceptjs_12_a_test.js

 */ 


Feature('Testing Local WordPress Website @starting');
Scenario('Ensure I have the WP default baseline correct', (I) => {
    I.amOnPage('http://codecept.mydomain.priv/wordpress/');
    I.see('Just another WordPress site');
});






