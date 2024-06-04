export default class ProductObjects {
  orgDropdown = () => cy.get(".css-1y3ojfh .MuiSelect-select");
  orgMenu = () => cy.get("#menu- > .MuiPaper-root");
  button = () => cy.get(".MuiStack-root button");
  submitBtn = () => this.button().contains("Submit");
  saveTempBtn = () => cy.get(".css-jv1nn9");
  createListingBtn = () =>
    cy.get(".MuiDialogActions-root > .MuiButtonBase-root");
  toastMessage = () =>
    cy.get(".css-1nehd7o > .MuiPaper-root > .MuiAlert-message");
  listBox = () => cy.get("[role=listbox]");
  addBtn = () => cy.get(".css-5ax1kt > .MuiButtonBase-root");
  productList = () => cy.get(".MuiMenu-list li");
  firstProductTitle = () => cy.get("[data-field='ProductTitle']").eq(1);
  Sidebar = {
    productsTab: () => cy.get(".MuiList-root a"),
  };
  general = {
    generalTab: () =>
      cy.get(".MuiAccordionSummary-content").contains("General"),
    errorIcon: () => this.general.generalTab().get('[data-testid="ErrorIcon"]'),
    sku: () => cy.get("[name='sku']"),
    title: () => cy.get("[name='product_title']"),
    productDescription: () => cy.get("[name='prod_description']"),
    shortProductDescription: () => cy.get("[name='short_prod_desc']"),
    productLogoURL: () => cy.get("[name='prod_logo_url']"),
    productVideoLink: () => cy.get("[name='prod_vid_link']"),
    eulaStandard: () => cy.get("[value='standard'][name='eula']"),
    eulaCustom: () => cy.get("[value='custom'][name='eula']"),
    eulaUrl: () => cy.get("[name='eula_url']"),
    highlightOne: () => cy.get("[name='highlightOne']"),
    highlightTwo: () => cy.get("[name='highlightTwo']"),
    highlightThree: () => cy.get("[name='highlightThree']"),
    productCategoryOne: () => cy.get("#mui-component-select-prod_cat_one"),
    productCategoryTwo: () => cy.get("#mui-component-select-prod_cat_two"),
    productCategoryThree: () => cy.get("#mui-component-select-prod_cat_three"),
    searchKeywords: () => cy.get("[name='search_keywords']"),
    resourceNameOne: () => cy.get("[name='res_name_one']"),
    resourceUrlOne: () => cy.get("[name='res_url_one']"),
    resourceNameTwo: () => cy.get("[name='res_name_two']"),
    resourceUrlTwo: () => cy.get("[name='res_url_two']"),
    resourceNameThree: () => cy.get("[name='res_name_three']"),
    resourceUrlThree: () => cy.get("[name='res_url_three']"),
    supportOfferedYes: () => cy.get("[value='true'][name='support_offered']"),
    supportOfferedNo: () => cy.get("[value='false'][name='support_offered']"),
    supportDescription: () => cy.get("[name='support_description']"),
    refundPolicy: () => cy.get("[name='refund_policy']"),
    saasRegistrationPageOption: () =>
      cy.get("#mui-component-select-saas_registration_page_option"),
    saasUrl: () => cy.get("[name='fulfillment_url']"),
    //Review popup
    reviewSku: () => cy.get(".Mui-disabled[name='sku']"),
    reviewTitle: () => cy.get(".Mui-disabled[name='product_title']"),
    reviewProductDescription: () =>
      cy.get(".Mui-disabled[name='prod_description']"),
    reviewShortProductDescription: () =>
      cy.get(".Mui-disabled[name='short_prod_desc']"),
    reviewProductLogoURL: () => cy.get(".Mui-disabled[name='prod_logo_url']"),
    reviewProductVideoLink: () => cy.get(".Mui-disabled[name='prod_vid_link']"),
    reviewEula: () =>
      cy.get(".MuiDialogContent-root div:nth-of-type(9) .MuiFormControl-root"),
    reviewEulaStandard: () =>
      cy.get(".MuiDialogContent-root [value='standard'][name='eula']"),
    reviewEulaCustom: () =>
      cy.get(".MuiDialogContent-root [value='custom'][name='eula']"),
    reviewEulaUrl: () => cy.get(".Mui-disabled[name='eula_url']"),
    reviewHighlightOne: () => cy.get(".Mui-disabled[name='highlightOne']"),
    reviewHighlightTwo: () => cy.get(".Mui-disabled[name='highlightTwo']"),
    reviewHighlightThree: () => cy.get(".Mui-disabled[name='highlightThree']"),
    reviewProductCategoryOne: () =>
      cy.get("#mui-component-select-prod_cat_one.Mui-disabled"),
    reviewProductCategoryTwo: () =>
      cy.get("#mui-component-select-prod_cat_two.Mui-disabled"),
    reviewProductCategoryThree: () =>
      cy.get("#mui-component-select-prod_cat_three.Mui-disabled"),
    reviewSearchKeywords: () => cy.get(".Mui-disabled[name='search_keywords']"),
    reviewResourceNameOne: () => cy.get(".Mui-disabled[name='res_name_one']"),
    reviewResourceUrlOne: () => cy.get(".Mui-disabled[name='res_url_one']"),
    reviewResourceNameTwo: () => cy.get(".Mui-disabled[name='res_name_two']"),
    reviewResourceUrlTwo: () => cy.get(".Mui-disabled[name='res_url_two']"),
    reviewResourceNameThree: () =>
      cy.get(".Mui-disabled[name='res_name_three']"),
    reviewResourceUrlThree: () => cy.get(".Mui-disabled[name='res_url_three']"),
    reviewSupportOffered: () => cy.get(".Mui-disabled[name='support_offered']"),
    reviewSupportYes: () =>
      cy.get(".MuiDialogContent-root [value='true'][name='support_offered']"),
    reviewSupportNo: () =>
      cy.get(".MuiDialogContent-root [value='false'][name='support_offered']"),
    reviewSupportDescription: () =>
      cy.get(".Mui-disabled[name='support_description']"),
    reviewRefundPolicy: () => cy.get(".Mui-disabled[name='refund_policy']"),
    reviewSaasRegistrationPageOption: () =>
      cy.get(
        "#mui-component-select-saas_registration_page_option.Mui-disabled"
      ),
    reviewSaasUrl: () => cy.get(".Mui-disabled[name='fulfillment_url']"),
  };
  pricing = {
    pricingTab: () =>
      cy.get(".MuiAccordionSummary-root > .MuiAccordionSummary-content"),
    pricingTab_errorIcon: () =>
      cy.get(
        ".MuiAccordionSummary-root  .MuiAccordionSummary-content :nth-child(1)  .MuiSvgIcon-root"
      ),
    selectPricingCategory_mendatoryFieldError: () =>
      cy.get(".MuiFormHelperText-filled .Mui-error"),
    selectCategoryField: () =>
      cy.get("#mui-component-select-usage_unit_category"),
    categoriesDropdown: () => cy.get(".MuiPaper-elevation8 ul li"),
    addDimensionBtn: () => cy.get(".css-6r2fzw > .MuiButtonBase-root"),
    dimension1DisplayName: () =>
      cy.get('[name="subscription_dimensions.0.name"]'),
    dimension1ApiName: () =>
      cy.get('[name="subscription_dimensions.0.api_name"]'),
    dimension1Description: () =>
      cy.get('[name="subscription_dimensions.0.description"]'),
    accountID: () => cy.get("[name='allowed_account_ids']"),
    reviewPricingCategory: () =>
      cy.get("#mui-component-select-usage_unit_category.Mui-disabled"),
    reviewDimension1DisplayName: () =>
      cy.get('.Mui-disabled[name="subscription_dimensions.0.name"]'),
    reviewDimension1ApiName: () =>
      cy.get('.Mui-disabled[name="subscription_dimensions.0.api_name"]'),
    reviewDimension1Description: () =>
      cy.get('.Mui-disabled[name="subscription_dimensions.0.description"]'),
    reviewAccountID: () => cy.get(".Mui-disabled[name='allowed_account_ids']"),
  };
  onboarding_Page = {
    onboardingTab: () =>
      cy
        .get(".MuiAccordionSummary-root > .MuiAccordionSummary-content")
        .contains("Onboarding Page"),
    addFieldBtn: () => cy.get(".css-j7qwjs > .MuiButton-root"),
    fieldName: () => cy.get('[placeholder="Field Name"]').last(),
    checkBox: () =>
      cy.get(
        ".css-tayi9h > div:nth-of-type(5) > div:nth-of-type(3) input:nth-of-type(1)"
      ),
    reviewFieldName: () =>
      cy.get('.Mui-disabled[placeholder="Field Name"]').last(),
    reviewCheckBox: () =>
      cy.get(
        ".MuiDialogContent-root div:nth-of-type(5) label:nth-of-type(1) input"
      ),
  };
  notifications = {
    notificationsTab: () =>
      cy.get(
        ":nth-child(5) > .MuiButtonBase-root > .MuiAccordionSummary-content > .MuiTypography-root"
      ),
    selectNotificationField: () =>
      cy.get("#mui-component-select-notification_name"),
    selectNotification: () => cy.get(".MuiList-root li"),
    reviewNotification: () =>
      cy.get(
        "#mui-component-select-notification_name.Mui-disabled > .MuiTypography-root"
      ),
  };
}
