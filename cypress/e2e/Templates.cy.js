import Utilities from "../support/utils";
import productsMethods from "./Methods/productsMethods";
import templatesMethods from "./Methods/templatesMethods";
import neatCsv from "neat-csv";
import ProductObjects from "./Objects/products";

const products = new productsMethods();
const templates = new templatesMethods();
const prodObjects = new ProductObjects();
const utils = new Utilities();

let regData;
describe("SaaS Subscription (Template)", () => {
  before(() => {
    cy.fixture("DataFile.csv")
      .then(neatCsv)
      .then((response) => (regData = response));
  });
  beforeEach(() => {
    cy.login(regData[0].UserEmail, regData[0].Password);
    products.selectOrg(regData[0].Organization);
    products.navigateToProductPage(regData[0].ProductName);
  });

  it("TC5 - Verify user is able to save the feenix SaaS subscription forms as a template with new seller account", () => {
    let data = {
      sku: regData[0].SKU,
      title: regData[0].Title,
      productDescription: regData[0].ProductDescription,
      shortProductDescription: regData[0].ShortProductDescription,
      productLogoURL: regData[0].ProductLogoURL,
      eula: regData[0].EULA,
      highlightOne: regData[0].HighlightOne,
      productCategoryOne: regData[0].ProductCategoryOne,
      searchKeywords: regData[0].SearchKeywords,
      refundPolicy: regData[0].RefundPolicy,
      saasRegistrationPageOption: regData[0].SaaSRegistrationPageOption,
      templateName: regData[0].TemplateName,
      pricingCategory: regData[0].PricingCategory,
      d1DisplayName: regData[0].D1DisplayName,
      d1ApiName: regData[0].D1ApiName,
      d1Description: regData[0].D1Description,
    };
    products.fillGeneralFields(data);
    products.fillPricingFields(data);
    templates.saveTemplate(data.templateName)
    products.verifyToastMessage(regData[1].ToastMessage);
    data.templateName = regData[1].TemplateName
    products.navigateToProductPage(regData[0].ProductName);
    products.fillGeneralFields(data);
    products.fillPricingFields(data);
    templates.saveTemplate(data.templateName)
    products.verifyToastMessage(regData[1].ToastMessage);
  });
  it("TC6 - Verify user is able to update/edit the saved SaaS subscription form template", () => {
    const data = {
      sku: regData[1].SKU,
      title: regData[1].Title,
      productDescription: regData[1].ProductDescription,
      shortProductDescription: regData[1].ShortProductDescription,
      productLogoURL: regData[1].ProductLogoURL,
      eula: regData[0].EULA,
      highlightOne: regData[1].HighlightOne,
      productCategoryOne: regData[1].ProductCategoryOne,
      searchKeywords: regData[1].SearchKeywords,
      refundPolicy: regData[1].RefundPolicy,
      saasRegistrationPageOption: regData[1].SaaSRegistrationPageOption,
      templateName: regData[0].TemplateName,
      pricingCategory: regData[1].PricingCategory,
      d1DisplayName: regData[0].D1DisplayName,
      d1ApiName: regData[1].D1ApiName,
      d1Description: regData[1].D1Description,
      update: true,
    };
    templates.selectTemplate(data.templateName);
    products.fillGeneralFields(data);
    products.fillPricingFields(data);
    templates.updateTemplate();
  });
  it("TC7 - Verify additional fields can be updated without saving the template and a listing can be created", () => {
    const data = {
      sku: regData[2].SKU,
      title: regData[2].Title,
      productDescription: regData[2].ProductDescription,
      shortProductDescription: regData[2].ShortProductDescription,
      productLogoURL: regData[2].ProductLogoURL,
      productVideoURL: regData[2].ProductVideoLink,
      eula: regData[2].EULA,
      eulaUrl: regData[2].EULAURL,
      highlightOne: regData[2].HighlightOne,
      highlightTwo: regData[2].HighlightTwo,
      highlightThree: regData[2].HighlightThree,
      productCategoryOne: regData[2].ProductCategoryOne,
      productCategoryTwo: regData[2].ProductCategoryTwo,
      productCategoryThree: regData[2].ProductCategoryThree,
      searchKeywords: regData[2].SearchKeywords,
      resourceNameOne: regData[2].ResourceNameOne,
      resourceUrlOne: regData[2].ResourceUrlOne,
      resourceNameTwo: regData[2].ResourceNameTwo,
      resourceUrlTwo: regData[2].ResourceUrlTwo,
      resourceNameThree: regData[2].ResourceNameThree,
      resourceUrlThree: regData[2].ResourceUrlThree,
      supportOffered: regData[2].SupportOffered,
      supportDescription: regData[2].SupportDescription,
      refundPolicy: regData[2].RefundPolicy,
      saasRegistrationPageOption: regData[2].SaaSRegistrationPageOption,
      templateName: regData[0].TemplateName,
      pricingCategory: regData[2].PricingCategory,
      d1DisplayName: regData[0].D1DisplayName,
      d1ApiName: regData[2].D1ApiName,
      d1Description: regData[2].D1Description,
      update: true,
    };
    templates.selectTemplate(data.templateName);
    products.fillGeneralFields(data);
    products.fillPricingFields(data);
    products.fillOnboardingFields(data);
    utils.click(prodObjects.submitBtn());
    // following lines create data
    // utils.click(prodObjects.createListingBtn())
    // products.verifyToastMessage(regData[0].ToastMessage);
    // products.verifyListingCreated(data.title)
  });
  it('TC8 - Verify user is able to create a Listing with the "Template 2" form after switching between "Template 1" and "Template 2"', () => {
    templates.selectTemplate(regData[0].TemplateName);
    templates.selectTemplate(regData[1].TemplateName);
    utils.verifyVisibility(prodObjects.submitBtn());
    utils.click(prodObjects.submitBtn());
    utils.verifyVisibility(prodObjects.createListingBtn());
    // following lines create data
    // utils.click(prodObjects.createListingBtn())
    // products.verifyToastMessage(regData[0].ToastMessage);
    // products.verifyListingCreated(regData[1].Title)
  });

});
