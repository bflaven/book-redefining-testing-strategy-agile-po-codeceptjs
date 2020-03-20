const { I } = inject();

module.exports = {

// insert your locators and methods here

/*

    I.say("\n--- LOGIN");
    I.amOnPage('wp-login.php');
    I.say('Backoffice :: enter username and password for WP');
    I.fillField({css: uiElement.css_user_login}, globalData.LOGIN_USERNAME);
    I.fillField({css: uiElement.css_user_pass}, secret(globalData.LOGIN_PASSWORD));
    I.click(globalData.LOGIN_BTN_LABEL, uiElement.css_wp_submit);
    I.seeInCurrentUrl('/wp-admin/');
    I.see(globalData.DASHBOARD_H1, 'h1');

 */

/* V0 */
// setting locators
/*
  fields: {
    email: '#user_login',
    password: '#user_pass'
  },
  submitButton: {
    label: 'Log In', 
    css: '//*[@id="wp-submit"]'
  },

  // introducing methods
  FunctionSendForm (email, password) {
    
    // I.fillField(this.fields.email, email);
    // I.fillField(this.fields.password, password);
    // I.click(this.submitButton);

    I.fillField({css: this.fields.email}, email);
    I.fillField({css: this.fields.password}, password);
    I.click(this.submitButton.label, this.submitButton.css);

    
  }
*/

/* V1 */
// setting locators
  
  values: {
    value_1: '\n--- LOGIN',
    value_2: 'wp-login.php',
    value_3: 'Backoffice :: enter username and password for WP',
    value_4: '/wp-admin/',
    value_5: 'Dashboard',
    value_6: 'h1'
  }, 
  fields: {
    email: '#user_login',
    password: '#user_pass'
  },
  submitButton: {
    label: 'Log In', 
    css: '//*[@id="wp-submit"]'
  },

  // introducing methods
  FunctionSendForm (email, password) {
    I.say(this.values.value_1);
    I.amOnPage(this.values.value_2);
    I.say(this.values.value_3);

    I.fillField({css: this.fields.email}, email);
    I.fillField({css: this.fields.password}, password);
    I.click(this.submitButton.label, this.submitButton.css);
    
    I.seeInCurrentUrl(this.values.value_4);
    I.see(this.values.value_5, this.values.value_6);
    
  }

}
