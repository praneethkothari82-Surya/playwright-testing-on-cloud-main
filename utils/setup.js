const { chromium } = require('playwright');

const connectToBrowser = async (capability) => {
  const { user, accessKey } = capability['LT:Options'];
  if (!user || !accessKey) {
    throw new Error('LT_USERNAME and LT_ACCESS_KEY must be set to connect to LambdaTest.');
  }

  console.log('Initializing test:: ', capability['LT:Options']['name']);
  const browser = await chromium.connect({
    wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capability))}`
  });
  return browser;
};

module.exports = { connectToBrowser };
