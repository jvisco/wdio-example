'use strict';

import {Then} from '@cucumber/cucumber';

Then(/^I should be excluded$/, async function () {
    throw Error('Scenario with this step should be excluded.');
});
