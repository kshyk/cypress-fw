const { defineConfig } = require('cypress');

module.exports = defineConfig({
  video: false,
  chromeWebSecurity: false,
  experimentalStudio: true,
  projectId: 'xd2d1c',
  retries: 2,
  e2e: {
    support: 'cypress/support/e2e.js',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    experimentalSessionAndOrigin: true
  }
});
