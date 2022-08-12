const { defineConfig } = require('cypress');

module.exports = defineConfig({
  video: false,
  videoUploadOnPasses: false,
  chromeWebSecurity: false,
  projectId: 'xd2d1c',
  retries: {
    'runMode': 1,
    'openMode': 0
  },
  e2e: {
    support: 'cypress/support/e2e.js',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    experimentalSessionAndOrigin: true
  }
});
