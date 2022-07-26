const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:"http://localhost:3000",
    specPattern: "cypress/integration",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
