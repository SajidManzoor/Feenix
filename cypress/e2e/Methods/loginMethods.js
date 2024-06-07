import Utilities from "../../support/utils";
import LoginObjects from "../Objects/login";

const utils = new Utilities();
const login = new LoginObjects();

export default class LoginMethods {
  /**
   * Login using email and password
   * @param {String} email 
   * @param {String} password 
   */
  login(email, password) {
    utils.verifyVisibility(login.Auth.emailField());
    utils.enterText(login.Auth.emailField(), email);
    utils.verifyVisibility(login.Auth.passwordField());
    utils.enterText(login.Auth.passwordField(), password);
    utils.verifyVisibility(login.Auth.signInButton());
    utils.click(login.Auth.signInButton());
    utils.verifyVisibility(login.Auth.orgName());
  }
}
