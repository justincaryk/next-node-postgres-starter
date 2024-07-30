const VALID_PASSWORD = 'speller-shirting-BUDDHISM-aquiline';
const EMAIL_EXISTS = 'email@exists.com';

describe('SignupPage', () => {
  beforeEach(() => {
    cy.visit('/signup'); // Adjust the route if different
    // Inject axe-core
    cy.injectAxe();
  });

  it('should render the SignupPage with the registration form', () => {
    cy.contains('Create an account.').should('exist');
    cy.get('form').should('exist');
    cy.get('input[name="email"]').should('exist');
    cy.get('input[name="password"]').should('exist');
    cy.contains('button', 'Register').should('exist');

    cy.contains('Already a user?').should('exist');
    cy.contains('Log in').should('exist');

    cy.checkA11y();
  });

  it('should submit the form with valid data and show the success message', () => {
    cy.intercept('POST', '/api/register-user', {
      statusCode: 200,
      body: { code: 'ok' },
    }).as('registerUser');

    cy.get('input[name="email"]').type('testuser@example.com');
    cy.get('input[name="password"]').type(VALID_PASSWORD);
    cy.contains('button', 'Register').click();

    cy.wait('@registerUser');

    cy.contains('You just joined').should('exist');
    cy.contains('Continue to profile setup').should('exist');

    cy.checkA11y();
  });

  it('should show an error message if the email is already in use', () => {
    cy.intercept('POST', '/api/register-user', {
      statusCode: 200,
      body: { code: 'email in use' },
    }).as('registerUserEmailExists');

    cy.get('input[name="email"]').type(EMAIL_EXISTS);
    cy.get('input[name="password"]').type(VALID_PASSWORD);
    cy.contains('button', 'Register').click();

    cy.wait('@registerUserEmailExists');

    cy.contains('Email is in use. Try another or log in').should('exist');

    cy.checkA11y();
  });
});
