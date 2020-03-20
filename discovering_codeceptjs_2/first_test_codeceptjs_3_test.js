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

npx codeceptjs run --steps first_test_codeceptjs_3_test.js
npx codeceptjs run --steps --verbose first_test_codeceptjs_3_test.js


npx codeceptjs run --steps --grep "@starting" first_test_codeceptjs_3_test.js
npx codeceptjs run --steps --verbose --grep "@automate" first_test_codeceptjs_3_test.js

*/


Feature('-- Beginning CPJS 1  How to automate your tests ? @automate');
Scenario('test something 1',  async (I) => {
	    I.say('\n ### @automate. Check first_test_codeceptjs_3_test.js ###', 'blue');
	     I.say('tag @automate');
});


// Call with command: npx codeceptjs run --steps --grep "@starting"
Feature('-- Beginning CPJS 2 @starting');
Scenario('test something 2', (I) => {
    I.say('tag @starting');
});

// Call with command: npx codeceptjs run --steps --grep "@expert"
Feature('-- Beginning CPJS 3 @expert');
Scenario('test something 3', (I) => {
      I.say('tag @expert');
});

// Call with command: npx codeceptjs run --steps --grep "@advanced"
// Call with command: npx codeceptjs run --steps --grep "@important"

Feature('-- Beginning CPJS 4');
Scenario('test something again 4', (I) => {
      I.say('tag @advanced');
}).tag('@advanced').tag('important');

