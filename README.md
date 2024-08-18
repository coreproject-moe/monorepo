# @coreproject-moe/icons
Icon pack for [@coreproject-moe](https://github.com/coreproject-moe), made using [@stencil](https://github.com/ionic-team/stencil)

![NPM Version](https://img.shields.io/npm/v/%40coreproject-moe%2Ficons?style=for-the-badge)
![NPM Downloads](https://img.shields.io/npm/dm/%40coreproject-moe%2Ficons?style=for-the-badge)
![NPM Unpacked Size](https://img.shields.io/npm/unpacked-size/%40coreproject-moe%2Ficons?style=for-the-badge)

| Status |                                                                                                                                           |
|--------|-------------------------------------------------------------------------------------------------------------------------------------------|
| build  | ![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/coreproject-moe/icons/CI.yml) |

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
