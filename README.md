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
    <th>properties</th>
    <th>preview</th>
  </tr></thead>
<tbody>
  
  <tr>
    <td><code>coreproject-logo-figma</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-logo-figma/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_582_253)">
<path d="M6.25 6.875C6.25 5.71468 6.71094 4.60188 7.53141 3.78141C8.35188 2.96094 9.46468 2.5 10.625 2.5H15V11.25H10.625C9.46468 11.25 8.35188 10.7891 7.53141 9.96859C6.71094 9.14812 6.25 8.03532 6.25 6.875Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 2.5H19.375C19.9495 2.5 20.5184 2.61316 21.0492 2.83303C21.58 3.05289 22.0623 3.37515 22.4686 3.78141C22.8748 4.18766 23.1971 4.66996 23.417 5.20076C23.6368 5.73156 23.75 6.30047 23.75 6.875C23.75 7.44953 23.6368 8.01844 23.417 8.54924C23.1971 9.08004 22.8748 9.56234 22.4686 9.96859C22.0623 10.3748 21.58 10.6971 21.0492 10.917C20.5184 11.1368 19.9495 11.25 19.375 11.25H15V2.5Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 15.625C15 15.0505 15.1132 14.4816 15.333 13.9508C15.5529 13.42 15.8752 12.9377 16.2814 12.5314C16.6877 12.1252 17.17 11.8029 17.7008 11.583C18.2316 11.3632 18.8005 11.25 19.375 11.25C19.9495 11.25 20.5184 11.3632 21.0492 11.583C21.58 11.8029 22.0623 12.1252 22.4686 12.5314C22.8748 12.9377 23.1971 13.42 23.417 13.9508C23.6368 14.4816 23.75 15.0505 23.75 15.625C23.75 16.1995 23.6368 16.7684 23.417 17.2992C23.1971 17.83 22.8748 18.3123 22.4686 18.7186C22.0623 19.1248 21.58 19.4471 21.0492 19.667C20.5184 19.8868 19.9495 20 19.375 20C18.8005 20 18.2316 19.8868 17.7008 19.667C17.17 19.4471 16.6877 19.1248 16.2814 18.7186C15.8752 18.3123 15.5529 17.83 15.333 17.2992C15.1132 16.7684 15 16.1995 15 15.625V15.625Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.25 24.375C6.25 23.2147 6.71094 22.1019 7.53141 21.2814C8.35188 20.4609 9.46468 20 10.625 20H15V24.375C15 25.5353 14.5391 26.6481 13.7186 27.4686C12.8981 28.2891 11.7853 28.75 10.625 28.75C9.46468 28.75 8.35188 28.2891 7.53141 27.4686C6.71094 26.6481 6.25 25.5353 6.25 24.375Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.25 15.625C6.25 14.4647 6.71094 13.3519 7.53141 12.5314C8.35188 11.7109 9.46468 11.25 10.625 11.25H15V20H10.625C9.46468 20 8.35188 19.5391 7.53141 18.7186C6.71094 17.8981 6.25 16.7853 6.25 15.625Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_582_253">
<rect width="30" height="30" fill="white"/>
</clipPath>
</defs>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-logo-github</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-logo-github/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_582_302)">
<path d="M20 27.4998V22.6623C20.0469 22.0663 19.9664 21.4671 19.7638 20.9045C19.5612 20.342 19.2412 19.8291 18.825 19.3998C22.75 18.9623 26.875 17.4748 26.875 10.6498C26.8747 8.90458 26.2034 7.2263 25 5.9623C25.5698 4.43543 25.5295 2.74774 24.8875 1.2498C24.8875 1.2498 23.4125 0.8123 20 3.0998C17.135 2.32333 14.115 2.32333 11.25 3.0998C7.8375 0.8123 6.3625 1.2498 6.3625 1.2498C5.72047 2.74774 5.68018 4.43543 6.25 5.9623C5.03766 7.23567 4.36565 8.92913 4.375 10.6873C4.375 17.4623 8.5 18.9498 12.425 19.4373C12.0137 19.8623 11.6966 20.3691 11.4941 20.9247C11.2917 21.4803 11.2085 22.0724 11.25 22.6623V27.4998M11.25 23.7498C5 25.6248 5 20.6248 2.5 19.9998L11.25 23.7498Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_582_302">
<rect width="30" height="30" fill="white"/>
</clipPath>
</defs>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-airplay</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-airplay/readme.md'>link</a></td>
    <td><svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_582_66)">
<path d="M9.25 21.25H8C7.33696 21.25 6.70107 20.9866 6.23223 20.5178C5.76339 20.0489 5.5 19.413 5.5 18.75V6.25C5.5 5.58696 5.76339 4.95107 6.23223 4.48223C6.70107 4.01339 7.33696 3.75 8 3.75H28C28.663 3.75 29.2989 4.01339 29.7678 4.48223C30.2366 4.95107 30.5 5.58696 30.5 6.25V18.75C30.5 19.413 30.2366 20.0489 29.7678 20.5178C29.2989 20.9866 28.663 21.25 28 21.25H26.75" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 18.75L24.25 26.25H11.75L18 18.75Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<filter id="filter0_d_582_66" x="-1" y="0" width="38" height="38" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_582_66"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_582_66" result="shape"/>
</filter>
</defs>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-alert-triangle</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-alert-triangle/readme.md'>link</a></td>
    <td><svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_582_69)">
<rect x="4.5" y="0.5" width="29" height="29" stroke="black" shape-rendering="crispEdges"/>
<path d="M16.8625 4.82501L6.27497 22.5C6.05668 22.878 5.94117 23.3066 5.93995 23.7432C5.93873 24.1797 6.05183 24.6089 6.268 24.9882C6.48417 25.3674 6.79587 25.6834 7.1721 25.9048C7.54833 26.1262 7.97596 26.2452 8.41247 26.25H29.5875C30.024 26.2452 30.4516 26.1262 30.8278 25.9048C31.2041 25.6834 31.5158 25.3674 31.7319 24.9882C31.9481 24.6089 32.0612 24.1797 32.06 23.7432C32.0588 23.3066 31.9433 22.878 31.725 22.5L21.1375 4.82501C20.9146 4.45764 20.6009 4.15391 20.2265 3.94312C19.8521 3.73232 19.4296 3.62158 19 3.62158C18.5703 3.62158 18.1479 3.73232 17.7735 3.94312C17.3991 4.15391 17.0853 4.45764 16.8625 4.82501V4.82501Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 11.25V16.25" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 21.25H19.0125" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<filter id="filter0_d_582_69" x="0" y="0" width="38" height="38" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_582_69"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_582_69" result="shape"/>
</filter>
</defs>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-align</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-align/readme.md'>link</a></td>
    <td><svg width="34" height="32" viewBox="0 0 34 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_582_73)">
