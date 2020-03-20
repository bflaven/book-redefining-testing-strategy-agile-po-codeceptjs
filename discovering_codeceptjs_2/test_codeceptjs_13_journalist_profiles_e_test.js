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


npx codeceptjs run --steps test_codeceptjs_13_journalist_profiles_e_test.js
npx codeceptjs run --steps --verbose test_codeceptjs_13_journalist_profiles_e_test.js

npx codeceptjs run --steps --grep "@helper" test_codeceptjs_13_journalist_profiles_e_test.js
npx codeceptjs run --steps --verbose --grep "@post" test_codeceptjs_13_journalist_profiles_e_test.js

 */ 

const chai = require("chai");
require('chai').should();
const assert = chai.assert; 
const expect = chai.expect;


/* Feature */
/*
Feature('01 :: FRONTOFFICE :: Testing Local WordPress Website @starting');
Scenario('Ensure I have the WP default baseline correct', (I) => {
    I.amOnPage('http://codecept.mydomain.priv/wordpress/');
    I.see('Just another WordPress site');
});
*/


Feature('02 :: API :: testing posts end-point journalist\'s profiles ');
Scenario('test a GET request', async (I) => {

      describe('basic requests', () => {
        
      it('should send GET requests', async () => {
      response = await I.sendGetRequest('/wp-json/journalists/v1/profiles');

      // required
      I.amOnPage('/wp-json/journalists/v1/profiles');

      // output
      // console.log(response.data);
      response.status.should.eql(200);

      //check json object
      response.data.should.be.an('object');

            Object.keys(response.data).forEach(function (journalist) {
            // journalist is an id
            // console.log(journalist);
            // console.log(isNaN(journalist));
            expect(isNaN(journalist)).to.be.false;

            // console.log(response.data[journalist]);
                let journalistDetails = response.data[journalist];
                // console.log("\n\n--- DEBUG");
                // console.log("name :: "+journalistDetails.title); 

                  journalistDetails.should.have.property('title');
                  journalistDetails.should.have.property('content');
                  journalistDetails.should.have.property('author');
                  journalistDetails.should.have.property('twitter_account');
                  journalistDetails.should.have.property('facebook_account');
                  journalistDetails.should.have.property('linkedin_account');


                  assert.isString(journalistDetails.title);
                  assert.isString(journalistDetails.content);
                  assert.isString(journalistDetails.excerpt);
                  assert.isString(journalistDetails.author);
                  assert.isString(journalistDetails.twitter_account);
                  assert.isString(journalistDetails.facebook_account);
                  assert.isString(journalistDetails.linkedin_account);

                  
                  

                  expect(journalistDetails.content).to.be.a('string');
                  expect(journalistDetails.excerpt).to.be.a('string');

                  // console.log(journalistDetails.expertises);
                  // console.log(journalistDetails.languages);

            
                  let journalistExpertiseDetails = journalistDetails.expertises;
                  Object.keys(journalistExpertiseDetails).forEach(function (expertise) {
                    // console.log("expertises :: "+expertise); // key
                    // console.log("expertises :: "+journalistExpertiseDetails[expertise].term_id);
                    // console.log("expertises :: "+journalistExpertiseDetails[expertise].name);
                    
                    


                    journalistExpertiseDetails[expertise].should.have.property('term_id');
                    journalistExpertiseDetails[expertise].should.have.property('name');
                    journalistExpertiseDetails[expertise].should.have.property('slug');
                    journalistExpertiseDetails[expertise].should.have.property('taxonomy');

                    assert.isNumber(journalistExpertiseDetails[expertise].term_id);
                    assert.isString(journalistExpertiseDetails[expertise].name);
                    assert.isString(journalistExpertiseDetails[expertise].taxonomy);

                    expect(journalistExpertiseDetails[expertise].term_id).to.be.a('number');
                    expect(journalistExpertiseDetails[expertise].name).to.be.a('string');
                    expect(journalistExpertiseDetails[expertise].taxonomy).to.be.a('string');


                    expect(journalistExpertiseDetails[expertise].taxonomy).to.deep.equal('expertises');
 

                  });

                  let journalistLanguageDetails = journalistDetails.languages;
                  Object.keys(journalistLanguageDetails).forEach(function (language) {
                    // console.log("languages :: "+language); // key
                    // console.log("languages :: "+journalistExpertiseDetails[language].term_id);
                    // console.log("languages :: "+journalistLanguageDetails[language].name);

                    journalistLanguageDetails[language].should.have.property('term_id');
                    journalistLanguageDetails[language].should.have.property('name');
                    journalistLanguageDetails[language].should.have.property('slug');
                    journalistLanguageDetails[language].should.have.property('taxonomy');

                    assert.isNumber(journalistLanguageDetails[language].term_id);
                    assert.isString(journalistLanguageDetails[language].name);
                    assert.isString(journalistLanguageDetails[language].taxonomy);
                    assert.isString(journalistLanguageDetails[language].taxonomy);

                    expect(journalistLanguageDetails[language].term_id).to.be.a('number');
                    expect(journalistLanguageDetails[language].name).to.be.a('string');
                    expect(journalistLanguageDetails[language].taxonomy).to.be.a('string');

                    expect(journalistLanguageDetails[language].taxonomy).to.deep.equal('languages');

                  });

            });
      });
  });
});






