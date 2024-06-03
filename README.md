# Getting Started

Instructions to setup and run the project locally.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/en/download/current)

### Setup

- Clone the repository
  ```sh
  git clone https://github.com/Feenix-ai/test-automation.git
  ```
- Run the following command in terminal to install all the dependencies
  ```sh
  npm install
  ```

### Execution

- To execute testcases using Cypress UI, run the command

  > It will not generate report.

  ```sh
  npx cypress open
  ```

  - Click on E2E Testing
  - Select Browser
    It will open the Cypress UI in the browser for interactive testing click on any spec file to run its tests.
> Following commands will generate report.

- To execute testcases without using Cypress UI, run the command
  ```sh
  npx cypress run
  ```
  It will execute all the testcases without displaying browser (headless mode)
- To execute testcases in a headed browser (with a visible window), run the command
  ```sh
  npx cypress run --headed
  ```
- To run a single test file, use the command
  ```sh
  npx cypress run --spec <path/to/test-file.cy.js>
  ```
  For example, to run test related to **Templates** only, you can run command
  ```sh
  npx cypress run --spec cypress/e2e/Templates.cy.js
  ```
- To execute tests on a specific browser, use command

  ```sh
  npx cypress run --browser <browser-name>
  ```

  For example, to execute tests on chrome, run command

  ```sh
  npx cypress run --browser chrome
  ```

- To execute tests and upload results on cypress cloud, run command

  > Caution: Use Cypress Cloud only when it's needed.

  ```sh
  npx cypress run --record --key c5e80216-6ba1-4de8-984b-fa63ea30b538
  ```

  You can use combination of command line flags too. For example,

  ```sh
  npx cypress run --record --key c5e80216-6ba1-4de8-984b-fa63ea30b538 --browser chrome --spec cypress/e2e/*.js
  ```

  It will execute all the testcases using chrome browser in a headless mode and upload results on [cypress cloud](https://cloud.cypress.io/). You'll get results summary in slack too.

- To trigger test execution using GitHub Actions
  - Go to Actions tab on GitHub
  - Click on Workflow file in the left pane i.e Feenix.ai Cypress Tests
  - Click on Run Workflow dropdown
  - Select branch to run tests from
  - Click on Run Workflow button
    Execution will be started and at the end of execution you'll get results summary in slack and you can see detailed report in cypress cloud and in artifacts tab in GitHub Actions. It will not generate report on local machine.

### Reporting

- **Mochawesome Report**
  You can view mochawesome report after test execution by opening _cypress/reports/html/index.html_ file in a browser.

  If you used cypress cloud for execution, you can also view results inside [cypress cloud](https://cloud.cypress.io/).

### Version

Current Version: v2.1.0
