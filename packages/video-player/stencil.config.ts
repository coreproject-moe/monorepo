import { Config } from "@stencil/core";
import copy from 'rollup-plugin-copy';

export const config: Config = {
  namespace: "video-player",
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "../loader"
    },
    {
      type: "dist-custom-elements",
      customElementsExportBehavior: "auto-define-custom-elements",
      externalRuntime: false
    },
    {
      type: "docs-readme"
    },
    {
      type: "www",
      serviceWorker: null // disable service workers
    }
  ],
  testing: {
    browserHeadless: "new"
  },
  rollupPlugins: {
    before: [
      copy({
        targets: [{
          src: '../../node_modules/webtorrent/dist/sw.min.js', dest: './www/'
        }],
        verbose: true,
      })
    ]
  }
};
