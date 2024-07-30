import 'axe-core';
import 'cypress-axe';

const TEST_EMAILS = {
  VALID_EXISTS: 'email@exists.com',
  NOT_FOUND: 'email@no-exist.com',
  INVALID_CREDS: 'email@invalid-creds.com',
};

const emailInputName = 'email';
const passwordInputName = 'password';

describe('Sign In Page', () => {
  beforeEach(() => {
    cy.visit('/signin');
    // Inject axe-core
    cy.injectAxe();
  });

  it('should load the sign-in page and check accessibility', () => {
    // Verify page loads
    cy.contains('Sign in.').should('be.visible');

    // Run accessibility checks
    cy.checkA11y();
  });

  it('should show an error for an unknown email', () => {
    cy.get(`input[name="${emailInputName}"]`).type(TEST_EMAILS.NOT_FOUND);
    cy.get(`input[name="${passwordInputName}"]`).type('validPassword123');
    cy.get('form').submit();
    cy.contains('No user was found').should('be.visible');

    // Run accessibility checks
    cy.checkA11y();
  });

  it('should show an error for invalid credentials', () => {
    cy.get(`input[name="${emailInputName}"]`).type(TEST_EMAILS.INVALID_CREDS);
    cy.get(`input[name="${passwordInputName}"]`).type('invalidPassword123');
    cy.get('form').submit();
    cy.contains('The email or password is incorrect').should('be.visible');

    // Run accessibility checks
    cy.checkA11y();
  });

  it('should have a link to the signup page', () => {
    cy.contains('Create an account').should('have.attr', 'href', '/signup');
  });

  it('should have no accessibility issues with validation error states', () => {
    cy.get('form').submit();

    cy.get(`[data-testid="signin-input-error-${emailInputName}"]`).should('be.visible');
    cy.get(`[data-testid="signin-input-error-${passwordInputName}"]`).should('be.visible');

    // Run accessibility checks
    cy.checkA11y();
  });

  it('should allow a user to sign in with valid credentials', () => {
    cy.get(`input[name="${emailInputName}"]`).type(TEST_EMAILS.VALID_EXISTS);
    cy.get(`input[name="${passwordInputName}"]`).type('validPassword123');
    cy.get('form').submit();
    cy.url().should('include', '/dashboard');
  });
});
