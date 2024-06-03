import Utilities from "../../support/utils";
import ContractObjects from "../Objects/contract";
import ProductsObjects from "../Objects/products";

const utils = new Utilities();
const contractObjects = new ContractObjects();
const product = new ProductsObjects();

export default class ContractMethods {
  fillPricingFields({
    contractMonthly = false,
    contract1Year = false,
    contract2Years = false,
    contract3Years = false,
    contractType = false,
    pricingCategory = false,
    d1Name = false,
    d1ApiName = false,
    d1Description = false,
    d1AdditionalCheckbox = false,
    d1AdditionalDescription = false,
    d2Name = false,
    d2ApiName = false,
    d2Description = false,
    d3Name = false,
    d3ApiName = false,
    d3Description = false,
    d1UsageDescription = false,
    d1UsageApiName = false,
    awsAccountID = false,
  }) {
    utils.clickByObjectText(product.pricing.pricingTab(), "Pricing");
    if (contractMonthly) {
      utils.check(contractObjects.pricing.monthlyCheckbox());
    }
    if (contract1Year) {
      utils.check(contractObjects.pricing.oneYearCheckbox());
    }
    if (contract2Years) {
      utils.check(contractObjects.pricing.twoYearsCheckbox());
    }
    if (contract3Years) {
      utils.check(contractObjects.pricing.threeYearsCheckbox());
    }
    if (contractType) {
      utils.click(contractObjects.pricing.contractType());
      utils.clickByObjectText(product.listBox(), contractType);
    }
    utils.click(product.pricing.selectCategoryField());
    utils.clickByObjectText(
      product.pricing.categoriesDropdown(),
      pricingCategory
    );
    utils.enterText(contractObjects.pricing.dimension1Name(), d1Name);
    utils.enterText(contractObjects.pricing.dimension1ApiName(), d1ApiName);
    utils.verifyVisibility(contractObjects.pricing.dimension1Description());
    utils.enterText(
      contractObjects.pricing.dimension1Description(),
      d1Description
    );
    if (d1AdditionalCheckbox) {
      utils.check(contractObjects.pricing.dimension1AdditionalCheckbox());
      utils.enterText(
        contractObjects.pricing.dimension1AdditionalDescription(),
        d1AdditionalDescription
      );
    }
    if (d2Name) {
      utils.click(contractObjects.pricing.addDimension());
      utils.enterText(contractObjects.pricing.dimension2Name(), d2Name);
      utils.enterText(contractObjects.pricing.dimension2ApiName(), d2ApiName);
      utils.verifyVisibility(contractObjects.pricing.dimension2Description());
      utils.enterText(
        contractObjects.pricing.dimension2Description(),
        d2Description
      );
    }
    if (d3Name) {
      utils.click(contractObjects.pricing.addDimension());
      utils.enterText(contractObjects.pricing.dimension3Name(), d3Name);
      utils.enterText(contractObjects.pricing.dimension3ApiName(), d3ApiName);
      utils.verifyVisibility(contractObjects.pricing.dimension3Description());
      utils.enterText(
        contractObjects.pricing.dimension3Description(),
        d3Description
      );
    }
    if (d1UsageDescription) {
      utils.click(contractObjects.pricing.addUsageFee());
      utils.enterText(
        contractObjects.pricing.dimension1UsageDescription(),
        d1UsageDescription
      );
      utils.enterText(
        contractObjects.pricing.dimension1UsageApiName(),
        d1UsageApiName
      );
    }

    if (awsAccountID) {
      utils.enterText(product.pricing.accountID(), awsAccountID);
    }
  }
}
