'use strict';
import {setWorldConstructor} from '@cucumber/cucumber';

function CustomWorld({attach, parameters}) {
    this.attach = attach;
    this.parameters = parameters;

}

setWorldConstructor(CustomWorld);