<path d="M24.5 12.5H9.5" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M28.25 7.5H5.75" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M28.25 17.5H5.75" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M24.5 22.5H9.5" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<filter id="filter0_d_582_73" x="-2" y="0" width="38" height="38" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_582_73"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_582_73" result="shape"/>
</filter>
</defs>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-arrow</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-arrow/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.25 8.75L8.75 21.25" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.25 21.25H8.75V8.75" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-at-sign</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-at-sign/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 20C17.7614 20 20 17.7614 20 15C20 12.2386 17.7614 10 15 10C12.2386 10 10 12.2386 10 15C10 17.7614 12.2386 20 15 20Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 10.0002V16.2502C20 17.2448 20.3951 18.1986 21.0984 18.9019C21.8016 19.6051 22.7555 20.0002 23.75 20.0002C24.7446 20.0002 25.6984 19.6051 26.4017 18.9019C27.1049 18.1986 27.5 17.2448 27.5 16.2502V15.0002C27.4998 12.179 26.5453 9.4408 24.7916 7.23087C23.0379 5.02093 20.5882 3.46923 17.8408 2.82807C15.0934 2.18691 12.2099 2.494 9.6592 3.69941C7.10846 4.90482 5.04051 6.93765 3.79158 9.46735C2.54266 11.9971 2.18622 14.8749 2.78022 17.6328C3.37422 20.3908 4.88373 22.8667 7.0633 24.658C9.24287 26.4493 11.9643 27.4506 14.7851 27.4991C17.6059 27.5476 20.3601 26.6405 22.6 24.9252" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-award</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-award/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_582_120)">
<path d="M15 18.75C19.8325 18.75 23.75 14.8325 23.75 10C23.75 5.16751 19.8325 1.25 15 1.25C10.1675 1.25 6.25 5.16751 6.25 10C6.25 14.8325 10.1675 18.75 15 18.75Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.2625 17.3626L8.75 28.7501L15 25.0001L21.25 28.7501L19.7375 17.3501" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_582_120">
<rect width="30" height="30" fill="white"/>
</clipPath>
</defs>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-bar-chart</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-bar-chart/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 25V12.5" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.5 25V5" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.5 25V20" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-bell</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-bell/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_582_130)">
<path d="M17.1624 26.25C16.9426 26.6288 16.6272 26.9433 16.2477 27.1619C15.8682 27.3805 15.4379 27.4956 14.9999 27.4956C14.5619 27.4956 14.1316 27.3805 13.7521 27.1619C13.3726 26.9433 13.0572 26.6288 12.8374 26.25" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M23.2874 16.25C22.7313 14.2143 22.4662 12.1101 22.4999 10" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.825 7.8252C7.60783 8.52971 7.49826 9.26297 7.5 10.0002C7.5 18.7502 3.75 21.2502 3.75 21.2502H21.25" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.4999 9.9999C22.5019 8.64123 22.1348 7.30753 21.4378 6.14126C20.7408 4.975 19.7401 4.01997 18.5426 3.3782C17.345 2.73643 15.9956 2.43202 14.6385 2.49748C13.2814 2.56295 11.9676 2.99583 10.8374 3.7499" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1.25 1.25L28.75 28.75" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_582_130">
<rect width="30" height="30" fill="white"/>
</clipPath>
</defs>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-book</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-book/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 3.75H10C11.3261 3.75 12.5979 4.27678 13.5355 5.21447C14.4732 6.15215 15 7.42392 15 8.75V26.25C15 25.2554 14.6049 24.3016 13.9017 23.5983C13.1984 22.8951 12.2446 22.5 11.25 22.5H2.5V3.75Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M27.5 3.75H20C18.6739 3.75 17.4021 4.27678 16.4645 5.21447C15.5268 6.15215 15 7.42392 15 8.75V26.25C15 25.2554 15.3951 24.3016 16.0983 23.5983C16.8016 22.8951 17.7554 22.5 18.75 22.5H27.5V3.75Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-box</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-box/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.25 19.9999V9.99988C26.2496 9.56147 26.1338 9.13089 25.9144 8.75133C25.695 8.37177 25.3797 8.05658 25 7.83738L16.25 2.83738C15.87 2.61796 15.4388 2.50244 15 2.50244C14.5612 2.50244 14.13 2.61796 13.75 2.83738L5 7.83738C4.62033 8.05658 4.30498 8.37177 4.08558 8.75133C3.86618 9.13089 3.75045 9.56147 3.75 9.99988V19.9999C3.75045 20.4383 3.86618 20.8689 4.08558 21.2484C4.30498 21.628 4.62033 21.9432 5 22.1624L13.75 27.1624C14.13 27.3818 14.5612 27.4973 15 27.4973C15.4388 27.4973 15.87 27.3818 16.25 27.1624L25 22.1624C25.3797 21.9432 25.695 21.628 25.9144 21.2484C26.1338 20.8689 26.2496 20.4383 26.25 19.9999Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.0874 8.7002L14.9999 15.0127L25.9124 8.7002" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 27.6V15" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-calendar</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-calendar/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.75 5H6.25C4.86929 5 3.75 6.11929 3.75 7.5V25C3.75 26.3807 4.86929 27.5 6.25 27.5H23.75C25.1307 27.5 26.25 26.3807 26.25 25V7.5C26.25 6.11929 25.1307 5 23.75 5Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 2.5V7.5" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 2.5V7.5" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.75 12.5H26.25" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-cast</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-cast/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 10V7.5C2.5 6.83696 2.76339 6.20107 3.23223 5.73223C3.70107 5.26339 4.33696 5 5 5H25C25.663 5 26.2989 5.26339 26.7678 5.73223C27.2366 6.20107 27.5 6.83696 27.5 7.5V22.5C27.5 23.163 27.2366 23.7989 26.7678 24.2678C26.2989 24.7366 25.663 25 25 25H17.5M2.5 20.125C3.70112 20.37 4.80368 20.9627 5.67048 21.8295C6.53728 22.6963 7.13004 23.7989 7.375 25L2.5 20.125ZM2.5 15.0625C5.03849 15.3448 7.40534 16.4826 9.21139 18.2886C11.0174 20.0947 12.1552 22.4615 12.4375 25L2.5 15.0625Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.5 25H2.5125" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-check</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-check/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25 7.5L11.25 21.25L5 15" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-chevron</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-chevron/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 11.25L15 18.75L22.5 11.25" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-chevrons</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-chevrons/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.75 16.25L15 22.5L21.25 16.25" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.75 7.5L15 13.75L21.25 7.5" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-circle</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-circle/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-clipboard</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-clipboard/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 5H22.5C23.163 5 23.7989 5.26339 24.2678 5.73223C24.7366 6.20107 25 6.83696 25 7.5V25C25 25.663 24.7366 26.2989 24.2678 26.7678C23.7989 27.2366 23.163 27.5 22.5 27.5H7.5C6.83696 27.5 6.20107 27.2366 5.73223 26.7678C5.26339 26.2989 5 25.663 5 25V7.5C5 6.83696 5.26339 6.20107 5.73223 5.73223C6.20107 5.26339 6.83696 5 7.5 5H10" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.75 2.5H11.25C10.5596 2.5 10 3.05964 10 3.75V6.25C10 6.94036 10.5596 7.5 11.25 7.5H18.75C19.4404 7.5 20 6.94036 20 6.25V3.75C20 3.05964 19.4404 2.5 18.75 2.5Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-clock</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-clock/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 7.5V15L20 17.5" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-cloud-off</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-cloud-off/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_582_184)">
<path d="M6.24999 6.25C4.29758 7.32955 2.76225 9.03098 1.88822 11.0836C1.0142 13.1363 0.85168 15.4223 1.42652 17.5779C2.00136 19.7336 3.28055 21.6351 5.06059 22.98C6.84063 24.3249 9.01929 25.0359 11.25 25H22.5C23.2247 24.9991 23.9438 24.8723 24.625 24.625M28.2625 21.1875C28.6652 20.2366 28.8261 19.2008 28.7307 18.1726C28.6353 17.1443 28.2866 16.1558 27.7158 15.2952C27.145 14.4347 26.3698 13.729 25.4597 13.2412C24.5495 12.7534 23.5326 12.4988 22.5 12.5H20.925C20.4147 10.4906 19.2926 8.68948 17.7138 7.34582C16.135 6.00216 14.1776 5.18242 12.1125 5L28.2625 21.1875Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1.25 1.25L28.75 28.75" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_582_184">
<rect width="30" height="30" fill="white"/>
</clipPath>
</defs>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-code</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-code/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 22.5L27.5 15L20 7.5" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 7.5L2.5 15L10 22.5" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-compass</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-compass/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.3002 9.7002L17.6502 17.6502L9.7002 20.3002L12.3502 12.3502L20.3002 9.7002Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-copy</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-copy/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25 11.25H13.75C12.3693 11.25 11.25 12.3693 11.25 13.75V25C11.25 26.3807 12.3693 27.5 13.75 27.5H25C26.3807 27.5 27.5 26.3807 27.5 25V13.75C27.5 12.3693 26.3807 11.25 25 11.25Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.25 18.75H5C4.33696 18.75 3.70107 18.4866 3.23223 18.0178C2.76339 17.5489 2.5 16.913 2.5 16.25V5C2.5 4.33696 2.76339 3.70107 3.23223 3.23223C3.70107 2.76339 4.33696 2.5 5 2.5H16.25C16.913 2.5 17.5489 2.76339 18.0178 3.23223C18.4866 3.70107 18.75 4.33696 18.75 5V6.25" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-corner</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-corner/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.25 12.5L5 18.75L11.25 25" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25 5V13.75C25 15.0761 24.4732 16.3479 23.5355 17.2855C22.5979 18.2232 21.3261 18.75 20 18.75H5" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-corner-right-down</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-corner-right-down/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5 18.75L18.75 25L25 18.75" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 5H13.75C15.0761 5 16.3479 5.52678 17.2855 6.46447C18.2232 7.40215 18.75 8.67392 18.75 10V25" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-delete</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-delete/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_582_220)">
<path d="M26.25 5H10L1.25 15L10 25H26.25C26.913 25 27.5489 24.7366 28.0178 24.2678C28.4866 23.7989 28.75 23.163 28.75 22.5V7.5C28.75 6.83696 28.4866 6.20107 28.0178 5.73223C27.5489 5.26339 26.913 5 26.25 5V5Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.5 11.25L15 18.75" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 11.25L22.5 18.75" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_582_220">
<rect width="30" height="30" fill="white"/>
</clipPath>
</defs>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-download</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-download/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_582_228)">
<path d="M10 21.25L15 26.25L20 21.25" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 15V26.25" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M26.1 22.6124C27.1867 21.8482 28.0017 20.7576 28.4266 19.4989C28.8515 18.2401 28.8642 16.8787 28.463 15.6122C28.0617 14.3457 27.2673 13.24 26.1951 12.4556C25.1228 11.6712 23.8285 11.2489 22.5 11.2499H20.925C20.549 9.78476 19.8456 8.42398 18.8676 7.27002C17.8897 6.11606 16.6627 5.19899 15.279 4.58786C13.8953 3.97673 12.391 3.68745 10.8794 3.74181C9.36774 3.79617 7.88812 4.19275 6.55192 4.9017C5.21572 5.61064 4.05776 6.61348 3.16521 7.8347C2.27267 9.05593 1.66879 10.4637 1.39905 11.9521C1.12931 13.4405 1.20074 14.9707 1.60795 16.4274C2.01516 17.8842 2.74755 19.2296 3.74998 20.3624" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_582_228">
<rect width="30" height="30" fill="white"/>
</clipPath>
</defs>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-download-cloud</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-download-cloud/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_582_228)">
<path d="M10 21.25L15 26.25L20 21.25" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 15V26.25" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M26.1 22.6124C27.1867 21.8482 28.0017 20.7576 28.4266 19.4989C28.8515 18.2401 28.8642 16.8787 28.463 15.6122C28.0617 14.3457 27.2673 13.24 26.1951 12.4556C25.1228 11.6712 23.8285 11.2489 22.5 11.2499H20.925C20.549 9.78476 19.8456 8.42398 18.8676 7.27002C17.8897 6.11606 16.6627 5.19899 15.279 4.58786C13.8953 3.97673 12.391 3.68745 10.8794 3.74181C9.36774 3.79617 7.88812 4.19275 6.55192 4.9017C5.21572 5.61064 4.05776 6.61348 3.16521 7.8347C2.27267 9.05593 1.66879 10.4637 1.39905 11.9521C1.12931 13.4405 1.20074 14.9707 1.60795 16.4274C2.01516 17.8842 2.74755 19.2296 3.74998 20.3624" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_582_228">
<rect width="30" height="30" fill="white"/>
</clipPath>
</defs>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-edit</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-edit/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.75 5H5C4.33696 5 3.70107 5.26339 3.23223 5.73223C2.76339 6.20107 2.5 6.83696 2.5 7.5V25C2.5 25.663 2.76339 26.2989 3.23223 26.7678C3.70107 27.2366 4.33696 27.5 5 27.5H22.5C23.163 27.5 23.7989 27.2366 24.2678 26.7678C24.7366 26.2989 25 25.663 25 25V16.25" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M23.125 3.12479C23.6223 2.62751 24.2967 2.34814 25 2.34814C25.7033 2.34814 26.3777 2.62751 26.875 3.12479C27.3723 3.62208 27.6517 4.29653 27.6517 4.99979C27.6517 5.70306 27.3723 6.37751 26.875 6.87479L15 18.7498L10 19.9998L11.25 14.9998L23.125 3.12479Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-expand</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-expand/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.75 3.75H26.25V11.25" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.25 26.25H3.75V18.75" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M26.25 3.75L17.5 12.5" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.75 26.25L12.5 17.5" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-external-link</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-external-link/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.5 16.25V23.75C22.5 24.413 22.2366 25.0489 21.7678 25.5178C21.2989 25.9866 20.663 26.25 20 26.25H6.25C5.58696 26.25 4.95107 25.9866 4.48223 25.5178C4.01339 25.0489 3.75 24.413 3.75 23.75V10C3.75 9.33696 4.01339 8.70107 4.48223 8.23223C4.95107 7.76339 5.58696 7.5 6.25 7.5H13.75" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.75 3.75H26.25V11.25" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.5 17.5L26.25 3.75" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-eye</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-eye/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_582_247)">
<path d="M17.65 17.65C17.3067 18.0185 16.8927 18.314 16.4327 18.5189C15.9727 18.7239 15.4761 18.8341 14.9726 18.843C14.4691 18.8519 13.969 18.7592 13.502 18.5706C13.0351 18.382 12.6109 18.1013 12.2548 17.7452C11.8987 17.3891 11.618 16.965 11.4294 16.498C11.2408 16.0311 11.1482 15.5309 11.157 15.0274C11.1659 14.5239 11.2761 14.0273 11.4811 13.5673C11.6861 13.1073 11.9816 12.6933 12.35 12.35M22.425 22.425C20.2882 24.0538 17.6864 24.9561 15 25C6.25 25 1.25 15 1.25 15C2.80486 12.1024 4.96142 9.57079 7.575 7.57503L22.425 22.425ZM12.375 5.30003C13.2354 5.09863 14.1163 4.99795 15 5.00003C23.75 5.00003 28.75 15 28.75 15C27.9912 16.4195 27.0863 17.756 26.05 18.9875L12.375 5.30003Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1.25 1.25L28.75 28.75" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_582_247">
<rect width="30" height="30" fill="white"/>
</clipPath>
</defs>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-fast-forward</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-fast-forward/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.25 23.75L27.5 15L16.25 6.25V23.75Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.5 23.75L13.75 15L2.5 6.25V23.75Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-file</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-file/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.5 2.5H7.5C6.83696 2.5 6.20107 2.76339 5.73223 3.23223C5.26339 3.70107 5 4.33696 5 5V25C5 25.663 5.26339 26.2989 5.73223 26.7678C6.20107 27.2366 6.83696 27.5 7.5 27.5H22.5C23.163 27.5 23.7989 27.2366 24.2678 26.7678C24.7366 26.2989 25 25.663 25 25V10L17.5 2.5Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.5 2.5V10H25" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.25 18.75H18.75" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-filter</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-filter/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.5 3.75H2.5L12.5 15.575V23.75L17.5 26.25V15.575L27.5 3.75Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-flag</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-flag/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 18.75C5 18.75 6.25 17.5 10 17.5C13.75 17.5 16.25 20 20 20C23.75 20 25 18.75 25 18.75V3.75C25 3.75 23.75 5 20 5C16.25 5 13.75 2.5 10 2.5C6.25 2.5 5 3.75 5 3.75V18.75Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 27.5V18.75" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-folder</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-folder/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.5 23.75C27.5 24.413 27.2366 25.0489 26.7678 25.5178C26.2989 25.9866 25.663 26.25 25 26.25H5C4.33696 26.25 3.70107 25.9866 3.23223 25.5178C2.76339 25.0489 2.5 24.413 2.5 23.75V6.25C2.5 5.58696 2.76339 4.95107 3.23223 4.48223C3.70107 4.01339 4.33696 3.75 5 3.75H11.25L13.75 7.5H25C25.663 7.5 26.2989 7.76339 26.7678 8.23223C27.2366 8.70107 27.5 9.33696 27.5 10V23.75Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.25 17.5H18.75" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-frown</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-frown/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 20C20 20 18.125 17.5 15 17.5C11.875 17.5 10 20 10 20" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.25 11.25H11.2625" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.75 11.25H18.7625" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-gift</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-gift/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25 15V27.5H5V15" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M27.5 8.75H2.5V15H27.5V8.75Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 27.5V8.75" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 8.75H9.375C8.5462 8.75 7.75134 8.42076 7.16529 7.83471C6.57924 7.24866 6.25 6.4538 6.25 5.625C6.25 4.7962 6.57924 4.00134 7.16529 3.41529C7.75134 2.82924 8.5462 2.5 9.375 2.5C13.75 2.5 15 8.75 15 8.75Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 8.75H20.625C21.4538 8.75 22.2487 8.42076 22.8347 7.83471C23.4208 7.24866 23.75 6.4538 23.75 5.625C23.75 4.7962 23.4208 4.00134 22.8347 3.41529C22.2487 2.82924 21.4538 2.5 20.625 2.5C16.25 2.5 15 8.75 15 8.75Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-globe</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-globe/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.5 15H27.5" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 2.5C18.1266 5.92294 19.9034 10.365 20 15C19.9034 19.635 18.1266 24.0771 15 27.5C11.8734 24.0771 10.0966 19.635 10 15C10.0966 10.365 11.8734 5.92294 15 2.5V2.5Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-grid</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-grid/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5 3.75H3.75V12.5H12.5V3.75Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M26.25 3.75H17.5V12.5H26.25V3.75Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M26.25 17.5H17.5V26.25H26.25V17.5Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.5 17.5H3.75V26.25H12.5V17.5Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-hard-drive</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-hard-drive/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.5 15H2.5" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.8125 6.3875L2.5 15V22.5C2.5 23.163 2.76339 23.7989 3.23223 24.2678C3.70107 24.7366 4.33696 25 5 25H25C25.663 25 26.2989 24.7366 26.7678 24.2678C27.2366 23.7989 27.5 23.163 27.5 22.5V15L23.1875 6.3875C22.9805 5.97098 22.6615 5.62046 22.2662 5.37535C21.8709 5.13024 21.4151 5.00025 20.95 5H9.05C8.58489 5.00025 8.12908 5.13024 7.73381 5.37535C7.33853 5.62046 7.01947 5.97098 6.8125 6.3875V6.3875Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.5 20H7.5125" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.5 20H12.5125" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-hash</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-hash/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 11.25H25" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 18.75H25" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.5 3.75L10 26.25" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 3.75L17.5 26.25" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-headphones</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-headphones/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.75 22.5V15C3.75 12.0163 4.93526 9.15483 7.04505 7.04505C9.15483 4.93526 12.0163 3.75 15 3.75C17.9837 3.75 20.8452 4.93526 22.955 7.04505C25.0647 9.15483 26.25 12.0163 26.25 15V22.5" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M26.25 23.75C26.25 24.413 25.9866 25.0489 25.5178 25.5178C25.0489 25.9866 24.413 26.25 23.75 26.25H22.5C21.837 26.25 21.2011 25.9866 20.7322 25.5178C20.2634 25.0489 20 24.413 20 23.75V20C20 19.337 20.2634 18.7011 20.7322 18.2322C21.2011 17.7634 21.837 17.5 22.5 17.5H26.25V23.75ZM3.75 23.75C3.75 24.413 4.01339 25.0489 4.48223 25.5178C4.95107 25.9866 5.58696 26.25 6.25 26.25H7.5C8.16304 26.25 8.79893 25.9866 9.26777 25.5178C9.73661 25.0489 10 24.413 10 23.75V20C10 19.337 9.73661 18.7011 9.26777 18.2322C8.79893 17.7634 8.16304 17.5 7.5 17.5H3.75V23.75Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-heart</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-heart/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.0501 5.76234C25.4117 5.1236 24.6537 4.6169 23.8193 4.2712C22.985 3.92549 22.0908 3.74756 21.1876 3.74756C20.2845 3.74756 19.3903 3.92549 18.556 4.2712C17.7216 4.6169 16.9636 5.1236 16.3251 5.76234L15.0001 7.08734L13.6751 5.76234C12.3855 4.47273 10.6364 3.74823 8.81265 3.74823C6.98886 3.74823 5.23976 4.47273 3.95015 5.76234C2.66053 7.05196 1.93604 8.80105 1.93604 10.6248C1.93604 12.4486 2.66053 14.1977 3.95015 15.4873L5.27515 16.8123L15.0001 26.5373L24.7251 16.8123L26.0501 15.4873C26.6889 14.8489 27.1956 14.0909 27.5413 13.2565C27.887 12.4222 28.0649 11.5279 28.0649 10.6248C28.0649 9.72173 27.887 8.82747 27.5413 7.99315C27.1956 7.15882 26.6889 6.40079 26.0501 5.76234V5.76234Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-help-circle</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-help-circle/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.3623 11.2502C11.6562 10.4148 12.2362 9.71036 12.9997 9.26164C13.7633 8.81292 14.6609 8.6489 15.5338 8.79861C16.4066 8.94833 17.1983 9.40213 17.7687 10.0796C18.339 10.7571 18.6511 11.6146 18.6498 12.5002C18.6498 15.0002 14.8998 16.2502 14.8998 16.2502" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 21.25H15.0125" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-home</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-home/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.75 11.25L15 2.5L26.25 11.25V25C26.25 25.663 25.9866 26.2989 25.5178 26.7678C25.0489 27.2366 24.413 27.5 23.75 27.5H6.25C5.58696 27.5 4.95107 27.2366 4.48223 26.7678C4.01339 26.2989 3.75 25.663 3.75 25V11.25Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.25 27.5V15H18.75V27.5" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-info</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-info/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 20V15" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 10H15.0125" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-key</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-key/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.3749 9.375L23.7499 5M26.2499 2.5L23.7499 5L26.2499 2.5ZM14.2374 14.5125C14.8828 15.1493 15.3959 15.9075 15.747 16.7435C16.0982 17.5794 16.2806 18.4766 16.2836 19.3833C16.2867 20.29 16.1103 21.1884 15.7647 22.0266C15.4192 22.8649 14.9112 23.6265 14.27 24.2677C13.6289 24.9088 12.8673 25.4168 12.029 25.7624C11.1907 26.108 10.2924 26.2843 9.38565 26.2813C8.47894 26.2782 7.58178 26.0959 6.74584 25.7447C5.9099 25.3935 5.15169 24.8804 4.51485 24.235C3.26252 22.9384 2.56956 21.2017 2.58522 19.3991C2.60088 17.5965 3.32392 15.8722 4.5986 14.5975C5.87328 13.3228 7.59762 12.5998 9.40022 12.5841C11.2028 12.5685 12.9395 13.2614 14.2361 14.5138L14.2374 14.5125ZM14.2374 14.5125L19.3749 9.375L14.2374 14.5125ZM19.3749 9.375L23.1249 13.125L27.4999 8.75L23.7499 5L19.3749 9.375Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-link</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-link/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_582_344)">
<path d="M18.75 8.75H22.5C23.3208 8.75 24.1335 8.91166 24.8918 9.22575C25.6501 9.53984 26.3391 10.0002 26.9194 10.5806C27.4998 11.1609 27.9602 11.8499 28.2742 12.6082C28.5883 13.3665 28.75 14.1792 28.75 15C28.75 15.8208 28.5883 16.6335 28.2742 17.3918C27.9602 18.1501 27.4998 18.8391 26.9194 19.4194C26.3391 19.9998 25.6501 20.4602 24.8918 20.7742C24.1335 21.0883 23.3208 21.25 22.5 21.25H18.75M11.25 21.25H7.5C6.67924 21.25 5.86651 21.0883 5.10823 20.7742C4.34994 20.4602 3.66095 19.9998 3.08058 19.4194C1.90848 18.2473 1.25 16.6576 1.25 15C1.25 13.3424 1.90848 11.7527 3.08058 10.5806C4.25269 9.40848 5.8424 8.75 7.5 8.75H11.25" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 15H20" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_582_344">
<rect width="30" height="30" fill="white"/>
</clipPath>
</defs>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-list</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-list/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 7.5H26.25" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 15H26.25" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 22.5H26.25" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.75 7.5H3.7625" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.75 15H3.7625" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.75 22.5H3.7625" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-lock</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-lock/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.75 13.75H6.25C4.86929 13.75 3.75 14.8693 3.75 16.25V25C3.75 26.3807 4.86929 27.5 6.25 27.5H23.75C25.1307 27.5 26.25 26.3807 26.25 25V16.25C26.25 14.8693 25.1307 13.75 23.75 13.75Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.75 13.75V8.75C8.75 7.0924 9.40848 5.50269 10.5806 4.33058C11.7527 3.15848 13.3424 2.5 15 2.5C16.6576 2.5 18.2473 3.15848 19.4194 4.33058C20.5915 5.50269 21.25 7.0924 21.25 8.75V13.75" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-log-in</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-log-in/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.75 3.75H23.75C24.413 3.75 25.0489 4.01339 25.5178 4.48223C25.9866 4.95107 26.25 5.58696 26.25 6.25V23.75C26.25 24.413 25.9866 25.0489 25.5178 25.5178C25.0489 25.9866 24.413 26.25 23.75 26.25H18.75" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.5 21.25L18.75 15L12.5 8.75" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.75 15H3.75" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-log-out</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-log-out/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.25 26.25H6.25C5.58696 26.25 4.95107 25.9866 4.48223 25.5178C4.01339 25.0489 3.75 24.413 3.75 23.75V6.25C3.75 5.58696 4.01339 4.95107 4.48223 4.48223C4.95107 4.01339 5.58696 3.75 6.25 3.75H11.25" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 21.25L26.25 15L20 8.75" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M26.25 15H11.25" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-mail</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-mail/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 5H25C26.375 5 27.5 6.125 27.5 7.5V22.5C27.5 23.875 26.375 25 25 25H5C3.625 25 2.5 23.875 2.5 22.5V7.5C2.5 6.125 3.625 5 5 5Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M27.5 7.5L15 16.25L2.5 7.5" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-map-pin</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-map-pin/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_582_368)">
<path d="M26.25 12.5C26.25 21.25 15 28.75 15 28.75C15 28.75 3.75 21.25 3.75 12.5C3.75 9.51631 4.93526 6.65483 7.04505 4.54505C9.15483 2.43526 12.0163 1.25 15 1.25C17.9837 1.25 20.8452 2.43526 22.955 4.54505C25.0647 6.65483 26.25 9.51631 26.25 12.5Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 16.25C17.0711 16.25 18.75 14.5711 18.75 12.5C18.75 10.4289 17.0711 8.75 15 8.75C12.9289 8.75 11.25 10.4289 11.25 12.5C11.25 14.5711 12.9289 16.25 15 16.25Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_582_368">
<rect width="30" height="30" fill="white"/>
</clipPath>
</defs>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-maximize</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-maximize/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 3.75H6.25C5.58696 3.75 4.95107 4.01339 4.48223 4.48223C4.01339 4.95107 3.75 5.58696 3.75 6.25V10M26.25 10V6.25C26.25 5.58696 25.9866 4.95107 25.5178 4.48223C25.0489 4.01339 24.413 3.75 23.75 3.75H20M20 26.25H23.75C24.413 26.25 25.0489 25.9866 25.5178 25.5178C25.9866 25.0489 26.25 24.413 26.25 23.75V20M3.75 20V23.75C3.75 24.413 4.01339 25.0489 4.48223 25.5178C4.95107 25.9866 5.58696 26.25 6.25 26.25H10" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-meh</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-meh/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 18.75H20" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.25 11.25H11.2625" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.75 11.25H18.7625" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-message-circle</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-message-circle/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.25 14.375C26.2543 16.0249 25.8688 17.6524 25.125 19.125C24.243 20.8897 22.8872 22.374 21.2093 23.4116C19.5314 24.4493 17.5978 24.9993 15.625 25C13.9752 25.0043 12.3476 24.6189 10.875 23.875L3.75 26.25L6.125 19.125C5.38116 17.6524 4.9957 16.0249 5 14.375C5.00076 12.4022 5.55076 10.4686 6.5884 8.79072C7.62603 7.11285 9.11032 5.75699 10.875 4.87504C12.3476 4.1312 13.9752 3.74573 15.625 3.75004H16.25C18.8554 3.89378 21.3163 4.99349 23.1614 6.83861C25.0065 8.68373 26.1063 11.1446 26.25 13.75V14.375Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-minimize</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-minimize/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 3.75V7.5C10 8.16304 9.73661 8.79893 9.26777 9.26777C8.79893 9.73661 8.16304 10 7.5 10H3.75M26.25 10H22.5C21.837 10 21.2011 9.73661 20.7322 9.26777C20.2634 8.79893 20 8.16304 20 7.5V3.75M20 26.25V22.5C20 21.837 20.2634 21.2011 20.7322 20.7322C21.2011 20.2634 21.837 20 22.5 20H26.25M3.75 20H7.5C8.16304 20 8.79893 20.2634 9.26777 20.7322C9.73661 21.2011 10 21.837 10 22.5V26.25" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-minus</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-minus/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.25 15H23.75" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-monitor</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-monitor/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25 3.75H5C3.61929 3.75 2.5 4.86929 2.5 6.25V18.75C2.5 20.1307 3.61929 21.25 5 21.25H25C26.3807 21.25 27.5 20.1307 27.5 18.75V6.25C27.5 4.86929 26.3807 3.75 25 3.75Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 26.25H20" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 21.25V26.25" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-moon</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-moon/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.2501 15.9875C26.0535 18.1153 25.2549 20.143 23.9479 21.8335C22.6409 23.524 20.8795 24.8072 18.8698 25.5332C16.86 26.2591 14.6851 26.3977 12.5995 25.9326C10.5139 25.4676 8.60386 24.4182 7.0929 22.9072C5.58194 21.3963 4.53255 19.4862 4.06751 17.4006C3.60247 15.315 3.74102 13.1401 4.46695 11.1304C5.19288 9.12064 6.47616 7.35921 8.16664 6.05219C9.85711 4.74517 11.8849 3.94663 14.0126 3.75C12.7669 5.43533 12.1674 7.51181 12.3233 9.60177C12.4791 11.6917 13.3799 13.6563 14.8619 15.1382C16.3438 16.6202 18.3084 17.521 20.3984 17.6768C22.4883 17.8327 24.5648 17.2332 26.2501 15.9875Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-more</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-more/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 16.25C15.6904 16.25 16.25 15.6904 16.25 15C16.25 14.3096 15.6904 13.75 15 13.75C14.3096 13.75 13.75 14.3096 13.75 15C13.75 15.6904 14.3096 16.25 15 16.25Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M23.75 16.25C24.4404 16.25 25 15.6904 25 15C25 14.3096 24.4404 13.75 23.75 13.75C23.0596 13.75 22.5 14.3096 22.5 15C22.5 15.6904 23.0596 16.25 23.75 16.25Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.25 16.25C6.94036 16.25 7.5 15.6904 7.5 15C7.5 14.3096 6.94036 13.75 6.25 13.75C5.55964 13.75 5 14.3096 5 15C5 15.6904 5.55964 16.25 6.25 16.25Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-mouse-pointer</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-mouse-pointer/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.75 3.75L12.5875 24.9625L15.725 15.725L24.9625 12.5875L3.75 3.75Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.25 16.25L23.75 23.75" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-move</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-move/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.25 11.25L2.5 15L6.25 18.75" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.25 6.25L15 2.5L18.75 6.25" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.75 23.75L15 27.5L11.25 23.75" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M23.75 11.25L27.5 15L23.75 18.75" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.5 15H27.5" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 2.5V27.5" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-pause</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-pause/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.5 18.75V11.25" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.5 18.75V11.25" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-pause-circle</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-pause-circle/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.5 18.75V11.25" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.5 18.75V11.25" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-play</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-play/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.5 10L20 15L12.5 20V10Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-play-circle</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-play-circle/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.5 10L20 15L12.5 20V10Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-plus</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-plus/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 10V20" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 15H20" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-refresh</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-refresh/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_582_441)">
<path d="M1.25 5V12.5H8.75" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M28.75 25V17.5H21.25" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25.6125 11.25C24.9785 9.45845 23.9011 7.85673 22.4807 6.59425C21.0602 5.33176 19.3432 4.44968 17.4896 4.0303C15.6361 3.61091 13.7066 3.6679 11.881 4.19594C10.0555 4.72398 8.39343 5.70586 7.05 7.04997L1.25 12.5M28.75 17.5L22.95 22.95C21.6066 24.2941 19.9445 25.276 18.119 25.804C16.2934 26.332 14.3639 26.389 12.5104 25.9697C10.6568 25.5503 8.93975 24.6682 7.51933 23.4057C6.09892 22.1432 5.02146 20.5415 4.3875 18.75" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_582_441">
<rect width="30" height="30" fill="white"/>
</clipPath>
</defs>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-repeat</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-repeat/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_583_449)">
<path d="M21.25 1.25L26.25 6.25L21.25 11.25" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.75 13.75V11.25C3.75 9.92392 4.27678 8.65215 5.21447 7.71447C6.15215 6.77678 7.42392 6.25 8.75 6.25H26.25" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.75 28.75L3.75 23.75L8.75 18.75" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M26.25 16.25V18.75C26.25 20.0761 25.7232 21.3479 24.7855 22.2855C23.8479 23.2232 22.5761 23.75 21.25 23.75H3.75" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_583_449">
<rect width="30" height="30" fill="white"/>
</clipPath>
</defs>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-rotate</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-rotate/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_583_454)">
<path d="M1.25 5V12.5H8.75" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.3875 18.7501C5.19799 21.0505 6.73417 23.0253 8.76457 24.3768C10.795 25.7283 13.2096 26.3833 15.6446 26.2431C18.0797 26.103 20.4032 25.1753 22.2652 23.5998C24.1271 22.0242 25.4266 19.8863 25.9678 17.508C26.509 15.1297 26.2626 12.64 25.2658 10.4139C24.2689 8.18786 22.5757 6.34605 20.441 5.16601C18.3064 3.98598 15.8461 3.53164 13.4308 3.87145C11.0156 4.21127 8.77614 5.32683 7.05 7.05006L1.25 12.5001" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_583_454">
<rect width="30" height="30" fill="white"/>
</clipPath>
</defs>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-save</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-save/readme.md'>link</a></td>
    <td><svg width="34" height="36" viewBox="0 0 34 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_583_460)">
