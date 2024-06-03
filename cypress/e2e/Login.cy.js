import neatCsv from "neat-csv";

let regData;
describe("Authorization", () => {
  before(() => {
    cy.fixture("DataFile.csv")
      .then(neatCsv)
      .then((response) => (regData = response));
  });

  it("TC1 - Verify user is able to login with valid email and valid password", () => {
    cy.login(regData[0].UserEmail, regData[0].Password);
  });
});
