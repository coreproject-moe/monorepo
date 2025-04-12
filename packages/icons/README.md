# @coreproject-moe/icons

![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/coreproject-moe/monorepo/release.yml?style=flat-square)
![NPM License](https://img.shields.io/npm/l/%40coreproject-moe%2Ficons?style=flat-square)
[![NPM Downloads](https://img.shields.io/npm/dm/%40coreproject-moe%2Ficons?style=flat-square)](https://www.npmjs.com/package/@coreproject-moe/icons)
![GitHub Issues or Pull Requests](https://img.shields.io/github/issues/coreproject-moe/monorepo?style=flat-square)
[![Website](https://img.shields.io/website?url=https%3A%2F%2Fcoreproject-moe.github.io%2Ficons&style=flat-square)](https://coreproject-moe.github.io/icons)

A lightweight and customizable web-component-based icon library developed by @coreproject-moe. Designed with performance and ease of use in mind, this library offers a growing collection of accessible, framework-agnostic icons that can be seamlessly integrated into any modern web project.

## Installation

You can install Coreicons from npm with your favorite package manager.
```
npm i @coreproject-moe/icons -D
```

## Configuration
Place the `defineCustomElements` function in your main entry file.\
Check out the examples shown below.

### React (Next.js)
```tsx
// app/layout.tsx
import { defineCustomElements } from "@coreproject-moe/icons/loader";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  defineCustomElements();

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```

### Svelte(Kit)
```svelte
<!-- src/routes/layout.svelte -->
<script lang='ts'>
  import { defineCustomElements } from "@coreproject-moe/icons/loader";
  import { onMount } from 'svelte';

  onMount(() => {
    defineCustomElements();
  })
<script>
```

### Vanilla HTML
```html
<script type="module" src='https://cdn.jsdelivr.net/npm/@coreproject-moe/icons@latest'><script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@coreproject-moe/icons@latest/dist/coreproject-icons/coreproject-icons.js"><script>
```

## Usage
To use a built-in icon from the Ionicons package,\
populate the <code>name</code> attribute on the `coreproject-[shape|logo]-[icon-name]` component:
```html
<coreicons-shape-airplay></coreicons-shape-airplay>
```

### Variants
There are some icons with variants, you can use different variants of one icon with an `attr`: `variant` like:
```html
<coreicons-shape-align variant='justify'></coreicons-shape-align>
```

### Properties / Attributes
You can provide `width`, `height`, `class`, ...rest HTML attrs and `_style` that will be passed to the shadow svg.\
Here is an example:
```html
<coreicons-shape-airplay class='text-primary' width='200' height='200' _style='color: black'></coreicons-shape-airplay>
```

## License
Coreicons is licensed under the [AGPL-v3 license](https://opensource.org/license/agpl-v3).
