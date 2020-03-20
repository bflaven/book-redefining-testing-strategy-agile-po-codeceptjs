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


npx codeceptjs run --steps test_codeceptjs_13_a_test.js
npx codeceptjs run --steps --verbose test_codeceptjs_13_a_test.js

npx codeceptjs run --steps --grep "@helper" test_codeceptjs_13_a_test.js
npx codeceptjs run --steps --verbose --grep "@post" test_codeceptjs_13_a_test.js

 */ 

// const axios = require('axios').default;
const chai = require("chai");
require('chai').should();
const assert = chai.assert; // Using Assert style



/* Feature */
/*
Feature('01 :: FRONTOFFICE :: Testing Local WordPress Website @starting');
Scenario('Ensure I have the WP default baseline correct', (I) => {
    I.amOnPage('http://codecept.mydomain.priv/wordpress/');
    I.see('Just another WordPress site');
});
*/


Feature('02 :: API :: testing posts end-point');
Scenario('test a GET request', async (I) => {

              describe('basic requests', () => {
                
              it('should send GET requests', async () => {
              response = await I.sendGetRequest('/wp-json/wp/v2/posts');

              // required
              I.amOnPage('/wp-json/wp/v2/posts');

              // output
              // console.log(response.data);
              response.status.should.eql(200);

              //check json object
              response.data.should.be.an('array');
                for (var post in response.data) {

                    let postDetails = response.data[post];

                    console.log(postDetails.id);
                    // console.log(postDetails.title.rendered);

                    // postDetails.should.have.property('id');
                    // assert.isString(postDetails.title.rendered);
                    // assert.isString(postDetails.content.rendered);
                    // assert.isString(postDetails.excerpt.rendered);
                    // assert.isNumber(postDetails.author);
                    // assert.isNumber(postDetails.featured_media);
                }//EOL

              });
          });
    });






