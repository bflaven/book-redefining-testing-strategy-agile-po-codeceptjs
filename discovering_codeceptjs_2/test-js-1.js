/*
cd /Users/brunoflaven/Documents/02_copy/_discovering_codeceptjs_2/
node test-js-1.js
 */

 
// console.log("Hello World");
 

var language = {
        "term_id": 146,
        "name": "Turkish",
        "slug": "turkish",
        "term_group": 0,
        "term_taxonomy_id": 146,
        "taxonomy": "languages",
        "description": "",
        "parent": 0,
        "count": 12,
        "filter": "raw"
};

// Object.keys() and Array.forEach()

Object.keys(language).forEach(function (key) {
  console.log("\n\n--- ");
  console.log("key :: "+key); // key
  console.log("value :: "+language[key]); // value
  console.log("---\n\n");

});




