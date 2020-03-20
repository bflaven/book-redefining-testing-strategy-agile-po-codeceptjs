
// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({

    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.
    


    /* MODEL 
     login: function(email, password) {
      this.fillField('Email', email);
      this.fillField('Password', password);
      this.click('Submit');
    }
    */
   
   	// V1
   	/*
   	WpLogin: function(email, password) {
   	this.fillField({css: '#user_login'}, email);
    this.fillField({css: '#user_pass'}, password);
    this.click('Log In','//*[@id="wp-submit"]');
    }
	*/

 	// V2
 	/*
	WpLogin: function(css_user_login, login, css_user_pass, password, css_wp_submit, submit) {
   	this.fillField({css: css_user_login}, login);
    this.fillField({css: css_user_pass}, password);
    this.click(submit, css_wp_submit);
    }
    */

    // V3
	WpLogin: function(css_user_login, login, css_user_pass, password, css_wp_submit, submit, dashboard_h1) {
   	
   	  this.say("\n--- LOGIN");
    	this.amOnPage('wp-login.php');
    	this.say('Backoffice :: enter username and password for WP');
   		this.fillField({css: css_user_login}, login);
    	this.fillField({css: css_user_pass}, password);
    	this.click(submit, css_wp_submit);
    	this.seeInCurrentUrl('/wp-admin/');
    	this.see(dashboard_h1, 'h1');

    }
    

  });
}
