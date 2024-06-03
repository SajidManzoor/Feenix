export default class LoginObjects {
  Auth = {
    emailField: () => cy.get("[name='email']"),
    passwordField: () => cy.get("[name='password']"),
    signInButton: () => cy.get(".MuiButton-root").contains("Sign In"),
    orgName: () => cy.get(".MuiTypography-h4"),
  };
}
