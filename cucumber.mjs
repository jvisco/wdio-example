'use strict';
import {DEFAULT_THEME} from '@cucumber/pretty-formatter';
import {existsSync, mkdirSync} from 'fs';

// create regression reports directory if it does not exist
const reports = '/reports';
if (!existsSync(process.cwd() + reports)) {
    mkdirSync(reports.slice(1));
}

// https://github.com/cucumber/cucumber-js/blob/v8.6.0/docs/configuration.md#options
const common = {
    colorsEnabled: true, // not working
    failFast: false,
    forceExit: true,
    format: [
        '@cucumber/pretty-formatter',
        `html:reports/cucumber-report.html`,
        'rerun:@rerun.txt'
    ],
    formatOptions: {
        theme: {
            ...DEFAULT_THEME,
            'feature keyword': [
                'magenta',
                'bold'
            ],
            'docstring content': [
                'dim'
            ],
            'scenario keyword': [
                'magenta',
                'bold'
            ],
            'step keyword': [
                'green',
                'bold'
            ]
        }
    },
    paths: [
        './features/feature_files/api/**/*.feature'
    ],
    import: [
        './features/support/*.mjs',
        './features/step_definitions/api/*.mjs',
    ],
    tags: 'not @ignore'
};

export default common;
