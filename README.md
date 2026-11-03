
# Web Automation With Playwright On Cloud

Execute your Playwright automated test across 3000 + browsers, devices and platform.



## Pre-requisites

 Node.js  (Node.js 18.x and above is recommended) 

 Feel free to use any OS

 Windows - Windows 10+, Windows Server 2016+ or Windows Subsystem for Linux (WSL).

 MAC - MacOS 12 Monterey, MacOS 13 Ventura, or MacOS 14 Sonoma.

 Linux - Debian 11, Debian 12, Ubuntu 20.04 or Ubuntu 22.04, with x86-64 or arm64  architecture.

 Git - Any version


## Getting Started

[Create Your Own LambdatTest Account](https://accounts.lambdatest.com/register?utm_source=YouTube&utm_medium=Organic&utm_campaign=Oct30&utm_term=mo&utm_content=LT_Sign_Up)

[Clone This Repository](https://github.com/Mukesh-50/playwright-testing-on-cloud.git)

[Capability Generator](https://www.lambdatest.com/capabilities-generator/)

```
git clone https://github.com/Mukesh-50/playwright-testing-on-cloud.git
```



## Execute the test

Set the LambdaTest credentials and ecommerce test account credentials in the
environment. Never put these values in source code.

Windows (Command Prompt):
```
set "LT_USERNAME=YOUR_LAMBDATEST_USERNAME"
set "LT_ACCESS_KEY=YOUR_LAMBDATEST_ACCESS_KEY"
set "E2E_USERNAME=YOUR_TEST_ACCOUNT_EMAIL"
set "E2E_PASSWORD=YOUR_TEST_ACCOUNT_PASSWORD"
```

macOS and Linux:
```
export LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
export LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"
export E2E_USERNAME="YOUR_TEST_ACCOUNT_EMAIL"
export E2E_PASSWORD="YOUR_TEST_ACCOUNT_PASSWORD"
```


![Capability Generator](https://github.com/Mukesh-50/automation-testing-on-cloud-demo/assets/7221229/781aabaa-67eb-4b12-b0f8-f16bc9748d73)

<br>


![Account Settings](https://github.com/Mukesh-50/automation-testing-on-cloud-demo/assets/7221229/52e18133-6b0a-4a79-a754-58da2e2b7087)


## Execute below command

```
  npm ci
  npx playwright test
```

## Run from Jenkins on AWS EC2

Use a Linux Jenkins agent on EC2 with Git, Node.js 18 or newer, and npm available
on the agent's `PATH`. Add the repository to a Jenkins Pipeline job so it loads
the checked-in `Jenkinsfile`. The pipeline installs the locked dependencies,
runs the tests, and archives the Playwright HTML report and test results.

Create these Jenkins credentials as **Username with password** credentials:

| Jenkins credential ID | Username | Password |
| --- | --- | --- |
| `lambdatest` | LambdaTest username | LambdaTest access key |
| `ecommerce-test-user` | Test account email | Test account password |

The test account must be valid on the configured ecommerce site. The LambdaTest
credentials are injected only during the test stage; do not put credentials in
the repository or in the Jenkinsfile. The EC2 agent needs outbound HTTPS access
to the npm registry, LambdaTest, and the ecommerce site.

Run `npm test` locally after setting `LT_USERNAME`, `LT_ACCESS_KEY`,
`E2E_USERNAME`, and `E2E_PASSWORD` in the environment. The configured browser
projects execute against LambdaTest; local browser binaries are not required.
