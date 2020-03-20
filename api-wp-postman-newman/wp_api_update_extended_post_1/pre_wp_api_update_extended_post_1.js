/**
 * Postman wp_api_update_extended_post_1
 * Test Script file : ins_wp_api_update_extended_post_1.js
 * Pre-request Script file : pre_wp_api_update_extended_post_1.js
 * Version : 1.0
 * Description: Test WP REST API
 * Collection : 0003_codecepjs_WP_API.postman_collection.json
 * Method: POST
 */

// Caution the post id must exist...
const wp_post_id_to_update="1353";
pm.environment.set("UpdatePostId", wp_post_id_to_update);
console.log ("ENVIRONMENT :: wp_post_id_to_update :: "+wp_post_id_to_update+" ");

