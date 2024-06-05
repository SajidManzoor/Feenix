import loginObjects from "../e2e/Objects/login";
import utilities from "./utils";

const login = new loginObjects();
const utils = new utilities();

Cypress.Commands.add("login", (email, password) => {
  utils.navigateToUrl();
  utils.verifyVisibility(login.Auth.emailField());
  utils.enterText(login.Auth.emailField(), email + '{enter}');
  utils.verifyVisibility(login.Auth.passwordField());
  utils.enterText(login.Auth.passwordField(), password + '{enter}');
  utils.verifyVisibility(login.Auth.orgName());
});
