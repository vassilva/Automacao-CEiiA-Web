const { defineConfig } = require("cypress");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.feature",
    stepDefinitions: ["cypress/e2e/steps/**/*.js"],
    supportFile: "cypress/support/e2e.js",
    baseUrl: "https://www.ceiia.com",
    video: false,
    chromeWebSecurity: false,
    retries: { runMode: 1, openMode: 0 },
    setupNodeEvents(on, config) {
      addCucumberPreprocessorPlugin(on, config);
      on(
        "file:preprocessor",
        createBundler({ plugins: [createEsbuildPlugin(config)] })
      );
      return config;
    }
  }
});
