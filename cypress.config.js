const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    pageLoadTimeout:60000,
    chromeWebSecurity:false,
    failOnStatusCode:false,
    "includeShadowDom":true
  },
});
