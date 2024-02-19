const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl:'https://naveenautomationlabs.com/opencart/index.php?route=account/login',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    pageLoadTimeout:10000,
    chromeWebSecurity:false,
    failOnStatusCode:false,
    "includeShadowDom":true
  },
  env:{
    URL:'https://naveenautomationlabs.com/opencart/index.php?route=account/login'
  }
});
