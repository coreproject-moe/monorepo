import { Config } from "@stencil/core";
// import copy from 'rollup-plugin-copy';

export const config: Config = {
  namespace: "core-video-player",
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "../loader"
    },
    {
      type: "dist-custom-elements",
      customElementsExportBehavior: "auto-define-custom-elements",
      externalRuntime: false,
      minify: true
    },
    {
      type: "docs-readme"
    },
    {
      type: "www",
      serviceWorker: null, // disable service workers
      empty: false,
    }
  ],
  testing: {
    browserHeadless: "new"
  },
  // plugins: [
  //   copy({
  //     targets: [
  //       { src: '../../node_modules/webtorrent/dist/sw.min.js', dest: './dist/' },
  //     ],
  //   })
  // ],
  // rollupPlugins: {
  //   before: [
  //     copy({
  //       targets: [
  //         { src: '../../node_modules/webtorrent/dist/sw.min.js', dest: './www/' },
  //         { src: '../../node_modules/webtorrent/dist/sw.min.js', dest: './dist/' },
  //       ],
  //       verbose: true,
  //       copyOnce: true,
  //     })
  //   ]
  // }
};
