const { defineConfig } = require('cypress');

module.exports = defineConfig({
  video: false,
  videoUploadOnPasses: false,
  projectId: 'xd2d1c',
  retries: {
    'runMode': 1,
    'openMode': 0
  },
  e2e: {
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.family === 'chromium' || browser.family === 'chrome') {
          launchOptions.args.push('--disable-infobars')
          launchOptions.args.push('--disable-gpu')
          launchOptions.args.push('--disable-dev-shm-usage')
          launchOptions.args.push('--no-sandbox')
          launchOptions.args.push('--disable-web-security')
        }
        return launchOptions;
      })
    },
    support: 'cypress/support/e2e.js',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}'
  }
});
