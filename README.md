# @coreproject-moe/icons

Icon pack for [@coreproject-moe](https://github.com/coreproject-moe), made using [@stencil](https://github.com/ionic-team/stencil)

![NPM Version](https://img.shields.io/npm/v/%40coreproject-moe%2Ficons?style=for-the-badge)
![NPM Downloads](https://img.shields.io/npm/dm/%40coreproject-moe%2Ficons?style=for-the-badge)
![NPM Unpacked Size](https://img.shields.io/npm/unpacked-size/%40coreproject-moe%2Ficons?style=for-the-badge)

## Contents

-   [Installation](#installation)
-   [Usage](#usage)
-   [Development](#development)
-   [Components](#components) (see icons list)
-   [License](#license)

## Installation

You can install the package via npm:

```bash
npm install @coreproject-moe/icons
```

## Usage

You can define package in the main entry file:

```ts
import { defineCustomElements } from "@coreproject-moe/icons/loader";

render(() => {
  onMount(() => {
    defineCustomElements(window);
  });

  return (
    <coreproject-shape-github class="md:size-5 text-accent"></coreproject-shape-github>
  );
}, document.getElementById("root")!);
```

## Development

1. Clone repo and `cd` into it:

```bash
git clone https://github.com/coreproject-moe/icons.git coreproject-icons
cd coreproject-icons
```

2. Install dependencies:

```bash
npm install --verbose
# pnpm install
# yarn install
```

Refer [stencil docs](https://stenciljs.com/).

## Components

<table><thead>
  <tr>
    <th>component-name</th>
    <th>properties</th>
  </tr></thead>
<tbody>
  
  <tr>
    <td><code>coreproject-logo-figma</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-logo-figma/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-logo-github</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-logo-github/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-airplay</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-airplay/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-alert-triangle</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-alert-triangle/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-align</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-align/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-arrow</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-arrow/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-at-sign</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-at-sign/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-award</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-award/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-bar-chart</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-bar-chart/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-bell</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-bell/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-book</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-book/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-box</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-box/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-calendar</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-calendar/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-cast</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-cast/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-check</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-check/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-chevron</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-chevron/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-chevrons</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-chevrons/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-circle</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-circle/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-clipboard</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-clipboard/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-clock</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-clock/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-cloud-off</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-cloud-off/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-code</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-code/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-compass</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-compass/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-copy</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-copy/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-corner</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-corner/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-corner-right-down</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-corner-right-down/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-delete</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-delete/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-download</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-download/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-download-cloud</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-download-cloud/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-edit</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-edit/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-expand</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-expand/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-external-link</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-external-link/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-eye</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-eye/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-fast-forward</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-fast-forward/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-file</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-file/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-filter</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-filter/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-flag</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-flag/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-folder</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-folder/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-frown</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-frown/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-gift</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-gift/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-globe</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-globe/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-grid</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-grid/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-hard-drive</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-hard-drive/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-hash</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-hash/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-headphones</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-headphones/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-heart</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-heart/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-help-circle</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-help-circle/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-home</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-home/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-info</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-info/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-key</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-key/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-link</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-link/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-list</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-list/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-lock</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-lock/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-log-in</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-log-in/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-log-out</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-log-out/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-mail</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-mail/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-map-pin</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-map-pin/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-maximize</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-maximize/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-meh</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-meh/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-message-circle</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-message-circle/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-minimize</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-minimize/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-minus</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-minus/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-monitor</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-monitor/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-moon</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-moon/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-more</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-more/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-mouse-pointer</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-mouse-pointer/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-move</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-move/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-pause</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-pause/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-pause-circle</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-pause-circle/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-play</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-play/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-play-circle</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-play-circle/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-plus</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-plus/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-refresh</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-refresh/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-repeat</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-repeat/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-rotate</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-rotate/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-save</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-save/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-settings</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-settings/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-share</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-share/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-shield</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-shield/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-shopping-cart</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-shopping-cart/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-shrink</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-shrink/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-smartphone</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-smartphone/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-smile</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-smile/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-speaker</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-speaker/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-star</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-star/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-sun</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-sun/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-tag</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-tag/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-terminal</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-terminal/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-thumbs</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-thumbs/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-toggle</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-toggle/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-tool</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-tool/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-trash</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-trash/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-trending</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-trending/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-triangle</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-triangle/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-twitter</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-twitter/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-type</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-type/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-underline</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-underline/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-unlock</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-unlock/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-upload</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-upload/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-upload-cloud</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-upload-cloud/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-user</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-user/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-users</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-users/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-volume</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-volume/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-x</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-x/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-zap-off</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-zap-off/readme.md'>link</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-zoom</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-zoom/readme.md'>link</a></td>
  </tr>
  
</tbody>
</table>

## License

This project is licensed under the `AGPL-3.0` License. See the [LICENSE](https://github.com/coreproject-moe/icons?tab=AGPL-3.0-1-ov-file#readme) file for more details.
