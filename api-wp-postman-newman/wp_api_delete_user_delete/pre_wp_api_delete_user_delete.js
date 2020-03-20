/**
 * Postman wp_api_delete_post_delete
 * Test Script file : ins_wp_api_delete_user_delete.js
 * Pre-request Script file : pre_wp_api_delete_user_delete.js
 * Version : 1.0
 * Description: Test WP REST API
 * Collection : 0003_codecepjs_WP_API.postman_collection.json
 * Method: DELETE
 */
 
// Reassign to admin and set force to true
const wp_user_id_reassign="1";

// Caution the user id must exist...
const wp_user_id_to_delete="24";

pm.environment.set("DeleteUserId", wp_user_id_to_delete);
pm.environment.set("ReassignUserId", wp_user_id_reassign);
console.log ("ENVIRONMENT :: wp_user_id_to_delete :: "+wp_user_id_to_delete+" ");
console.log ("ENVIRONMENT :: wp_user_id_reassign :: "+wp_user_id_reassign+" ");