<path d="M25.75 26.25H8.25C7.58696 26.25 6.95107 25.9866 6.48223 25.5178C6.01339 25.0489 5.75 24.413 5.75 23.75V6.25C5.75 5.58696 6.01339 4.95107 6.48223 4.48223C6.95107 4.01339 7.58696 3.75 8.25 3.75H22L28.25 10V23.75C28.25 24.413 27.9866 25.0489 27.5178 25.5178C27.0489 25.9866 26.413 26.25 25.75 26.25Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M23.25 26.25V16.25H10.75V26.25" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.75 3.75V10H20.75" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<filter id="filter0_d_583_460" x="-2" y="0" width="38" height="38" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_583_460"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_583_460" result="shape"/>
</filter>
</defs>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-settings</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-settings/readme.md'>link</a></td>
    <td><svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_583_464)" filter="url(#filter0_d_583_464)">
<path d="M19 18.75C21.0711 18.75 22.75 17.0711 22.75 15C22.75 12.9289 21.0711 11.25 19 11.25C16.9289 11.25 15.25 12.9289 15.25 15C15.25 17.0711 16.9289 18.75 19 18.75Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M28.25 18.75C28.0836 19.127 28.034 19.5452 28.1075 19.9507C28.181 20.3562 28.3743 20.7304 28.6625 21.025L28.7375 21.1C28.9699 21.3322 29.1543 21.6079 29.2801 21.9114C29.406 22.2149 29.4707 22.5402 29.4707 22.8688C29.4707 23.1973 29.406 23.5226 29.2801 23.8261C29.1543 24.1296 28.9699 24.4053 28.7375 24.6375C28.5053 24.8699 28.2296 25.0543 27.9261 25.1801C27.6226 25.306 27.2973 25.3707 26.9688 25.3707C26.6402 25.3707 26.3149 25.306 26.0114 25.1801C25.7079 25.0543 25.4322 24.8699 25.2 24.6375L25.125 24.5625C24.8304 24.2743 24.4562 24.081 24.0507 24.0075C23.6452 23.934 23.227 23.9836 22.85 24.15C22.4803 24.3085 22.165 24.5716 21.9429 24.9069C21.7208 25.2423 21.6016 25.6353 21.6 26.0375V26.25C21.6 26.913 21.3366 27.5489 20.8678 28.0178C20.3989 28.4866 19.763 28.75 19.1 28.75C18.437 28.75 17.8011 28.4866 17.3322 28.0178C16.8634 27.5489 16.6 26.913 16.6 26.25V26.1375C16.5903 25.7238 16.4564 25.3225 16.2156 24.9859C15.9749 24.6493 15.6384 24.3929 15.25 24.25C14.873 24.0836 14.4548 24.034 14.0493 24.1075C13.6438 24.181 13.2696 24.3743 12.975 24.6625L12.9 24.7375C12.6678 24.9699 12.3921 25.1543 12.0886 25.2801C11.7851 25.406 11.4598 25.4707 11.1312 25.4707C10.8027 25.4707 10.4774 25.406 10.1739 25.2801C9.8704 25.1543 9.59468 24.9699 9.3625 24.7375C9.13006 24.5053 8.94566 24.2296 8.81985 23.9261C8.69404 23.6226 8.62928 23.2973 8.62928 22.9688C8.62928 22.6402 8.69404 22.3149 8.81985 22.0114C8.94566 21.7079 9.13006 21.4322 9.3625 21.2L9.4375 21.125C9.72567 20.8304 9.91898 20.4562 9.99251 20.0507C10.066 19.6452 10.0164 19.227 9.85 18.85C9.69155 18.4803 9.42844 18.165 9.09308 17.9429C8.75772 17.7208 8.36473 17.6016 7.9625 17.6H7.75C7.08696 17.6 6.45107 17.3366 5.98223 16.8678C5.51339 16.3989 5.25 15.763 5.25 15.1C5.25 14.437 5.51339 13.8011 5.98223 13.3322C6.45107 12.8634 7.08696 12.6 7.75 12.6H7.8625C8.27624 12.5903 8.67751 12.4564 9.01412 12.2156C9.35074 11.9749 9.60714 11.6384 9.75 11.25C9.91639 10.873 9.96603 10.4548 9.89251 10.0493C9.81898 9.64377 9.62567 9.2696 9.3375 8.975L9.2625 8.9C9.03006 8.66782 8.84566 8.3921 8.71985 8.0886C8.59404 7.78511 8.52928 7.45979 8.52928 7.13125C8.52928 6.80271 8.59404 6.47739 8.71985 6.1739C8.84566 5.8704 9.03006 5.59468 9.2625 5.3625C9.49468 5.13006 9.7704 4.94566 10.0739 4.81985C10.3774 4.69404 10.7027 4.62928 11.0312 4.62928C11.3598 4.62928 11.6851 4.69404 11.9886 4.81985C12.2921 4.94566 12.5678 5.13006 12.8 5.3625L12.875 5.4375C13.1696 5.72567 13.5438 5.91898 13.9493 5.99251C14.3548 6.06603 14.773 6.01639 15.15 5.85H15.25C15.6197 5.69155 15.935 5.42844 16.1571 5.09308C16.3792 4.75772 16.4984 4.36473 16.5 3.9625V3.75C16.5 3.08696 16.7634 2.45107 17.2322 1.98223C17.7011 1.51339 18.337 1.25 19 1.25C19.663 1.25 20.2989 1.51339 20.7678 1.98223C21.2366 2.45107 21.5 3.08696 21.5 3.75V3.8625C21.5016 4.26473 21.6208 4.65772 21.8429 4.99308C22.065 5.32844 22.3803 5.59155 22.75 5.75C23.127 5.91639 23.5452 5.96603 23.9507 5.89251C24.3562 5.81898 24.7304 5.62567 25.025 5.3375L25.1 5.2625C25.3322 5.03006 25.6079 4.84566 25.9114 4.71985C26.2149 4.59404 26.5402 4.52928 26.8688 4.52928C27.1973 4.52928 27.5226 4.59404 27.8261 4.71985C28.1296 4.84566 28.4053 5.03006 28.6375 5.2625C28.8699 5.49468 29.0543 5.7704 29.1801 6.0739C29.306 6.37739 29.3707 6.70271 29.3707 7.03125C29.3707 7.35979 29.306 7.68511 29.1801 7.9886C29.0543 8.2921 28.8699 8.56782 28.6375 8.8L28.5625 8.875C28.2743 9.1696 28.081 9.54377 28.0075 9.94926C27.934 10.3548 27.9836 10.773 28.15 11.15V11.25C28.3085 11.6197 28.5716 11.935 28.9069 12.1571C29.2423 12.3792 29.6353 12.4984 30.0375 12.5H30.25C30.913 12.5 31.5489 12.7634 32.0178 13.2322C32.4866 13.7011 32.75 14.337 32.75 15C32.75 15.663 32.4866 16.2989 32.0178 16.7678C31.5489 17.2366 30.913 17.5 30.25 17.5H30.1375C29.7353 17.5016 29.3423 17.6208 29.0069 17.8429C28.6716 18.065 28.4085 18.3803 28.25 18.75V18.75Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<filter id="filter0_d_583_464" x="0" y="0" width="38" height="38" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_583_464"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_583_464" result="shape"/>
</filter>
<clipPath id="clip0_583_464">
<rect width="30" height="30" fill="white" transform="translate(4)"/>
</clipPath>
</defs>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-share</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-share/readme.md'>link</a></td>
    <td><svg width="34" height="37" viewBox="0 0 34 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_5120_504)">
<path d="M24.5 10C26.5711 10 28.25 8.32107 28.25 6.25C28.25 4.17893 26.5711 2.5 24.5 2.5C22.4289 2.5 20.75 4.17893 20.75 6.25C20.75 8.32107 22.4289 10 24.5 10Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.5 18.75C11.5711 18.75 13.25 17.0711 13.25 15C13.25 12.9289 11.5711 11.25 9.5 11.25C7.42893 11.25 5.75 12.9289 5.75 15C5.75 17.0711 7.42893 18.75 9.5 18.75Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M24.5 27.5C26.5711 27.5 28.25 25.8211 28.25 23.75C28.25 21.6789 26.5711 20 24.5 20C22.4289 20 20.75 21.6789 20.75 23.75C20.75 25.8211 22.4289 27.5 24.5 27.5Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.7373 16.8877L21.2748 21.8627" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.2623 8.1377L12.7373 13.1127" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<filter id="filter0_d_5120_504" x="-2" y="0" width="38" height="38" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5120_504"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5120_504" result="shape"/>
</filter>
</defs>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-shield</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-shield/readme.md'>link</a></td>
    <td><svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_583_479)" filter="url(#filter0_d_583_479)">
<path d="M28.6123 17.5C28.8636 16.6902 28.9942 15.8478 28.9998 15V6.25L18.9998 2.5L15.0498 3.975" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.9125 5.9126L9 6.2501V15.0001C9 22.5001 19 27.5001 19 27.5001C21.6463 26.1038 24.0246 24.2502 26.025 22.0251" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.25 1.25L32.75 28.75" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<filter id="filter0_d_583_479" x="0" y="0" width="38" height="38" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_583_479"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_583_479" result="shape"/>
</filter>
<clipPath id="clip0_583_479">
<rect width="30" height="30" fill="white" transform="translate(4)"/>
</clipPath>
</defs>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-shopping-cart</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-shopping-cart/readme.md'>link</a></td>
    <td><svg width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_583_483)" filter="url(#filter0_d_583_483)">
<path d="M15.25 27.5C15.9404 27.5 16.5 26.9404 16.5 26.25C16.5 25.5596 15.9404 25 15.25 25C14.5596 25 14 25.5596 14 26.25C14 26.9404 14.5596 27.5 15.25 27.5Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M29 27.5C29.6904 27.5 30.25 26.9404 30.25 26.25C30.25 25.5596 29.6904 25 29 25C28.3096 25 27.75 25.5596 27.75 26.25C27.75 26.9404 28.3096 27.5 29 27.5Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.25 1.25H10.25L13.6 17.9875C13.7143 18.563 14.0274 19.0799 14.4844 19.4479C14.9415 19.8158 15.5134 20.0112 16.1 20H28.25C28.8366 20.0112 29.4085 19.8158 29.8656 19.4479C30.3226 19.0799 30.6357 18.563 30.75 17.9875L32.75 7.5H11.5" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<filter id="filter0_d_583_483" x="0" y="0" width="38" height="38" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_583_483"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_583_483" result="shape"/>
</filter>
<clipPath id="clip0_583_483">
<rect width="30" height="30" fill="white" transform="translate(4)"/>
</clipPath>
</defs>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-shrink</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-shrink/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 17.5H12.5V25" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25 12.5H17.5V5" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.5 12.5L26.25 3.75" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.75 26.25L12.5 17.5" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-smartphone</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-smartphone/readme.md'>link</a></td>
    <td><svg width="30" height="37" viewBox="0 0 30 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_583_487)">
<path d="M21.25 2.5H8.75C7.36929 2.5 6.25 3.61929 6.25 5V25C6.25 26.3807 7.36929 27.5 8.75 27.5H21.25C22.6307 27.5 23.75 26.3807 23.75 25V5C23.75 3.61929 22.6307 2.5 21.25 2.5Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 22.5H15.0125" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<filter id="filter0_d_583_487" x="-4" y="0" width="38" height="38" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_583_487"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_583_487" result="shape"/>
</filter>
</defs>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-smile</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-smile/readme.md'>link</a></td>
    <td><svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_583_490)">
