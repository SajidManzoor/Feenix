// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
import loginObjects from "../e2e/Objects/login";
import utilities from "./utils";

const login = new loginObjects();
const utils = new utilities();

Cypress.Commands.add("login", (email, password) => {
  utils.navigateToUrl();
  utils.verifyVisibility(login.Auth.emailField());
  utils.enterText(login.Auth.emailField(), email);
  utils.verifyVisibility(login.Auth.passwordField());
  utils.enterText(login.Auth.passwordField(), password);
  utils.verifyVisibility(login.Auth.signInButton());
  utils.click(login.Auth.signInButton());
  utils.verifyVisibility(login.Auth.orgName());
});
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
