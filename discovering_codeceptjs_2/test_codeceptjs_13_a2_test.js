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


npx codeceptjs run --steps test_codeceptjs_13_a2_test.js
npx codeceptjs run --steps --verbose test_codeceptjs_13_a2_test.js

npx codeceptjs run --steps --grep "@helper" test_codeceptjs_13_a2_test.js
npx codeceptjs run --steps --verbose --grep "@post" test_codeceptjs_13_a2_test.js

 */ 

// Values
const chai = require("chai");
require('chai').should();
const assert = chai.assert; 
const expect = chai.expect;

/* Feature */
Feature('01 :: API :: regular endpoint :: Posts listing');
Scenario('Test a GET request on endpoint Posts listing', async (I) => {

              describe('Basic requests and validation', () => {
              it('It should send GET requests and make some tests', async () => {
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

                    // console.log("\n\n--- DEBUG");
                    // console.log(postDetails.id);
                    // console.log(isNaN(postDetails.id));
                    // console.log(postDetails.title.rendered);
                    
                    // id
                    expect(isNaN(postDetails.id)).to.be.false;
                    postDetails.should.have.property('id');
                    
                    // Post elements
                    assert.isString(postDetails.title.rendered);
                    assert.isString(postDetails.content.rendered);
                    assert.isString(postDetails.excerpt.rendered);
                    assert.isNumber(postDetails.author);

                    // Media
                    assert.isNumber(postDetails.featured_media);
                    // console.log(postDetails.featured_media);
                    // console.log(postDetails.featured_media.toString().length);
                    if ((postDetails.featured_media.toString().length) > 1) {
                        I.say(" Infos :: Only post "+postDetails.id+" got a featured image");
                    } else {
                      expect(postDetails.featured_media.toString().length).to.equal(1);                      
                    }

                    expect(postDetails.title.rendered).to.be.a('string');
                    expect(postDetails.content.rendered).to.be.a('string');



                  // console.log(postDetails.categories);
                  // console.log(postDetails.tags);

                  // categories and tags
                  expect(postDetails.categories).to.be.an('array');
                  expect(postDetails.tags).to.be.an('array');
                  

                  // console.log("\n\n--- DEBUG");
                  // console.log(postDetails.categories);
                  // console.log(postDetails.categories.length);
                  
                        if (Array.isArray(postDetails.categories) && postDetails.categories.length) {
                             // array exists and is not empty
                             // console.log("\n\n--- DEBUG");
                              postDetails.categories.forEach(function(categorie) {
                              // console.log(categorie);
                              expect(categorie).to.be.a('number');
                              expect(isNaN(categorie)).to.be.false;
                              });
                        
                        } 
                        
                        if (Array.isArray(postDetails.tags) && postDetails.tags.length) {
                             // array exists and is not empty
                              // console.log("\n\n--- DEBUG");
                              postDetails.tags.forEach(function(tag) {
                              // console.log(tag);
                              expect(tag).to.be.a('number');
                              expect(isNaN(tag)).to.be.false;
                              });
                        
                        } 

                  }//EOL


              });
          });
    });






