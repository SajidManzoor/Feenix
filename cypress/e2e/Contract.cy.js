import ProductsMethods from "./Methods/productsMethods";
import neatCsv from "neat-csv";
import Utilities from "../support/utils";
import ProductObjects from "./Objects/products";
import ContractMethods from "./Methods/contractMethods";

const products = new ProductsMethods();
const prodObjects = new ProductObjects();
const utils = new Utilities();
const contract = new ContractMethods();

let regData;
describe("Create SaaS Contract", () => {
  before(() => {
    cy.fixture("ContractData.csv")
      .then(neatCsv)
      .then((response) => (regData = response));
  });
  beforeEach(() => {
    cy.login(regData[0].UserEmail, regData[0].Password);
    products.selectOrg(regData[0].Organization);
    products.navigateToProductPage(regData[0].ProductName);
  });
  it('TC9 - Verify user can create a SAAS contract request with usage by selecting all contract duration options with "Buyer can choose multiple options" option as contract type along with Standard EULA option', () => {
    const data = {
      sku: regData[0].SKU,
      title: regData[0].Title,
      productDescription: regData[0].ProductDescription,
      shortProductDescription: regData[0].ShortProductDescription,
      productLogoURL: regData[0].ProductLogoURL,
      productVideoURL: regData[0].ProductVideoLink,
      eula: regData[0].EULA,
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
      templateName: regData[0].TemplateName,
      contractMonthly: regData[0].ContractMonthly,
      contract1Year: regData[0].Contract1Year,
      contract2Years: regData[0].Contract2Years,
      contract3Years: regData[0].Contract3Years,
      contractType: regData[0].ContractType,
      pricingCategory: regData[0].PricingCategory,
      d1Name: regData[0].D1Name,
      d1ApiName: regData[0].D1ApiName,
      d1Description: regData[0].D1Description,
      d1AdditionalCheckbox: regData[0].D1AdditionalCheckbox,
      d1AdditionalDescription: regData[0].D1AdditionalDescription,
      d2Name: regData[0].D2Name,
      d2ApiName: regData[0].D2ApiName,
      d2Description: regData[0].D2Description,
      d3Name: regData[0].D3Name,
      d3ApiName: regData[0].D3ApiName,
      d3Description: regData[0].D3Description,
      d1UsageDescription: regData[0].D1UsageDescription,
      d1UsageApiName: regData[0].D1UsageApiName,
      toastMessage: regData[0].ToastMessage,
    };
    products.fillGeneralFields(data);
    contract.fillPricingFields(data);
    products.fillOnboardingFields(data);
    utils.click(prodObjects.submitBtn());
    //the following lines create data
    // utils.click(prodObjects.createListingBtn());
    // products.verifyToastMessage(data.toastMessage);
    // products.verifyListingCreated(data.title)
  });
  it('TC10 - Verify user can create a SAAS contract request with usage by selecting all contract duration options with "Buyer can choose one tier" option as contract type along with Custom EULA option', () => {
    const data = {
      sku: regData[0].SKU,
      title: regData[0].Title,
      productDescription: regData[0].ProductDescription,
      shortProductDescription: regData[0].ShortProductDescription,
      productLogoURL: regData[0].ProductLogoURL,
      productVideoURL: regData[0].ProductVideoLink,
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
      templateName: regData[0].TemplateName,
      contractMonthly: regData[0].ContractMonthly,
      contract1Year: regData[0].Contract1Year,
      contract2Years: regData[0].Contract2Years,
      contract3Years: regData[0].Contract3Years,
      contractType: regData[1].ContractType,
      pricingCategory: regData[0].PricingCategory,
      d1Name: regData[0].D1Name,
      d1ApiName: regData[0].D1ApiName,
      d1Description: regData[0].D1Description,
      d1AdditionalCheckbox: regData[0].D1AdditionalCheckbox,
      d1AdditionalDescription: regData[0].D1AdditionalDescription,
      d2Name: regData[0].D2Name,
      d2ApiName: regData[0].D2ApiName,
      d2Description: regData[0].D2Description,
      d3Name: regData[0].D3Name,
      d3ApiName: regData[0].D3ApiName,
      d3Description: regData[0].D3Description,
      d1UsageDescription: regData[0].D1UsageDescription,
      d1UsageApiName: regData[0].D1UsageApiName,
      toastMessage: regData[0].ToastMessage,
    };
    products.fillGeneralFields(data);
    contract.fillPricingFields(data);
    products.fillOnboardingFields(data);
    utils.click(prodObjects.submitBtn());
    // the following lines create data
    // utils.click(prodObjects.createListingBtn());
    // products.verifyToastMessage(data.toastMessage);
    // products.verifyListingCreated(data.title)
  });

  it("TC11 - Verify user is unable to create the SaaS contract request without selecting the contract duration and with blank mandatory fields", () => {
    utils.click(prodObjects.submitBtn());
    products.verifyGeneralErrorIcon();
    products.verifyPricingErrorIcon();
  });
  it('TC12 - Verify user can create a SAAS contract request without usage by selecting all contract duration options with "Buyer can choose multiple options" option as contract type along with Standard EULA', () => {
    const data = {
      sku: regData[0].SKU,
      title: regData[0].Title,
      productDescription: regData[0].ProductDescription,
      shortProductDescription: regData[0].ShortProductDescription,
      productLogoURL: regData[0].ProductLogoURL,
      productVideoURL: regData[0].ProductVideoLink,
      eula: regData[0].EULA,
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
      templateName: regData[0].TemplateName,
      contractMonthly: regData[0].ContractMonthly,
      contract1Year: regData[0].Contract1Year,
      contract2Years: regData[0].Contract2Years,
      contract3Years: regData[0].Contract3Years,
      contractType: regData[0].ContractType,
      pricingCategory: regData[0].PricingCategory,
      d1Name: regData[0].D1Name,
      d1ApiName: regData[0].D1ApiName,
      d1Description: regData[0].D1Description,
      d2Name: regData[0].D2Name,
      d2ApiName: regData[0].D2ApiName,
      d2Description: regData[0].D2Description,
      d3Name: regData[0].D3Name,
      d3ApiName: regData[0].D3ApiName,
      d3Description: regData[0].D3Description,
      toastMessage: regData[0].ToastMessage,
    };
    products.fillGeneralFields(data);
    contract.fillPricingFields(data);
    products.fillOnboardingFields(data);
    utils.click(prodObjects.submitBtn());
    // the following lines create data
    // utils.click(prodObjects.createListingBtn());
    // products.verifyToastMessage(data.toastMessage);
    // products.verifyListingCreated(data.title)
  });
  it('TC13 - Verify user can create SAAS contract request without usage by selecting all contract duration options with "Buyer can choose only one tier" option as contract type and along with Custom EULA ', () => {
    const data = {
      sku: regData[0].SKU,
      title: regData[0].Title,
      productDescription: regData[0].ProductDescription,
      shortProductDescription: regData[0].ShortProductDescription,
      productLogoURL: regData[0].ProductLogoURL,
      productVideoURL: regData[0].ProductVideoLink,
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
      templateName: regData[0].TemplateName,
      contractMonthly: regData[0].ContractMonthly,
      contract1Year: regData[0].Contract1Year,
      contract2Years: regData[0].Contract2Years,
      contract3Years: regData[0].Contract3Years,
      contractType: regData[1].ContractType,
      pricingCategory: regData[0].PricingCategory,
      d1Name: regData[0].D1Name,
      d1ApiName: regData[0].D1ApiName,
      d1Description: regData[0].D1Description,
      d2Name: regData[0].D2Name,
      d2ApiName: regData[0].D2ApiName,
      d2Description: regData[0].D2Description,
      d3Name: regData[0].D3Name,
      d3ApiName: regData[0].D3ApiName,
      d3Description: regData[0].D3Description,
      toastMessage: regData[0].ToastMessage,
    };
    products.fillGeneralFields(data);
    contract.fillPricingFields(data);
    products.fillOnboardingFields(data);
    utils.click(prodObjects.submitBtn());
    // the following lines create data
    // utils.click(prodObjects.createListingBtn());
    // products.verifyToastMessage(data.toastMessage);
    // products.verifyListingCreated(data.title)
  });
});
