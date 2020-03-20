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

npx codeceptjs run --steps test_codeceptjs_3_test.js
npx codeceptjs run --steps --verbose test_codeceptjs_3_test.js


npx codeceptjs run --steps --grep "@starting" test_codeceptjs_3_test.js
npx codeceptjs run --steps --verbose --grep "@starting" test_codeceptjs_3_test.js

*/


Feature('Beginning CPJS 1 @starting');
Scenario('test something 1', (I) => {
    I.say('tag @starting');
});

Feature('Beginning CPJS 2 @expert');
Scenario('test something 2', (I) => {
      I.say('tag @expert');
});

Feature('Beginning CPJS 3');
Scenario('test something again 3', (I) => {
      I.say('tag @advanced');
}).tag('@advanced').tag('important');





