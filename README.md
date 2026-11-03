# Playwright page-load check

This project opens the Userfeel tester FAQ page in a local Chromium
browser and verifies the response succeeds and the page has a title. The check
does not sign in and does not require LambdaTest or test-account credentials.

## Run locally

Requirements: Node.js 18 or newer and npm.

```sh
npm ci
npx playwright install chromium
npm test
```

## Run from Jenkins on AWS EC2

Use a Linux Jenkins agent with Node.js 18 or newer and npm. The checked-in
`Jenkinsfile` installs locked npm dependencies and Chromium, runs the test, and
publishes the Allure report when the Jenkins Allure plugin and Allure
Commandline tool are configured. It also archives the Allure results,
Playwright HTML report, and test results.

For a Freestyle job, use an **Execute shell** build step:

```sh
npm ci
npx playwright install --with-deps chromium
npm test
```

Install the Jenkins Allure plugin and configure an **Allure Report** post-build
action with `allure-results` as the results path. No Jenkins credentials or
`.env` file are needed.
