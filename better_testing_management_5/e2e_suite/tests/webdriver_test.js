Feature('CodeceptJS with docker');
Before(I => {
  I.resizeWindow(1366, 768);
});

Feature('Testing Search on Amazon @starting');
Scenario('Navigate and Search on Amazon', I => {
  I.amOnPage('https://www.amazon.com/');
  I.isPageLoaded();
  I.see('Amazon.com', '//*[@id="navFooter"]/div[5]/ul/li[4]');
  I.fillField({css: '#twotabsearchtextbox'}, 'Bruno Flaven');
  I.click({xpath: '//*[@id="nav-search"]/form/div[2]/div/input'});
  I.saveScreenshot('looking_for_me_on_amazon.png');
  I.anotherGiveMessage("Find you!");
});



