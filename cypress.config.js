const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://demowebshop.tricentis.com/", // Replace with your actual base URL
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
