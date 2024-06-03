import ProductsMethods from "./Methods/productsMethods";
import neatCsv from "neat-csv";
import Utilities from "../support/utils";
import ProductObjects from "./Objects/products";

const products = new ProductsMethods();
const prodObjects = new ProductObjects();
const utils = new Utilities();

let regData;
describe("Create SaaS Subscription", () => {
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

  it("TC2 - Verify user is unable to submit the SaaS subscription form with blank mandatory fields", () => {
    utils.click(prodObjects.submitBtn());
    products.verifyGeneralErrorIcon();
    products.verifyPricingErrorIcon();
  });

  it('TC3 - Verify user can submit the SAAS subscription form by filling out only mandatory fields and selecting the "Use Standard Contract for AWS Marketplace" option and "No" options for the support offered.', () => {
    const data = {
      sku: regData[0].SKU,
      title: regData[0].Title,
      productDescription: regData[0].ProductDescription,
      shortProductDescription: regData[0].ShortProductDescription,
      productLogoURL: regData[0].ProductLogoURL,
      productVideoLink: regData[0].ProductVideoLink,
      eula: regData[0].EULA,
      highlightOne: regData[0].HighlightOne,
      productCategoryOne: regData[0].ProductCategoryOne,
      searchKeywords: regData[0].SearchKeywords,
      resourceNameOne: regData[0].ResourceNameOne,
      resourceUrlOne: regData[0].ResourceUrlOne,
      refundPolicy: regData[0].RefundPolicy,
      saasRegistrationPageOption: regData[0].SaaSRegistrationPageOption,
      saasUrl: regData[0].SaasUrl,
      pricingCategory: regData[0].PricingCategory,
      d1ApiName: regData[0].D1ApiName,
      d1Description: regData[0].D1Description,
      awsAccountID: regData[0].AWSAccountID,
      fieldName: regData[0].FieldName,
      fieldRequired: regData[0].FieldRequiredCheck,
      notification: regData[0].Notification,
    };
    products.fillGeneralFields(data);
    products.fillPricingFields(data);
    products.fillOnboardingFields(data);
    products.fillNotificationFields(data);
    utils.click(prodObjects.submitBtn());
    products.verifyReviewPopup(data);
  });

  it('TC4 - Verify user can submit the SAAS subscription form by filling the all required and optional fields and selecting the "Use your own EULA" option and with the support offered "Yes"', () => {
    const data = {
      sku: regData[0].SKU,
      title: regData[0].Title,
      productDescription: regData[0].ProductDescription,
      shortProductDescription: regData[0].ShortProductDescription,
      productLogoURL: regData[0].ProductLogoURL,
      productVideoLink: regData[0].ProductVideoLink,
      eula: regData[1].EULA,
      eulaUrl: regData[0].EULAURL,
      highlightOne: regData[0].HighlightOne,
      highlightTwo: regData[0].HighlightTwo,
      highlightThree: regData[0].HighlightThree,
      productCategoryOne: regData[0].ProductCategoryOne,
      productCategoryTwo: regData[0].ProductCategoryTwo,
      productCategoryThree: regData[0].ProductCategoryThree,
      searchKeywords: regData[0].SearchKeywords,
      resourceNameOne: regData[0].ResourceNameOne,
      resourceUrlOne: regData[0].ResourceUrlOne,
      resourceNameTwo: regData[0].ResourceNameTwo,
      resourceUrlTwo: regData[0].ResourceUrlTwo,
      resourceNameThree: regData[0].ResourceNameThree,
      resourceUrlThree: regData[0].ResourceUrlThree,
      supportOffered: regData[0].SupportOffered,
      supportDescription: regData[0].SupportDescription,
      refundPolicy: regData[0].RefundPolicy,
      saasRegistrationPageOption: regData[0].SaaSRegistrationPageOption,
      saasUrl: regData[0].SaasUrl,
      pricingCategory: regData[0].PricingCategory,
      d1ApiName: regData[0].D1ApiName,
      d1Description: regData[0].D1Description,
      awsAccountID: regData[0].AWSAccountID,
      fieldName: regData[0].FieldName,
      fieldRequired: regData[0].FieldRequiredCheck,
      notification: regData[0].Notification,
    };
    products.fillGeneralFields(data);
    products.fillPricingFields(data);
    products.fillOnboardingFields(data);
    products.fillNotificationFields(data);
    utils.click(prodObjects.submitBtn());
    products.verifyReviewPopup(data);
  });
});
