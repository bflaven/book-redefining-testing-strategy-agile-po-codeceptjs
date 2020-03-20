/**
 * Postman wp_api_post_extended_post_5
 * Test Script file : ins_wp_api_post_extended_post_5.js
 * Pre-request Script file : pre_wp_api_post_extended_post_5.js
 * Version : 1.0
 * Description: Test WP REST API
 * Collection : 0003_codecepjs_WP_API.postman_collection.json
 * Method: POST
 */

pm.environment.set("RandomString", "title test api "+(Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15))+"");

pm.environment.set("RandomBody", "<p><b>payload TESTING WP API WITH POSTMAN</b></p>");

pm.environment.set("RandomExcerpt", "<p>payload TESTING WP API WITH POSTMAN This is a wp excerpt post</p>");

const RandomStringValue = pm.environment.get("RandomString");
const RandomBodyValue = pm.environment.get("RandomBody");
const RandomExcerptValue = pm.environment.get("RandomExcerpt");

console.log ("PREREQUEST :: ENVIRONMENT :: RandomStringValue :: "+RandomStringValue+" ");
console.log ("PREREQUEST :: ENVIRONMENT :: RandomBodyValue :: "+RandomBodyValue+" ");
console.log ("PREREQUEST :: ENVIRONMENT :: RandomExcerptValue :: "+RandomExcerptValue+" ");
