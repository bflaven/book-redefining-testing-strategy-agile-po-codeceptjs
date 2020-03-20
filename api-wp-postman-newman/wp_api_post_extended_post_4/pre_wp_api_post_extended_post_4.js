/**
 * Postman wp_api_post_extended_post_4
 * Test Script file : ins_wp_api_post_extended_post_4.js
 * Pre-request Script file : pre_wp_api_post_extended_post_4.js
 * Version : 1.0
 * Description: Test WP REST API
 * Collection : 0003_codecepjs_WP_API.postman_collection.json
 * Method: POST
 */


pm.environment.set("RandomString", (Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)));
var RandomStringValue = pm.environment.get("RandomString");
console.log ("PREREQUEST :: ENVIRONMENT :: RandomStringValue :: "+RandomStringValue+" ");