<path d="M18 27.5C24.9036 27.5 30.5 21.9036 30.5 15C30.5 8.09644 24.9036 2.5 18 2.5C11.0964 2.5 5.5 8.09644 5.5 15C5.5 21.9036 11.0964 27.5 18 27.5Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 17.5C13 17.5 14.875 20 18 20C21.125 20 23 17.5 23 17.5" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.25 11.25H14.2625" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.75 11.25H21.7625" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<filter id="filter0_d_583_490" x="-1" y="0" width="38" height="38" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_583_490"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_583_490" result="shape"/>
</filter>
</defs>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-speaker</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-speaker/readme.md'>link</a></td>
    <td><svg width="32" height="37" viewBox="0 0 32 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_583_495)">
<path d="M23.5 2.5H8.5C7.11929 2.5 6 3.61929 6 5V25C6 26.3807 7.11929 27.5 8.5 27.5H23.5C24.8807 27.5 26 26.3807 26 25V5C26 3.61929 24.8807 2.5 23.5 2.5Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 22.5C18.7614 22.5 21 20.2614 21 17.5C21 14.7386 18.7614 12.5 16 12.5C13.2386 12.5 11 14.7386 11 17.5C11 20.2614 13.2386 22.5 16 22.5Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 7.5H16.0125" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<filter id="filter0_d_583_495" x="-3" y="0" width="38" height="38" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_583_495"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_583_495" result="shape"/>
</filter>
</defs>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-star</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-star/readme.md'>link</a></td>
    <td><svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_583_499)">
