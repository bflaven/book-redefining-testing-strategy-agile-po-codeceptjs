/*
NOTE: *** MAKE IT WORK ***

cd /Users/brunoflaven/Documents/02_copy/_discovering_codeceptjs_2/

node run.js
 




 */

// const { container: Container, codecept: Codecept } = require('codeceptjs').container;

const { codecept: Codecept, container } = require('codeceptjs');

/*
const config = { 
  helpers: { 
      WebDriver: { 
        browser: 'chrome', 
        url: 'http://localhost'
      } 

  } 
};
*/
const config = { 
  helpers: { 
        Puppeteer: {
              url: 'http://codecept.mydomain.priv/wordpress/',
              show: false,
              disableScreenshots: true,
              uniqueScreenshotNames: true,
              fullPageScreenshots: true,
              keepBrowserState: true,
              restart: false,
              keepCookies: true,
              waitForAction: 500,
              windowSize: '1280x960'
            }
  } 
};


const opts = { steps: true };

// create runner
const codecept = new Codecept(config, opts);

// initialize codeceptjs in current dir
codecept.initGlobals(__dirname);

// create helpers, support files, mocha
container.create(config, opts);

// initialize listeners
codecept.runHooks();

// run bootstrap function from config
codecept.runBootstrap((err) => {

  // load tests
  codecept.loadTests('*_test.js');

  // run tests
  codecept.run();
});