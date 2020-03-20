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


npx codeceptjs run --steps test_codeceptjs_13_c_test.js
npx codeceptjs run --steps --verbose test_codeceptjs_13_c_test.js

npx codeceptjs run --steps --grep "@helper" test_codeceptjs_13_c_test.js
npx codeceptjs run --steps --verbose --grep "@post" test_codeceptjs_13_c_test.js

 */ 
require('chai').should();

const axios = require('axios');
const chai = require("chai");

const assert = chai.assert; // Using Assert style

const expect = require('chai').expect;
const {I} = inject();

/* Feature */
/*
Feature('01 :: FRONTOFFICE :: Testing Local WordPress Website @starting');
Scenario('Ensure I have the WP default baseline correct', (I) => {
    I.amOnPage('http://codecept.mydomain.priv/wordpress/');
    I.see('Just another WordPress site');
});
*/

/*
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

                    // console.log(postDetails.id);
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
*/

Feature('03 :: API :: testing posts end-point');


/*
Scenario('Verify a successful call', async () => {
	const res = await I.sendGetRequest('/wp-json/wp/v2/posts?page=1');
	expect(res.status).to.eql(200);
});


Scenario('Verify a not found call', async () => {
	const res = await I.sendGetRequest('/wp-json/wp/v2/users/266');
	expect(res.status).to.eql(404);
});
*/
/*
Scenario('Verify getting a single user', async () => {
	const res = await I.sendGetRequest('/wp-json/wp/v2/users/6');	
	// console.log(res.data);
	expect(res.data.id).to.eql(6);
	expect(res.data.name).to.eql('Alvis');

	
});
*/
/*
Scenario('Verify getting list of posts', async () => {
	const res = await I.sendGetRequest('/wp-json/wp/v2/posts?page=2');
	// console.log(res);

          assert(res.status === 200, "Status is not 200.");


          // console.log ('DEBUG :: '+(typeof(res))+' ');

          expect((typeof(res))).to.equal("object");
          assert.isObject(res);
          assert.isArray(res.data);



      for (var post in res.data) {

                    let postDetails = res.data[post];

                    // console.log ('DEBUG :: id :: '+(postDetails.id)+' ');
                    // console.log ('DEBUG :: title :: '+(postDetails.title.rendered)+' ');
                    // console.log ('DEBUG :: '+(parseInt(postDetails.id, 10))+' ');
                    // console.log ('DEBUG :: '+(isNaN(parseInt(postDetails.id, 10)))+' ');


                    postDetails.should.have.property('id');

                    // assert
                    assert.isString(postDetails.title.rendered);
                    assert.isString(postDetails.content.rendered);
                    assert.isString(postDetails.excerpt.rendered);
                    assert.isNumber(postDetails.author);
                    assert.isNumber(postDetails.featured_media);
                    
                    // expect
                    expect(postDetails.id).to.be.a('number').and.not.to.be.null;
                    expect((parseInt(postDetails.id, 10))).to.be.a('number').and.not.to.be.null;
                    expect((isNaN(parseInt(postDetails.id, 10)))).to.be.false;                    
                    expect(typeof(postDetails.id)).to.deep.equal('number');

                }//EOL
	               
                 
	 
});
*/

Scenario('Verify getting a single user', async () => {
	const res = await I.sendGetRequest('/wp-json/wp/v2/users/1');
  /*
        console.log (res.data.id);
        console.log (res.data.name);
        console.log (res.data.link);
  */

    // assert
    assert.isString(res.data.name);
    assert.isString(res.data.link);


    // expect
    expect(res.data.id).to.be.a('number').and.not.to.be.null;
    expect((parseInt(res.data.id, 10))).to.be.a('number').and.not.to.be.null;
    expect((isNaN(parseInt(res.data.id, 10)))).to.be.false;                    
    expect(typeof(res.data.id)).to.deep.equal('number');

        
      
});


/*
Feature('02 :: API :: Rosie Api Feature testing');
Scenario("02 :: API :: Rosie Api TEST_01", async (I) => {
axios.get('http://codecept.mydomain.priv/wordpress/wp-json/wp/v2/posts')
  .then((response) => {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  });

});

*/

