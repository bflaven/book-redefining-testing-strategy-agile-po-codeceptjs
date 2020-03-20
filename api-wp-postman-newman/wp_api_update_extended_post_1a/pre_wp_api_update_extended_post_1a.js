/**
 * Postman wp_api_update_extended_post_1a
 * Test Script file : ins_wp_api_update_extended_post_1a.js
 * Pre-request Script file : pre_wp_api_update_extended_post_1a.js
 * Version : 1.0
 * Description: Test WP REST API
 * Collection : 0003_codecepjs_WP_API.postman_collection.json
 * Method: POST
 */

// Caution the post id must exist...
const wp_post_id_to_update="1352";
pm.environment.set("UpdatePostId", wp_post_id_to_update);
console.log ("ENVIRONMENT :: wp_post_id_to_update :: "+wp_post_id_to_update+" ");

pm.environment.set("TimestampHeader", "my update date "+new Date()+" end of the upadte date for post" );
pm.environment.set("RandomString", "text for post "+(Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15))+" end of the text for post ");



var TimestampHeader = pm.environment.get("TimestampHeader");
var RandomString = pm.environment.get("RandomString");

console.log ("ENVIRONMENT :: TimestampHeader :: "+TimestampHeader+" ");
console.log ("ENVIRONMENT :: RandomString :: "+RandomString+" ");

