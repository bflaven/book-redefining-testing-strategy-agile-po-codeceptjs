/**
 * Postman wp_api_post_extended_post_6
 * Test Script file : ins_wp_api_post_extended_post_6.js
 * Pre-request Script file : pre_wp_api_post_extended_post_6.js
 * Version : 1.0
 * Description: Test WP REST API
 * Collection : 0003_codecepjs_WP_API.postman_collection.json
 * Method: POST
 */

pm.environment.set("RandomString", "request 6 title test api "+(Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15))+"");
pm.environment.set("RandomBody", "<p><b>request 6 payload TESTING WP API WITH POSTMAN</b></p>");
pm.environment.set("RandomExcerpt", "<p>request 6 payload TESTING WP API WITH POSTMAN This is a wp excerpt post</p>");
pm.environment.set("RandomCategories", "9,6,4,8,12");
pm.environment.set("RandomTags", "100,109,117,106,115,118,101,104,114,120,99");


const title_for_wp_post =  pm.environment.get("RandomString");
const content_for_wp_post =  pm.environment.get("RandomBody");
const excerpt_for_wp_post =  pm.environment.get("RandomExcerpt");
const categories_for_wp_post =  pm.environment.get("RandomCategories");
const tags_for_wp_post =  pm.environment.get("RandomTags");

console.log ("ENVIRONMENT :: title_for_wp_post :: "+title_for_wp_post+" ");
console.log ("ENVIRONMENT :: content_for_wp_post :: "+content_for_wp_post+" ");
console.log ("ENVIRONMENT :: excerpt_for_wp_post :: "+excerpt_for_wp_post+" ");
console.log ("ENVIRONMENT :: categories_for_wp_post :: "+categories_for_wp_post+" ");
console.log ("ENVIRONMENT :: tags_for_wp_post :: "+tags_for_wp_post+" ");


