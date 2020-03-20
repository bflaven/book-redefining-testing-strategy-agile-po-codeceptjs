/**
 * Postman wp_api_update_extended_post_3
 * Test Script file : ins_wp_api_update_extended_post_3.js
 * Pre-request Script file : pre_wp_api_update_extended_post_3.js
 * Version : 1.0
 * Description: Test WP REST API
 * Collection : 0003_codecepjs_WP_API.postman_collection.json
 * Method: POST
 */
 
// Caution the post id must exist...
const wp_post_id_to_update="1350";
pm.environment.set("UpdatePostId", wp_post_id_to_update);
console.log ("ENVIRONMENT :: wp_post_id_to_update :: "+wp_post_id_to_update+" ");

pm.environment.set("TimestampHeader", "PRESCRIPT my update date "+new Date()+" end of the upadte date for post" );
pm.environment.set("RandomString", "PRESCRIPT text for post "+(Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15))+" end of the text for post ");

const categories = [9,6,4,8,12,7,11,10];
pm.environment.set("categories", JSON.stringify(_.shuffle(categories)[0]));

// pm.environment.set("categories", JSON.stringify(_.shuffle(categories)));
// var randomSingleCategorie = categories[Math.floor(Math.random()*categories.length)];
// pm.environment.set("categories", randomSingleCategorie);



/*
    _.shuffle(categories).forEach(function(el, i) { 
        console.log (" el :: "+el+" i ::  "+i+"");
        
    });
*/

  
const tags = [100,109,117,106,115,118,101,104,114,120,99];
pm.environment.set("tags", JSON.stringify(_.shuffle(tags)[0]));

const featured_media = [104,96,94,86,836];
pm.environment.set("featured_media", JSON.stringify(_.shuffle(featured_media)[0]));

var TimestampHeaderValue = pm.environment.get("TimestampHeader");
var RandomStringValue = pm.environment.get("RandomString");
var CategoriesValue = pm.environment.get("categories");
var TagsValue = pm.environment.get("tags");
var FeaturedMediaValue = pm.environment.get("featured_media");


console.log ("ENVIRONMENT :: TimestampHeader :: "+TimestampHeaderValue+" ");
console.log ("ENVIRONMENT :: RandomString :: "+RandomStringValue+" ");
console.log ("ENVIRONMENT :: CategoriesValue :: "+CategoriesValue+" ");
console.log ("ENVIRONMENT :: TagsValue :: "+TagsValue+" ");
console.log ("ENVIRONMENT :: FeaturedMediaValue :: "+FeaturedMediaValue+" ");


function cleanup() {
    const clean = ['title', 'content', 'excerpt'];
    
    for(let i = 0; i < clean.length; ++i){
        pm.environment.unset(clean[i]);
    }
}
cleanup();



