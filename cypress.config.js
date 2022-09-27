const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://fakerestapi.azurewebsites.net/api/v1/",
    specPattern: "cypress/services/Books/tests/*.cy.js",
    video: false,
  },
});
