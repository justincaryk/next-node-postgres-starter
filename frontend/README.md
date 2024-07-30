This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

- First, install depedencies the development server:

```bash
yarn
```

- Second, spin up the local instance:

```bash
yarn dev
```

- Third, in a browser, either navigate to `localhost:3000` (this is just a list of all the available routes) or navigate to `localhost:3000/signup` to begin the user flow.

## Husky (optional, but recommended)

Husky is integrated to provide automated linting/formatting standards. To install husky and its hooks run the following command:

```bash
yarn husky:prepare
```

### UX Principles

The main consideration in customer acquisition is to reduce friction. Approaches vary, but a pretty consistent recommendation to reduce friction is to break onboarding into small easy steps. As such, this challenge breaks the onboard flow into 3 steps:

1. Collect email and password (this is the only absolutely critical information for account creation).
2. Collect the user's occupation, which can be used for demographic reporting as well as tailoring the subsequent interests collection step to be more targeted. The primary call to action is clear and obvious; however, in keeping with the theme of reducing friction, I included an option to skip this step.
3. Collect the user's interests. As above, the desired call to action is prominent, but a skip option is also included here.

### Form validation

- The signin form validates on submit as there is less need to reduce friction.
- The signup form validates validates each input onBlur to provide immediate and clear feedback.

### Passwords

The most popular password paradigm relies on arbitrary complexity requirements (eg. minLength, upper, lower, special, number), but this discourages passphrase, which can be secure; however, another approach is to use passphrases. This can be as secure or more and also has the benefit of being more memorable for users.

As such, this app integrates the `@zxcvbn-ts/core` package to test the password strength. Of packages investigated, this received the [best score, as rated by snyk](https://snyk.io/advisor/npm-package/@zxcvbn-ts/core).

### Accessibility Checklist:

Automated testing has been added to help mitigate any potential obvious accessibility issues. Specifics include:

- `axe-core` executes a page test and consoles errors in the browser during active local development
- Linting extensions include `pa11y` to help catch issues prior to commit and merging
- Color contrast testing assisted by `pa11y`
- Screen-reader testing should be performed manually for any new components to ensure keyboard navigation works
- Skip links have been added to assist keyboard users with quicker navigation
- Cypress integration tests also consider accessibility standards during their testing via the inclusion of `cypress-axe`.

### REPO NOTES:

- APIs are currently just mocks, there are a few emails that can be used to trigger various validation results:
  - Signin
    - `email@exists.com` will return "ok" and move forward
    - `email@no-exist.com` will return "no user found"
    - all other will return "invalid credentials"
  - Signup
    - `email@exists.com` will return "email already exists"
    - all others will reutrn "ok" and move forward
- Mock data can be found in `/src/mocks.ts`: this should be removed or extracted to the API layer

### TODO:

- [x] update card colors for better accessibility
- [x] add success state tests for signup page
- [x] add automated accessibility testing
- [x] write some integration tests
- [] finish select dropdown component + tests
- [] finish checkbox component + tests
- [] SSO
- [] forgot password
