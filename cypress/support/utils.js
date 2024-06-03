export default class Utilities {
  click(object, force = false) {
    object.click({ force: force });
  }
  clickByText(text, force = false) {
    cy.contains(text).click((force = force));
  }
  clickByObjectText(object, text, force = false) {
    object.contains(text).click((force = force));
  }
  verifyVisibility(object) {
    object.should("be.visible");
  }
  enterText(object, text) {
    object.clear().type(text);
  }
  check(object) {
    object.check();
  }
  verifyText(object, text) {
    object.should("have.text", text);
  }
  verifyChecked(object) {
    object.should("be.checked");
  }
  verifyUnChecked(object) {
    object.should("not.be.checked");
  }
  verifyValue(object, value) {
    object.should("have.value", value);
  }
  navigateToUrl(url = Cypress.env("BASE_URL")) {
    cy.visit(url);
  }
  randomString(length) {
    let result = " ";
    let characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}
