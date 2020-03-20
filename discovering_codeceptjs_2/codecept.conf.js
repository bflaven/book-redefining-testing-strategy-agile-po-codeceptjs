exports.config = {
  output: './output',
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
    },
    mobile: {
      require: './mobile_helper.js'
    },
    tablet: {
      require: './tablet_helper.js'
    },
    //Add the helper for testing API
        Rest: {
        // endpoint: "http://localhost/api/v1/",
        endpoint: "http://codecept.mydomain.priv/wordpress",
        defaultHeaders: {
          // 'Auth': '11111',
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          }
    }
  },
  include: {
    I: './steps_file.js',
    globalData: './_data/config/config_values_codecept.js',
    uiElement: './_data/ui/object_repository_ui_elements.js',
    pluginJournalist: './_data/plugin/plugin_post_type_journalist.js',
    loginPageObject: './pages/login.js',
    basePage: './pages/openMainArticle.js'
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  /* 
    * Add gherkin to the project
    * Do not forget to add the functions 
    * inside the file steps.js for each line of gherkin feature
  */
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: false,
      fullPageScreenshots: false,
      uniqueScreenshotNames: false
    },
    autoDelay: {
      enabled: true,
      delayBefore: 150,
      delayAfter: 150
    },
    stepByStepReport: {
      enabled: false,
      deleteSuccessful: false,
      animateSlides: true,
      fullPageScreenshots: true,
      screenshotsForAllureReport: true
    },
    allure: {
      enabled: false
    }
  },
  tests: './*_test.js',
  name: '_discovering_codeceptjs_2'
}