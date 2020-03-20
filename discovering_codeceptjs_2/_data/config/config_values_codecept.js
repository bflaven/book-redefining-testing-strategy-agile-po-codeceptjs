// config_values_codecept.js

module.exports = {

/*  
  * All the constants will be removed and externalise in a file in _data/config_values_codecept.js
*/
/*--- BEGIN ---*/ 


/* String */
RandomString:''+Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)+'',

/* Date */
startDateString: ''+ new Date().toString() +'',


// Login
LOGIN_USERNAME: 'admin',
LOGIN_PASSWORD: 'admin',
LOGIN_BTN_LABEL: 'Log In',
DASHBOARD_H1: 'Dashboard',




// Settings Backoffice
GENERAL_SETTINGS_H1: 'General Settings',
GENERAL_BLOGNAME_VALUE: 'codecept_test_site',
GENERAL_BLOGDESCRIPTION_VALUE: 'Just another WordPress site',
GENERAL_SITEURL_VALUE: 'http://codecept.mydomain.priv/wordpress',
GENERAL_HOME_VALUE: 'http://codecept.mydomain.priv/wordpress',
GENERAL_NEW_ADMIN_EMAIL_VALUE: 'admin@test.com',

WRITING_SETTINGS_H1:'Writing Settings',
READING_SETTINGS_H1:'Reading Settings',


// Post Backoffice

POSTS_LINK_LABEL:'Posts',
POST_NEW_LABEL:'Add New',
POST_NEW_TITLE:'Add New Post',
POST_VIEW_POST_LABEL:'View Post',


// Membership
MEMBERSHIP_DEFAULT_ROLE:'Subscriber',
MEMBERSHIP_DEFAULT_ROLE_LENGTH:10,

MEMBERSHIP_START_OF_WEEK:'Monday',
MEMBERSHIP_START_OF_WEEK_LENGTH:6,

// Tags and Categories
POST_CATEGORY_CHECKLIST: ['#in-category-9','#in-category-6','#in-category-4','#in-category-8','#in-category-11'],

POST_TAGS_LIST: ['WordPress', 'Plugin', 'Drupal', 'PHP', 'Development', 'CI', 'Cypress', 'Feature', 'Gherkin', 'Laravel', 'Symfony', 'OOP'],

POST_VIEW_POST_LABEL_BTN_ADD:'Add',

// Upload a media
UPLOAD_NEW_MEDIA_LABEL_BTN:'Upload New Media',
UPLOAD_NEW_MEDIA_IMAGE_1:'_data/pictures/cobweb_with_raindrops.jpg',
UPLOAD_NEW_MEDIA_IMAGE_2:'_data/pictures/southern_hawker_golden_ringed_dragonfly.jpg',



// Test with made with plugin codeceptjs_check_homepage
PLUGIN_CHECK_HOMEPAGE_SEEINSOURCE:'codecept-source-code-testing-value-homepage-ok',
PLUGIN_CHECK_HOMEPAGE_DONTSEEINSOURCE:'codecept-source-code-testing-value-homepage-ko',
PLUGIN_CHECK_HOMEPAGE_SEEINTITLE:'codecept_test_site',



/*--- END ---*/  
/*
  * Stop before the beginning of your tests !
*/

}