/**
 * Postman wp_api_post_extended_post_3a
 * Test Script file : ins_wp_api_post_extended_post_3a.js
 * Pre-request Script file : pre_wp_api_post_extended_post_3a.js
 * Version : 1.0
 * Description: Test WP REST API
 * Collection : 0003_codecepjs_WP_API.postman_collection.json
 * Method: GET
 */



/*
pm.sendRequest("https://postman-echo.com/get", function (err, response) {
    console.log(response.json());
});
*/


// pm.environment.set("timestampHeader", new Date());
pm.environment.set("TimestampHeader", new Date() );

pm.environment.set("RandomString", (Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)));

// using lodash
pm.environment.set("RandomOneLodash", _.random(1,300));
pm.environment.set("RandomTwoLodash", _.random(1,60));
pm.environment.set("RandomThreeLodash", _.random(1,400));
pm.environment.set("RandomFourLodash", _.random(1,50));

pm.environment.set("RandomTxtLodash", _.times(20, () => _.random(35).toString(36)).join(''));


// PREREQUEST

const {Property} = require('postman-collection');
let randomInt = Property.replaceSubstitutions("{{$randomInt}}");
let randomLoremText = Property.replaceSubstitutions("{{$randomLoremText}}");


console.log ("PREREQUEST :: ENVIRONMENT :: randomInt :: "+randomInt+" ");
console.log ("PREREQUEST :: ENVIRONMENT :: randomLoremText :: "+randomLoremText+" ");

