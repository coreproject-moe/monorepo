# @coreproject-moe/icons

Icon pack for [@coreproject-moe](https://github.com/coreproject-moe), made using [@stencil](https://github.com/ionic-team/stencil)

![NPM Version](https://img.shields.io/npm/v/%40coreproject-moe%2Ficons?style=for-the-badge)
![NPM Downloads](https://img.shields.io/npm/dm/%40coreproject-moe%2Ficons?style=for-the-badge)
![NPM Unpacked Size](https://img.shields.io/npm/unpacked-size/%40coreproject-moe%2Ficons?style=for-the-badge)

## Contents

-   [Installation](#installation)
-   [Usage](#usage)
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

## Components

<table><thead>
  <tr>
    <th>component-name</th>
    <th>preview</th>
    <th></th>
  </tr></thead>
<tbody>
  
  <tr>
    <td><code>coreproject-logo-figma</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/figma.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-logo-figma/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-logo-github</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/github.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-logo-github/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-airplay</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/airplay.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-airplay/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-alert-triangle</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/alert-triangle.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-alert-triangle/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-align</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/align-center.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-align/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-arrow</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/arrow-down-left.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-arrow/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-at-sign</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/at-sign.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-at-sign/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-award</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/award.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-award/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-bar-chart</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/bar-chart.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-bar-chart/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-bell</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/bell-off.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-bell/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-book</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/book-open.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-book/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-box</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/box.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-box/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-calendar</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/calendar.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-calendar/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-cast</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/cast.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-cast/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-check</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/check.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-check/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-chevron</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/chevron-down.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-chevron/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-chevrons</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/chevrons-down.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-chevrons/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-circle</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/circle.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-circle/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-clipboard</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/clipboard.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-clipboard/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-clock</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/clock.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-clock/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-cloud-off</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/cloud-off.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-cloud-off/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-code</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/code.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-code/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-compass</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/compass.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-compass/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-copy</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/copy.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-copy/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-corner</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/corner-down-left.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-corner/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-corner-right-down</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/corner-right-down.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-corner-right-down/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-delete</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/delete.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-delete/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-download</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/download-cloud.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-download/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-download-cloud</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/download-cloud.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-download-cloud/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-edit</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/edit-box.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-edit/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-expand</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/expand.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-expand/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-external-link</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/external-link.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-external-link/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-eye</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/eye-close.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-eye/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-fast-forward</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/fast-forward.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-fast-forward/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-file</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/file-minus.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-file/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-filter</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/filter.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-filter/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-flag</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/flag.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-flag/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-folder</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/folder-minus.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-folder/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-frown</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/frown.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-frown/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-gift</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/gift.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-gift/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-globe</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/globe.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-globe/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-grid</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/grid.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-grid/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-hard-drive</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/hard-drive.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-hard-drive/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-hash</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/hash.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-hash/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-headphones</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/headphones.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-headphones/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-heart</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/heart.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-heart/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-help-circle</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/help-circle.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-help-circle/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-home</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/home.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-home/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-info</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/info.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-info/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-key</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/key.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-key/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-link</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/link-horizontal.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-link/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-list</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/list.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-list/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-lock</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/lock.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-lock/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-log-in</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/log-in.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-log-in/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-log-out</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/log-out.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-log-out/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-mail</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/mail.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-mail/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-map-pin</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/map-pin.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-map-pin/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-maximize</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/maximize.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-maximize/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-meh</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/meh.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-meh/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-message-circle</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/message-circle.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-message-circle/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-minimize</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/minimize.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-minimize/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-minus</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/minus.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-minus/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-monitor</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/monitor.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-monitor/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-moon</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/moon.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-moon/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-more</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/more-horizontal.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-more/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-mouse-pointer</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/mouse-pointer.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-mouse-pointer/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-move</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/move.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-move/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-pause</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/pause-circle.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-pause/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-pause-circle</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/pause-circle.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-pause-circle/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-play</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/play-circle.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-play/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-play-circle</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/play-circle.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-play-circle/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-plus</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/plus-circle.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-plus/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-refresh</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/refresh-ccw.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-refresh/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-repeat</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/repeat.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-repeat/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-rotate</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/rotate-ccw.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-rotate/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-save</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/save.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-save/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-settings</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/settings.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-settings/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-share</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/share.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-share/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-shield</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/shield-off.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-shield/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-shopping-cart</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/shopping-cart.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-shopping-cart/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-shrink</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/shrink.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-shrink/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-smartphone</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/smartphone.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-smartphone/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-smile</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/smile.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-smile/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-speaker</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/speaker.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-speaker/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-star</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/star.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-star/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-sun</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/sun.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-sun/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-tag</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/tag.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-tag/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-terminal</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/terminal.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-terminal/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-thumbs</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/thumbs-down.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-thumbs/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-toggle</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/toggle-left.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-toggle/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-tool</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/tool.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-tool/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-trash</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/trash-with-lines.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-trash/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-trending</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/trending-down.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-trending/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-triangle</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/triangle.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-triangle/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-twitter</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/twitter.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-twitter/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-type</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/type.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-type/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-underline</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/underline.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-underline/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-unlock</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/unlock.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-unlock/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-upload</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/upload-cloud.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-upload/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-upload-cloud</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/upload-cloud.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-upload-cloud/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-user</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/user-check.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-user/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-users</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/users.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-users/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-volume</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/volume-full.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-volume/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-x</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/x-circle.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-x/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-zap-off</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/zap-off.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-zap-off/readme.md'>properties</a></td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-zoom</code></td>
    <td><img width="20" src="https://raw.githubusercontent.com/coreproject-moe/icons/main/data/svg/zoom-in.svg" /></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-zoom/readme.md'>properties</a></td>
  </tr>
  
</tbody>
</table>

## License

This project is licensed under the `AGPL-3.0` License. See the [LICENSE](https://github.com/coreproject-moe/icons?tab=AGPL-3.0-1-ov-file#readme) file for more details.
