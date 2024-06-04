import Utilities from "../../support/utils";
import ProductObjects from "../Objects/products";

const utils = new Utilities();
const product = new ProductObjects();

export default class ProductsMethods {
  /**
   * Selects Organization from the dropdown
   * @param {String} org Organization Name
   */
  selectOrg(org) {
    utils.click(product.orgDropdown());
    utils.clickByObjectText(product.orgMenu(), org);
  }
  /**
   * Verifies error icon is visible on Pricing tab
   */
  verifyPricingErrorIcon() {
    utils.verifyVisibility(product.pricing.pricingTab_errorIcon());
  }
  /**
   * Fills General tab fields
   */
  fillGeneralFields({
    sku = " ",
    title = " ",
    productDescription = " ",
    shortProductDescription = " ",
    productLogoURL = " ",
    productVideoLink = false,
    eula = " ",
    eulaUrl = false,
    highlightOne = " ",
    highlightTwo = false,
    highlightThree = false,
    productCategoryOne = " ",
    productCategoryTwo = false,
    productCategoryThree = false,
    searchKeywords = " ",
    resourceNameOne = false,
    resourceUrlOne = false,
    resourceNameTwo = false,
    resourceUrlTwo = false,
    resourceNameThree = false,
    resourceUrlThree = false,
    supportOffered = false,
    supportDescription = false,
    refundPolicy = " ",
    saasRegistrationPageOption = " ",
    saasUrl = false,
  }) {
    utils.click(product.general.generalTab());
    utils.enterText(product.general.sku(), sku);
    utils.enterText(product.general.title(), title);
    utils.enterText(product.general.productDescription(), productDescription);
    utils.enterText(
      product.general.shortProductDescription(),
      shortProductDescription
    );
    utils.enterText(product.general.productLogoURL(), productLogoURL);
    if (productVideoLink) {
      utils.enterText(product.general.productVideoLink(), productVideoLink);
    }
    if (eula === "standard") {
      utils.click(product.general.eulaStandard());
    } else if (eula === "custom") {
      utils.click(product.general.eulaCustom());
    }
    if (eulaUrl) {
      utils.enterText(product.general.eulaUrl(), eulaUrl);
    }
    utils.enterText(product.general.highlightOne(), highlightOne);
    if (highlightTwo) {
      utils.enterText(product.general.highlightTwo(), highlightTwo);
    }
    if (highlightThree) {
      utils.enterText(product.general.highlightThree(), highlightThree);
    }
    utils.click(product.general.productCategoryOne());
    utils.clickByObjectText(product.listBox(), productCategoryOne);
    if (productCategoryTwo) {
      utils.click(product.general.productCategoryTwo());
      utils.clickByObjectText(product.listBox(), productCategoryTwo);
    }
    if (productCategoryThree) {
      utils.click(product.general.productCategoryThree());
      utils.clickByObjectText(product.listBox(), productCategoryThree);
    }
    utils.enterText(product.general.searchKeywords(), searchKeywords);
    if (resourceNameOne) {
      utils.enterText(product.general.resourceNameOne(), resourceNameOne);
    }
    if (resourceUrlOne) {
      utils.enterText(product.general.resourceUrlOne(), resourceUrlOne);
    }
    if (resourceNameTwo) {
      utils.enterText(product.general.resourceNameTwo(), resourceNameTwo);
    }
    if (resourceUrlTwo) {
      utils.enterText(product.general.resourceUrlTwo(), resourceUrlTwo);
    }
    if (resourceNameThree) {
      utils.enterText(product.general.resourceNameThree(), resourceNameThree);
    }
    if (resourceUrlThree) {
      utils.enterText(product.general.resourceUrlThree(), resourceUrlThree);
    }
    if (supportOffered) {
      utils.click(product.general.supportOfferedYes());
    } else {
      utils.click(product.general.supportOfferedNo());
    }

    if (supportDescription) {
      utils.enterText(product.general.supportDescription(), supportDescription);
    }
    utils.enterText(product.general.refundPolicy(), refundPolicy);
    utils.click(product.general.saasRegistrationPageOption());
    utils.clickByObjectText(product.listBox(), saasRegistrationPageOption);
    if (saasUrl) {
      utils.enterText(product.general.saasUrl(), saasUrl);
    }
  }
  /**
   * Verifies error icon is visible on General tab
   */
  verifyGeneralErrorIcon() {
    utils.verifyVisibility(product.general.errorIcon());
  }
  /**
   * Verifies toast message is visible and contains the text
   * @param {String} toastMessage
   */
  verifyToastMessage(toastMessage) {
    utils.verifyVisibility(product.toastMessage());
    utils.verifyText(product.toastMessage(), toastMessage);
  }
  /**
   * Fills Pricing tab fields
   */
  fillPricingFields({
    pricingCategory,
    update = false,
    d1DisplayName,
    d1ApiName,
    d1Description,
    awsAccountID = false,
  }) {
    utils.clickByObjectText(product.pricing.pricingTab(), "Pricing");
    utils.click(product.pricing.selectCategoryField());
    utils.clickByObjectText(
      product.pricing.categoriesDropdown(),
      pricingCategory
    );
    if (!update) {
      utils.click(product.pricing.addDimensionBtn());
      utils.verifyVisibility(product.pricing.dimension1DisplayName());
      utils.enterText(product.pricing.dimension1DisplayName(), d1DisplayName);
      utils.verifyVisibility(product.pricing.dimension1ApiName());
      utils.enterText(product.pricing.dimension1ApiName(), d1ApiName);
      utils.verifyVisibility(product.pricing.dimension1Description());
      utils.enterText(product.pricing.dimension1Description(), d1Description);
    } else {
      utils.verifyVisibility(product.pricing.dimension1DisplayName());
      utils.enterText(product.pricing.dimension1DisplayName(), d1DisplayName);
      utils.enterText(product.pricing.dimension1ApiName(), d1ApiName);
      utils.verifyVisibility(product.pricing.dimension1Description());
      utils.enterText(product.pricing.dimension1Description(), d1Description);
    }

    if (awsAccountID) {
      utils.enterText(product.pricing.accountID(), awsAccountID);
    }
  }
  /**
   * Fills Onboarding tab fields
   */
  fillOnboardingFields({ fieldName = false, fieldRequired = false }) {
    utils.click(product.onboarding_Page.onboardingTab());
    if (fieldName) {
      utils.click(product.onboarding_Page.addFieldBtn());
      utils.enterText(product.onboarding_Page.fieldName(), fieldName);
    }
    if (fieldRequired) {
      utils.check(product.onboarding_Page.checkBox());
    }
  }
  /**
   * Fills Notification tab fields
   */
  fillNotificationFields({ notification }) {
    utils.click(product.notifications.notificationsTab());
    utils.click(product.notifications.selectNotificationField());
    utils.clickByObjectText(
      product.notifications.selectNotification(),
      notification
    );
  }
  /**
   * clicks on products tab, clicks on add product button, clicks on product name
   * @param {String} productName Name of the Product e.g. SaaS Subscription, Saas Contract etc.
   */
  navigateToProductPage(productName) {
    utils.clickByObjectText(product.Sidebar.productsTab(), "Products");
    utils.click(product.addBtn());
    utils.clickByObjectText(product.productList(), productName);
  }
  /**
   * Verifies fields in review popup
   */
  verifyReviewPopup({
    sku = " ",
    title = " ",
    productDescription = " ",
    shortProductDescription = " ",
    productLogoURL = " ",
    productVideoLink = false,
    eula = "standard",
    eulaUrl = false,
    highlightOne = " ",
    highlightTwo = "",
    highlightThree = "",
    productCategoryOne = " ",
    productCategoryTwo = " ",
    productCategoryThree = " ",
    searchKeywords = " ",
    resourceNameOne = false,
    resourceUrlOne = false,
    resourceNameTwo = " ",
    resourceUrlTwo = " ",
    resourceNameThree = " ",
    resourceUrlThree = " ",
    supportOffered = false,
    supportDescription = false,
    refundPolicy = " ",
    saasRegistrationPageOption = " ",
    saasUrl = false,
    pricingCategory = " ",
    d1ApiName = " ",
    d1Description = " ",
    awsAccountID = " ",
    fieldName = " ",
    fieldRequired = false,
    notification = " ",
  }) {
    utils.verifyValue(product.general.reviewSku(), sku);
    utils.verifyValue(product.general.reviewTitle(), title);
    utils.verifyValue(
      product.general.reviewProductDescription(),
      productDescription
    );
    utils.verifyValue(
      product.general.reviewShortProductDescription(),
      shortProductDescription
    );
    utils.verifyValue(product.general.reviewProductLogoURL(), productLogoURL);
    utils.verifyValue(
      product.general.reviewProductVideoLink(),
      productVideoLink
    );
    if (eula === "standard") {
      utils.verifyChecked(product.general.reviewEulaStandard());
    } else if (eula === "custom") {
      utils.verifyChecked(product.general.reviewEulaCustom());
    }
    utils.verifyValue(product.general.reviewHighlightOne(), highlightOne);
    utils.verifyValue(product.general.reviewHighlightTwo(), highlightTwo);
    utils.verifyValue(product.general.reviewHighlightThree(), highlightThree);
    utils.verifyText(
      product.general.reviewProductCategoryOne(),
      productCategoryOne
    );
    if (productCategoryTwo !== " ") {
      utils.verifyText(
        product.general.reviewProductCategoryTwo(),
        productCategoryTwo
      );
    }
    if (productCategoryThree !== " ") {
      utils.verifyText(
        product.general.reviewProductCategoryThree(),
        productCategoryThree
      );
    }
    utils.verifyValue(product.general.reviewSearchKeywords(), searchKeywords);
    utils.verifyValue(product.general.reviewResourceNameOne(), resourceNameOne);
    utils.verifyValue(product.general.reviewResourceUrlOne(), resourceUrlOne);
    if (resourceNameTwo !== " ") {
      utils.verifyValue(
        product.general.reviewResourceNameTwo(),
        resourceNameTwo
      );
    }
    if (resourceUrlTwo !== " ") {
      utils.verifyValue(product.general.reviewResourceUrlTwo(), resourceUrlTwo);
    }
    if (resourceNameThree !== " ") {
      utils.verifyValue(
        product.general.reviewResourceNameThree(),
        resourceNameThree
      );
    }
    if (resourceUrlThree !== " ") {
      utils.verifyValue(
        product.general.reviewResourceUrlThree(),
        resourceUrlThree
      );
    }
    if (supportOffered) {
      utils.verifyChecked(product.general.reviewSupportYes());
      utils.verifyValue(
        product.general.reviewSupportDescription(),
        supportDescription
      );
    } else {
      utils.verifyChecked(product.general.reviewSupportNo());
    }
    utils.verifyValue(product.general.reviewRefundPolicy(), refundPolicy);
    utils.verifyText(
      product.general.reviewSaasRegistrationPageOption(),
      saasRegistrationPageOption
    );
    utils.verifyText(product.pricing.reviewPricingCategory(), pricingCategory);
    utils.verifyValue(product.pricing.reviewDimension1ApiName(), d1ApiName);

    utils.verifyValue(
      product.pricing.reviewDimension1Description(),
      d1Description
    );
    utils.verifyValue(product.pricing.reviewAccountID(), awsAccountID);
    utils.verifyValue(product.onboarding_Page.reviewFieldName(), fieldName);
    if (fieldRequired) {
      utils.verifyChecked(product.onboarding_Page.reviewCheckBox());
    } else {
      utils.verifyUnChecked(product.onboarding_Page.reviewCheckBox());
    }
    utils.verifyText(product.notifications.reviewNotification(), notification);
  }
  verifyListingCreated(ProductTitle) {
    utils.verifyText(product.firstProductTitle(), ProductTitle);
  }
}
