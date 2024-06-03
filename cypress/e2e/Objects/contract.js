export default class ContractObjects {
  pricing = {
    monthlyCheckbox: () =>
      cy.get(".css-1w57s29 > div:nth-of-type(1) .PrivateSwitchBase-input"),
    oneYearCheckbox: () =>
      cy.get(".css-1w57s29 > div:nth-of-type(2) .PrivateSwitchBase-input"),
    twoYearsCheckbox: () =>
      cy.get(".css-1w57s29 > div:nth-of-type(3) .PrivateSwitchBase-input"),
    threeYearsCheckbox: () =>
      cy.get(".css-1w57s29 > div:nth-of-type(4) .PrivateSwitchBase-input"),
    addDimension: () => cy.get("button").contains("Add Another Dimension"),
    addUsageFee: () => cy.get("button").contains("Add Another Usage Fee"),
    contractType: () =>
      cy.get("#mui-component-select-multipleDimensionSelection"),
    dimension1Name: () => cy.get('[name="product_dimension.0.name"]'),
    dimension1Description: () =>
      cy.get('[name="product_dimension.0.description"]'),
    dimension1ApiName: () => cy.get('[name="product_dimension.0.api_name"]'),
    dimension1AdditionalCheckbox: () =>
      cy.get('[name="product_dimension.0.should_charge_usage_dimensions"]'),
    dimension1AdditionalDescription: () =>
      cy.get('[name="product_dimension.0.additional_usage_description"]'),
    dimension1UsageDescription: () =>
      cy.get('[name="usage_dimensions.0.description"]'),
    dimension1UsageApiName: () =>
      cy.get('[name="usage_dimensions.0.api_name"]'),
    dimension2Name: () => cy.get('[name="product_dimension.1.name"]'),
    dimension2Description: () =>
      cy.get('[name="product_dimension.1.description"]'),
    dimension2ApiName: () => cy.get('[name="product_dimension.1.api_name"]'),
    dimension3Name: () => cy.get('[name="product_dimension.2.name"]'),
    dimension3Description: () =>
      cy.get('[name="product_dimension.2.description"]'),
    dimension3ApiName: () => cy.get('[name="product_dimension.2.api_name"]'),
  };
}
