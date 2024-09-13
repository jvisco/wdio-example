'use strict';

import {When} from '@wdio/cucumber-framework';

When(/^I load my web page$/, async function () {
    await browser.url('https://webdriver.io/', 'complete');
});
