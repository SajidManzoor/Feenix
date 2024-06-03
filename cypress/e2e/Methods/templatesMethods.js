import Utilities from "../../support/utils";
import TemplatesObjects from "../Objects/templates";
import ProductObjects from "../Objects/products";

const utils = new Utilities();
const prodObjects = new ProductObjects();
const templates = new TemplatesObjects();

export default class TemplatesMethods {
  selectTemplate(templateName) {
    utils.click(templates.templatesField());
    utils.clickByObjectText(templates.templatesList(), templateName);
  }
  verifyTemplateUpdate(description) {
    utils.click(prodObjects.general.generalTab());
    utils.verifyVisibility(prodObjects.general.productDescription());
    utils.verifyText(prodObjects.general.productDescription(), description);
  }
  saveTemplate(tempName) {
    utils.click(prodObjects.saveTempBtn());
    utils.verifyVisibility(templates.templateNameField());
    utils.enterText(templates.templateNameField(), tempName);
    utils.click(templates.saveTempPopupBtn());
  }
  updateTemplate() {
    utils.click(templates.updateTempNameBtn());
  }
}
