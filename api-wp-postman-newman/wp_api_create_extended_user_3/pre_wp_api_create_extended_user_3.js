/**
 * Postman wp_api_create_extended_user_3
 * Test Script file : ins_wp_api_create_extended_user_3.js
 * Pre-request Script file : pre_wp_api_create_extended_user_3.js
 * Version : 1.0
 * Description: Test WP REST API
 * Collection : 0003_codecepjs_WP_API.postman_collection.json
 * Method: POST
 */


function stringGen(len) {
    var text = "";
    var charset = "abcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < len; i++ ) {
        text += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    return text;
}
const UserEmail = (stringGen(10)+"@"+stringGen(5)+"."+stringGen(3)).trim();
// pm.environment.set("variable_key", "variable_value");
pm.environment.set("UserEmailRandom", UserEmail);
console.log ("ENVIRONMENT :: UserEmail :: "+UserEmail+" ");

const UserRandomStringLodash = _.times(20, () => _.random(35).toString(36)).join('');


pm.environment.set("usernameLodash", UserRandomStringLodash);
pm.environment.set("passwordLodash", UserRandomStringLodash);
pm.environment.set("firstnameLodash", UserRandomStringLodash);
pm.environment.set("lastnameLodash", UserRandomStringLodash);






