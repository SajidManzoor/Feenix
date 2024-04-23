import productsMethods from "./Methods/productsMethods"
const csv = require('neat-csv')

const products = new productsMethods();

let regData;
describe('Visit the app', () => {

  before(() => {
    cy.fixture('DataFile.csv')
    .then(csv)
    .then(response => regData=response)
})

  it('User able to logged in successfully', () => {
    cy.visit('/');
    products.enterEmail(regData[0].UserEmail);
    products.enterPassword(regData[0].Password);
    products.clickLogin();
  })
})