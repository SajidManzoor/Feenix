import Utilities from "../../support/utils";
import TemplatesObjects from "../Objects/templates";
import ProductObjects from "../Objects/products";

const utils = new Utilities();
const prodObjects = new ProductObjects();
const templates = new TemplatesObjects();

export default class TemplatesMethods {
  /**
   * Selects a template from the list
   * @param {String} templateName 
   */
  selectTemplate(templateName) {
    utils.click(templates.templatesField());
    utils.clickByObjectText(templates.templatesList(), templateName);
  }
  /**
   * Saves a template with the given name
   * @param {String} tempName 
   */
  saveTemplate(tempName) {
    utils.click(prodObjects.saveTempBtn());
    utils.verifyVisibility(templates.templateNameField());
    utils.enterText(templates.templateNameField(), tempName);
    utils.click(templates.saveTempPopupBtn());
  }
  /**
   *  Clicks Update Template button
   */
  updateTemplate() {
    utils.click(templates.updateTempNameBtn());
  }
}
