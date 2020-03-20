/**
 * Postman wp_api_delete_post_delete
 * Test Script file : ins_wp_api_delete_post_delete.js
 * Pre-request Script file : pre_wp_api_delete_post_delete.js
 * Version : 1.0
 * Description: Test WP REST API
 * Collection : 0003_codecepjs_WP_API.postman_collection.json
 * Method: DELETE
 */
 
// Caution the post id must exist...
const wp_post_id_to_delete="1324";
pm.environment.set("DeletePostId", wp_post_id_to_delete);
console.log ("ENVIRONMENT :: wp_post_id_to_delete :: "+wp_post_id_to_delete+" ");