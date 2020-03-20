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


npx codeceptjs run --steps test_codeceptjs_11_b_test.js
npx codeceptjs run --steps --verbose test_codeceptjs_11_b_test.js

# with the stepByStepReport plugin
npx codeceptjs run --plugins stepByStepReport --steps test_codeceptjs_11_b_test.js

#with the stepByStepReport images + allure reports
npx codeceptjs run --plugins allure --plugins stepByStepReport  --steps test_codeceptjs_11_b_test.js


#with the stepByStepReport images + allure reports
npx codeceptjs run --plugins stepByStepReport --plugins allure --steps test_codeceptjs_11_b_test.js


npx codeceptjs run --steps --grep "@helper" test_codeceptjs_11_b_test.js
npx codeceptjs run --steps --verbose --grep "@post" test_codeceptjs_11_b_test.js

 */ 

// let mobile = require('./mobilecustomhelper_helper.js');

const { globalData, uiElement, pluginJournalist} = inject();

/* Features */

Feature('Advanced technics for CPJS @advanced @helper');
Scenario('Use Custom Helper', I => {
	
	I.say("\n--- mobile_helper");
	// I.say("\n--- mobile_helper", "red");
	// I.say("\n--- mobile_helper", "blue");



	I.sayHelloWorld("It comes from mobile_helper.js");
	I.say("\n--- tablet_helper");
	// I.say("\n--- tablet_helper", "red");
	// I.say("\n--- tablet_helper", "blue");
	// pause();

	I.TheMessage("It comes from tablet_helper.js");
	I.AnotherMeOnPage("http://codecept.mydomain.priv/wordpress/journalists/");

});






