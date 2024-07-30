const { defineConfig } = require('cypress');

/*
** IMPORTANTE **

1. This MUST be at the root level. nesting it within the `cypress/` directory runs into longstanding issues with `cy.readFile("../node_modules/axe-core/axe.min.js")`. See: https://github.com/component-driven/cypress-axe/issues/134

2. Becuase this must live in root, it also must be vanilla JS and NOT TypeScript. The Cypress types collide with Jest types leading to really obnoxious IDE confusion. Avoid whack-a-mole, and just keep this JS.

*/
module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      // Implement node event listeners here
    },
    supportFile: 'cypress/support/e2e.js',
  },
});
