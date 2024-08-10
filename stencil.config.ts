import { Config } from '@stencil/core';

export const config: Config = {
    namespace: 'coreproject-icons',
    extras: {
        enableImportInjection: true,
    },
    outputTargets: [
        {
            type: 'dist-hydrate-script',
        },
        {
            type: 'dist',
            esmLoaderPath: '../loader',
        },
        {
            type: 'dist-custom-elements',
            customElementsExportBehavior: 'bundle',
            externalRuntime: false,
        },
        {
            type: 'docs-readme',
        },
        {
            type: 'www',
            serviceWorker: null, // disable service workers
        },
    ],
    testing: {
        browserHeadless: 'new',
    },
};
