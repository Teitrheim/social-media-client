const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://127.0.0.1:5500/",
    // eslint-disable-next-line no-unused-vars
    setupNodeEvents(on, config) {
      /* ... */
    },
    specPattern: "cypress/e2e/**/*.spec.js",
  },
});