<path d="M18 2.5L21.8625 10.325L30.5 11.5875L24.25 17.675L25.725 26.275L18 22.2125L10.275 26.275L11.75 17.675L5.5 11.5875L14.1375 10.325L18 2.5Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<filter id="filter0_d_583_499" x="-1" y="0" width="38" height="38" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_583_499"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_583_499" result="shape"/>
</filter>
</defs>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-sun</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-sun/readme.md'>link</a></td>
    <td><svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_583_501)" filter="url(#filter0_d_583_501)">
<path d="M19 21.25C22.4518 21.25 25.25 18.4518 25.25 15C25.25 11.5482 22.4518 8.75 19 8.75C15.5482 8.75 12.75 11.5482 12.75 15C12.75 18.4518 15.5482 21.25 19 21.25Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 1.25V3.75" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 26.25V28.75" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.2749 5.2749L11.0499 7.0499" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M26.9502 22.9502L28.7252 24.7252" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.25 15H7.75" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M30.25 15H32.75" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.2749 24.7252L11.0499 22.9502" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M26.9502 7.0499L28.7252 5.2749" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<filter id="filter0_d_583_501" x="0" y="0" width="38" height="38" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_583_501"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_583_501" result="shape"/>
</filter>
<clipPath id="clip0_583_501">
<rect width="30" height="30" fill="white" transform="translate(4)"/>
</clipPath>
</defs>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-tag</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-tag/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.7375 16.7625L16.775 25.725C16.5428 25.9574 16.2671 26.1418 15.9636 26.2677C15.6601 26.3935 15.3348 26.4582 15.0063 26.4582C14.6777 26.4582 14.3524 26.3935 14.0489 26.2677C13.7454 26.1418 13.4697 25.9574 13.2375 25.725L2.5 15V2.5H15L25.7375 13.2375C26.2031 13.7059 26.4645 14.3395 26.4645 15C26.4645 15.6605 26.2031 16.2941 25.7375 16.7625V16.7625Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.75 8.75H8.7625" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-terminal</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-terminal/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 21.25L12.5 13.75L5 6.25" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 23.75H25" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-thumbs</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-thumbs/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.2498 2.49996H24.5873C25.2947 2.48745 25.9822 2.73513 26.5191 3.19599C27.056 3.65684 27.405 4.29879 27.4998 4.99996V13.75C27.405 14.4511 27.056 15.0931 26.5191 15.5539C25.9822 16.0148 25.2947 16.2625 24.5873 16.25H21.2498M12.4998 18.75V23.75C12.4998 24.7445 12.8949 25.6984 13.5981 26.4016C14.3014 27.1049 15.2552 27.5 16.2498 27.5L21.2498 16.25V2.49996H7.14979C6.54688 2.49315 5.96182 2.70446 5.50241 3.09496C5.043 3.48545 4.7402 4.02883 4.64979 4.62496L2.92479 15.875C2.87041 16.2333 2.89458 16.5991 2.99562 16.9471C3.09666 17.2952 3.27217 17.6171 3.50997 17.8906C3.74778 18.164 4.04219 18.3825 4.37283 18.5309C4.70346 18.6793 5.06241 18.7541 5.42479 18.75H12.4998Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-toggle</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-toggle/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_583_521)">
<path d="M20 6.25H10C5.16751 6.25 1.25 10.1675 1.25 15C1.25 19.8325 5.16751 23.75 10 23.75H20C24.8325 23.75 28.75 19.8325 28.75 15C28.75 10.1675 24.8325 6.25 20 6.25Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 18.75C12.0711 18.75 13.75 17.0711 13.75 15C13.75 12.9289 12.0711 11.25 10 11.25C7.92893 11.25 6.25 12.9289 6.25 15C6.25 17.0711 7.92893 18.75 10 18.75Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_583_521">
<rect width="30" height="30" fill="white"/>
</clipPath>
</defs>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-tool</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-tool/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.3752 7.87516C18.1462 8.10882 18.0179 8.42297 18.0179 8.75016C18.0179 9.07735 18.1462 9.3915 18.3752 9.62516L20.3752 11.6252C20.6088 11.8542 20.923 11.9825 21.2502 11.9825C21.5774 11.9825 21.8915 11.8542 22.1252 11.6252L26.8377 6.91266C27.4662 8.30164 27.6565 9.8492 27.3833 11.3491C27.11 12.849 26.3861 14.23 25.308 15.308C24.23 16.386 22.849 17.1099 21.3491 17.3832C19.8492 17.6565 18.3017 17.4662 16.9127 16.8377L8.27519 25.4752C7.7779 25.9724 7.10345 26.2518 6.40019 26.2518C5.69692 26.2518 5.02247 25.9724 4.52519 25.4752C4.0279 24.9779 3.74854 24.3034 3.74854 23.6002C3.74854 22.8969 4.0279 22.2224 4.52519 21.7252L13.1627 13.0877C12.5341 11.6987 12.3438 10.1511 12.6171 8.65123C12.8904 7.15134 13.6143 5.77035 14.6923 4.69231C15.7704 3.61427 17.1514 2.89037 18.6513 2.61709C20.1511 2.3438 21.6987 2.53411 23.0877 3.16266L18.3877 7.86266L18.3752 7.87516Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-trash</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-trash/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.75 7.5H6.25H26.25" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 7.5V5C10 4.33696 10.2634 3.70107 10.7322 3.23223C11.2011 2.76339 11.837 2.5 12.5 2.5H17.5C18.163 2.5 18.7989 2.76339 19.2678 3.23223C19.7366 3.70107 20 4.33696 20 5V7.5M23.75 7.5V25C23.75 25.663 23.4866 26.2989 23.0178 26.7678C22.5489 27.2366 21.913 27.5 21.25 27.5H8.75C8.08696 27.5 7.45107 27.2366 6.98223 26.7678C6.51339 26.2989 6.25 25.663 6.25 25V7.5H23.75Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.5 13.75V21.25" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.5 13.75V21.25" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-trending</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-trending/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_583_537)">
<path d="M28.75 22.5L16.875 10.625L10.625 16.875L1.25 7.5" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.25 22.5H28.75V15" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_583_537">
<rect width="30" height="30" fill="white"/>
</clipPath>
</defs>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-triangle</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-triangle/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.8625 4.82501L2.27497 22.5C2.05668 22.878 1.94117 23.3066 1.93995 23.7432C1.93873 24.1797 2.05183 24.6089 2.268 24.9882C2.48417 25.3674 2.79587 25.6834 3.1721 25.9048C3.54833 26.1262 3.97596 26.2452 4.41247 26.25H25.5875C26.024 26.2452 26.4516 26.1262 26.8278 25.9048C27.2041 25.6834 27.5158 25.3674 27.7319 24.9882C27.9481 24.6089 28.0612 24.1797 28.06 23.7432C28.0588 23.3066 27.9433 22.878 27.725 22.5L17.1375 4.82501C16.9146 4.45764 16.6009 4.15391 16.2265 3.94312C15.8521 3.73232 15.4296 3.62158 15 3.62158C14.5703 3.62158 14.1479 3.73232 13.7735 3.94312C13.3991 4.15391 13.0853 4.45764 12.8625 4.82501V4.82501Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-twitter</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-twitter/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_583_545)">
<path d="M28.75 3.74987C27.553 4.59422 26.2276 5.24001 24.825 5.66237C24.0722 4.79676 23.0717 4.18324 21.9588 3.90478C20.8459 3.62632 19.6744 3.69637 18.6026 4.10544C17.5308 4.51451 16.6106 5.24288 15.9662 6.19202C15.3219 7.14116 14.9846 8.26529 15 9.41237V10.6624C12.8033 10.7193 10.6266 10.2321 8.66376 9.24418C6.70093 8.25622 5.0129 6.79817 3.75 4.99987C3.75 4.99987 -1.25 16.2499 10 21.2499C7.42566 22.9973 4.35895 23.8735 1.25 23.7499C12.5 29.9999 26.25 23.7499 26.25 9.37487C26.2488 9.02669 26.2154 8.67937 26.15 8.33737C27.4258 7.07924 28.326 5.49077 28.75 3.74987V3.74987Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_583_545">
<rect width="30" height="30" fill="white"/>
</clipPath>
</defs>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-type</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-type/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 8.75V5H25V8.75" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.25 25H18.75" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 5V25" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-underline</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-underline/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 3.75V12.5C7.5 14.4891 8.29018 16.3968 9.6967 17.8033C11.1032 19.2098 13.0109 20 15 20C16.9891 20 18.8968 19.2098 20.3033 17.8033C21.7098 16.3968 22.5 14.4891 22.5 12.5V3.75" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 26.25H25" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-unlock</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-unlock/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.75 13.75H6.25C4.86929 13.75 3.75 14.8693 3.75 16.25V25C3.75 26.3807 4.86929 27.5 6.25 27.5H23.75C25.1307 27.5 26.25 26.3807 26.25 25V16.25C26.25 14.8693 25.1307 13.75 23.75 13.75Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.75 13.7499V8.74995C8.74845 7.20001 9.32285 5.70478 10.3617 4.55453C11.4006 3.40428 12.8298 2.68108 14.3719 2.52531C15.914 2.36954 17.4589 2.79233 18.7068 3.71159C19.9548 4.63085 20.8166 5.98101 21.125 7.49995" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-upload</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-upload/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_583_561)">
<path d="M20 20L15 15L10 20" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 15V26.25" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25.4873 22.9874C26.7065 22.3227 27.6696 21.271 28.2247 19.9981C28.7797 18.7253 28.8951 17.3039 28.5526 15.9582C28.2101 14.6125 27.4292 13.4192 26.3332 12.5667C25.2371 11.7141 23.8884 11.2508 22.4998 11.2499H20.9248C20.5465 9.78641 19.8413 8.42778 18.8623 7.2761C17.8832 6.12442 16.6559 5.20967 15.2725 4.60062C13.889 3.99156 12.3855 3.70406 10.875 3.75971C9.36443 3.81537 7.88616 4.21273 6.5513 4.92194C5.21644 5.63115 4.05972 6.63374 3.16811 7.85434C2.27649 9.07493 1.67319 10.4818 1.40355 11.9691C1.13392 13.4564 1.20496 14.9855 1.61134 16.4414C2.01773 17.8973 2.74888 19.2422 3.74983 20.3749" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 20L15 15L10 20" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_583_561">
<rect width="30" height="30" fill="white"/>
</clipPath>
</defs>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-upload-cloud</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-upload-cloud/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_583_561)">
<path d="M20 20L15 15L10 20" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 15V26.25" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25.4873 22.9874C26.7065 22.3227 27.6696 21.271 28.2247 19.9981C28.7797 18.7253 28.8951 17.3039 28.5526 15.9582C28.2101 14.6125 27.4292 13.4192 26.3332 12.5667C25.2371 11.7141 23.8884 11.2508 22.4998 11.2499H20.9248C20.5465 9.78641 19.8413 8.42778 18.8623 7.2761C17.8832 6.12442 16.6559 5.20967 15.2725 4.60062C13.889 3.99156 12.3855 3.70406 10.875 3.75971C9.36443 3.81537 7.88616 4.21273 6.5513 4.92194C5.21644 5.63115 4.05972 6.63374 3.16811 7.85434C2.27649 9.07493 1.67319 10.4818 1.40355 11.9691C1.13392 13.4564 1.20496 14.9855 1.61134 16.4414C2.01773 17.8973 2.74888 19.2422 3.74983 20.3749" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 20L15 15L10 20" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_583_561">
<rect width="30" height="30" fill="white"/>
</clipPath>
</defs>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-user</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-user/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_583_569)">
<path d="M20 26.25V23.75C20 22.4239 19.4732 21.1521 18.5355 20.2145C17.5979 19.2768 16.3261 18.75 15 18.75H6.25C4.92392 18.75 3.65215 19.2768 2.71447 20.2145C1.77678 21.1521 1.25 22.4239 1.25 23.75V26.25" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.625 13.75C13.3864 13.75 15.625 11.5114 15.625 8.75C15.625 5.98858 13.3864 3.75 10.625 3.75C7.86358 3.75 5.625 5.98858 5.625 8.75C5.625 11.5114 7.86358 13.75 10.625 13.75Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.25 13.75L23.75 16.25L28.75 11.25" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_583_569">
<rect width="30" height="30" fill="white"/>
</clipPath>
</defs>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-users</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-users/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_583_587)">
<path d="M21.25 26.25V23.75C21.25 22.4239 20.7232 21.1521 19.7855 20.2145C18.8479 19.2768 17.5761 18.75 16.25 18.75H6.25C4.92392 18.75 3.65215 19.2768 2.71447 20.2145C1.77678 21.1521 1.25 22.4239 1.25 23.75V26.25" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.25 13.75C14.0114 13.75 16.25 11.5114 16.25 8.75C16.25 5.98858 14.0114 3.75 11.25 3.75C8.48858 3.75 6.25 5.98858 6.25 8.75C6.25 11.5114 8.48858 13.75 11.25 13.75Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M28.75 26.2501V23.7501C28.7492 22.6423 28.3804 21.5661 27.7017 20.6905C27.023 19.8149 26.0727 19.1896 25 18.9126" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 3.9126C21.0755 4.18797 22.0288 4.81347 22.7095 5.69049C23.3903 6.5675 23.7598 7.64613 23.7598 8.75635C23.7598 9.86656 23.3903 10.9452 22.7095 11.8222C22.0288 12.6992 21.0755 13.3247 20 13.6001" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_583_587">
<rect width="30" height="30" fill="white"/>
</clipPath>
</defs>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-volume</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-volume/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.75 6.25L7.5 11.25H2.5V18.75H7.5L13.75 23.75V6.25Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M23.8373 6.1626C26.1807 8.50669 27.4971 11.6855 27.4971 15.0001C27.4971 18.3146 26.1807 21.4935 23.8373 23.8376M19.4248 10.5751C20.5965 11.7471 21.2547 13.3366 21.2547 14.9938C21.2547 16.6511 20.5965 18.2406 19.4248 19.4126" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-x</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-x/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.75 11.25L11.25 18.75" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.25 11.25L18.75 18.75" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-zap-off</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-zap-off/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_583_619)">
<path d="M15.5124 8.4375L16.2499 2.5L13.2124 6.15" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M23.2127 16.1375L26.2502 12.5H19.5752" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 10L3.75 17.5H15L13.75 27.5L20 20" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1.25 1.25L28.75 28.75" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_583_619">
<rect width="30" height="30" fill="white"/>
</clipPath>
</defs>
</svg>
</td>
  </tr>
  
  <tr>
    <td><code>coreproject-shape-zoom</code></td>
    <td><a href='https://github.com/coreproject-moe/icons/blob/main/src/components/coreproject-shape-zoom/readme.md'>link</a></td>
    <td><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.75 23.75C19.2728 23.75 23.75 19.2728 23.75 13.75C23.75 8.22715 19.2728 3.75 13.75 3.75C8.22715 3.75 3.75 8.22715 3.75 13.75C3.75 19.2728 8.22715 23.75 13.75 23.75Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M26.25 26.25L20.8125 20.8125" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.75 10V17.5" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 13.75H17.5" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</td>
  </tr>
  
</tbody>
</table>

## License

This project is licensed under the `AGPL-3.0` License. See the [LICENSE](https://github.com/coreproject-moe/icons?tab=AGPL-3.0-1-ov-file#readme) file for more details.
