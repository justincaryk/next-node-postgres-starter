import 'axe-core';
import 'cypress-axe';

const API_BASE_URL = '/api/graphql';
const FAKE_JWT =
  'eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoicm9sZV91c2VyIiwiSXNzdWVyIjoiSXNzdWVyIiwidXNlcl9pZCI6IjMxMDIxNjQ2LWFmZGYtNGEzYi05MzQ1LTEyY2JiOGRkMWNhNSIsImV4cCI6IjIwMjQtMDgtMTNUMDM6Mzk6MzEuOTM5WiIsImVtYWlsIjoidmFsaWRAZXhhbXBsZS5jb20ifQ.km1KCKp2PLbIthzXeR6nK3FxWKQto65UMD_Df_hle3A';

describe('SigninPage', () => {
  beforeEach(() => {
    cy.visit('/signin'); // Adjust the path if needed
  });

  it('displays the correct page title', () => {
    cy.contains('h1', 'Sign in.').should('be.visible');
  });

  it('should display the sign-in form', () => {
    cy.get('form').should('exist');
    cy.get('input[name="email"]').should('be.visible');
    cy.get('input[name="password"]').should('be.visible');
    cy.get('button[type="submit"]').should('be.visible');
    // check accessibility
    cy.checkA11y();
  });

  it('shows validation errors when the form is submitted empty', () => {
    cy.get('button[type="submit"]').click();

    // Wait for validation errors to appear
    cy.contains('Email is required').should('be.visible');
    cy.contains('Password is required').should('be.visible');

    // Submitting and validating a form is an async process so
    // wait for the UI to settle before running the accessibility check
    // TODO: confirm whether this is stable...
    cy.wait(500);
    cy.checkA11y();
  });

  it('displays error message on incorrect login credentials', () => {
    cy.intercept('POST', API_BASE_URL, {
      statusCode: 200,
      body: {
        data: {
          signin: {
            jwtToken: null,
          },
        },
      },
    }).as('signinRequest');

    cy.get('input[name="email"]').type('invalid@example.com');
    cy.get('input[name="password"]').type('WHOMEVER-sortie-pinto-dully-deflect');
    cy.get('button[type="submit"]').click();

    cy.wait('@signinRequest');
    cy.contains('The email or password is incorrect').should('be.visible');

    // check accessibility
    cy.checkA11y();
  });

  it('redirects to the dashboard on successful login', () => {
    cy.intercept('POST', API_BASE_URL, {
      statusCode: 200,
      body: {
        data: {
          signin: {
            jwtToken: FAKE_JWT,
          },
        },
      },
    }).as('signinRequest');

    // cy.intercept('GET', '**/dashboard', {
    //   statusCode: 200,
    // }).as('dashboardRequest');

    cy.get('input[name="email"]').type('valid@example.com');
    cy.get('input[name="password"]').type('WHOMEVER-sortie-pinto-dully-deflect');
    cy.get('button[type="submit"]').click();

    cy.wait('@signinRequest');

    cy.url().should('include', '/dashboard');

    // check accessibility
    cy.checkA11y();
  });

  it('shows the link to create a new account', () => {
    cy.contains('New to').should('be.visible');
    cy.contains('Create an account').should('be.visible').click();
    cy.url().should('include', '/signup');
  });

  it('has no accessibility violations', () => {
    cy.injectAxe();
    cy.checkA11y();
  });
});
