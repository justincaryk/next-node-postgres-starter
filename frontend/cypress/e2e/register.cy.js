import 'axe-core';
import 'cypress-axe';

const FAKE_JWT =
  'eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoicm9sZV91c2VyIiwiSXNzdWVyIjoiSXNzdWVyIiwidXNlcl9pZCI6IjMxMDIxNjQ2LWFmZGYtNGEzYi05MzQ1LTEyY2JiOGRkMWNhNSIsImV4cCI6IjIwMjQtMDgtMTNUMDM6Mzk6MzEuOTM5WiIsImVtYWlsIjoidmFsaWRAZXhhbXBsZS5jb20ifQ.km1KCKp2PLbIthzXeR6nK3FxWKQto65UMD_Df_hle3A';
const API_BASE_URL = '/api/graphql';

describe('SignupPage Integration Tests', () => {
  beforeEach(() => {
    cy.visit('/signup');
  });

  it('should display the signup form with all fields', () => {
    cy.get('h1').contains('Create an account.');
    cy.get('input[name="email"]').should('be.visible');
    cy.get('input[name="password"]').should('be.visible');
    cy.get('button[type="submit"]').contains('Register');

    // check accessibility
    cy.checkA11y();
  });

  it('should show an error message if the email is already in use', () => {
    cy.intercept('POST', API_BASE_URL, (req) => {
      req.reply({
        body: {
          data: {
            signup: {
              signupResult: {
                status: 'email in use',
              },
            },
          },
        },
      });
    }).as('signupRequest');

    cy.get('input[name="email"]').type('existinguser@example.com');
    cy.get('input[name="password"]').type('ValidPassword123!');
    cy.get('button[type="submit"]').click();

    cy.wait('@signupRequest');

    cy.get('[role="alert"]').contains('Email is in use. Try another or log in');

    // check accessibility
    cy.checkA11y();
  });

  it('should navigate to the RegisterSuccess page after a successful signup', () => {
    cy.intercept('POST', API_BASE_URL, (req) => {
      req.reply({
        body: {
          data: {
            signup: {
              signupResult: {
                status: 'ok',
                jwtToken: FAKE_JWT,
              },
            },
          },
        },
      });
    }).as('signupRequest');

    cy.get('input[name="email"]').type('newuser@example.com');
    cy.get('input[name="password"]').type('ValidPassword123!');
    cy.get('button[type="submit"]').click();

    cy.wait('@signupRequest');

    cy.get('h1').contains('You just joined');
    cy.get('button[type="submit"]').should('be.visible');

    // check accessibility
    cy.checkA11y();
  });

  it('should navigate to the login page when "Already a user?" is clicked', () => {
    cy.get('a').contains('Log in').click();
    cy.url().should('include', '/signin');
  });
});
