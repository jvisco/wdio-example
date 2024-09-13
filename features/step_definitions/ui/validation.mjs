'use strict';

import {assert} from 'chai';
import {Then} from '@wdio/cucumber-framework';

Then(/^I should see my web page$/, async function () {
    const subtitle = await browser.$('.hero__subtitle').getText();
    assert.equal(subtitle, 'Next-gen browser and mobile automation test framework for Node.js', `subtitle`);
});

Then(/^I should be ignored$/, async function () {
    throw Error('Scenario should have been ignored using Cucumber tags');
});
