export default class TemplatesObjects {
  templateNameField = () => cy.get(".MuiDialogContent-root input");
  saveTempNameBtn = () => cy.contains("Save template");
  updateTempNameBtn = () => cy.contains("Update template");
  saveTempPopupBtn = () => cy.get(".MuiBox-root > .MuiButton-containedPrimary");
  templatesField = () => cy.get(".css-aj4qqr > .MuiSelect-select");
  templatesList = () => cy.get(".MuiList-root li");
}
