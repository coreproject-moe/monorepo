import * as fs from 'fs';
import * as path from 'path';
import * as glob from 'glob';

const BASE_DIR: string = __dirname;
const SVG_DIR: string = path.join(BASE_DIR, 'svg');
const SRC_DIR: string = path.join(BASE_DIR, '..', '..', 'icons', 'src', 'components');

let SVG_FILES: string[] = glob.sync(path.join(SVG_DIR, '*.svg'));

const LOGOS: Set<string> = new Set(['figma', 'github']);

interface StyleVariant {
    [key: string]: string;
}

interface StyledVariantDict {
    [key: string]: StyleVariant & { file: string };
}

const STYLED_VARIANT_DICT: StyledVariantDict = {
    thumbs: {
        file: 'thumbs-up.svg',
        up: 'transform: rotate(0deg)',
        down: 'transform: rotate(90deg)',
    },
    trending: {
        file: 'trending-up.svg',
        up: 'transform: rotate(0deg)',
        down: 'transform: rotate(90deg)',
    },
    corner: {
        'file': 'corner-down-right.svg',
        'down-right': 'transform: rotate(0deg)',
        'down-left': 'transform: scaleX(-1)',
        'left-down': 'transform: rotate(90deg)',
        'left-up': 'transform: rotate(90deg) scaleX(-1)',
        'up-left': 'transform: rotate(180deg)',
        'up-right': 'transform: rotate(180deg) scaleX(-1)',
        'right-up': 'transform: rotate(270deg)',
        'right-down': 'transform: rotate(270deg) scaleX(-1)',
    },
};

interface VariantDict {
    [key: string]: {
        [key: string]: string;
    };
}

const VARIANT_DICT: VariantDict = {
    align: {
        center: 'align-center.svg',
        justify: 'align-justify.svg',
        left: 'align-left.svg',
        right: 'align-right.svg',
    },
    bell: { on: 'bell.svg', off: 'bell-off.svg' },
    book: { open: 'book-open.svg', close: 'book.svg' },
    download: { arrow: 'download.svg', cloud: 'download-cloud.svg' },
    edit: {
        'box': 'edit-box.svg',
        'pencil': 'edit-pencil.svg',
        'line-with-pencil': 'edit-line-with-pencil.svg',
    },
    eye: { open: 'eye-open.svg', close: 'eye-close.svg' },
    file: {
        normal: 'file.svg',
        minus: 'file-minus.svg',
        plus: 'file-plus.svg',
        text: 'file-text.svg',
    },
    folder: {
        normal: 'folder.svg',
        minus: 'folder-minus.svg',
        plus: 'folder-plus.svg',
    },
    link: { tilted: 'link-tilted.svg', horizontal: 'link-horizontal.svg' },
    plus: {
        'no-border': 'plus-no-border.svg',
        'circle': 'plus-circle.svg',
        'square': 'plus-square.svg',
    },
    shield: { on: 'shield.svg', off: 'shield-off.svg' },
    toggle: { off: 'toggle-left.svg', on: 'toggle-right.svg' },
    trash: {
        'with-lines': 'trash-with-lines.svg',
        'without-lines': 'trash-without-lines.svg',
    },
    upload: { arrow: 'upload.svg', cloud: 'upload-cloud.svg' },
    user: {
        normal: 'user.svg',
        check: 'user-check.svg',
        minus: 'user-minus.svg',
        plus: 'user-plus.svg',
        x: 'user-x.svg',
    },
    volume: {
        off: 'volume.svg',
        half: 'volume-half.svg',
        full: 'volume-full.svg',
        mute: 'volume-mute.svg',
    },
    x: {
        'no-border': 'x-no-border.svg',
        'circle': 'x-circle.svg',
        'octagon': 'x-octagon.svg',
        'square': 'x-square.svg',
    },
    zoom: { in: 'zoom-in.svg', out: 'zoom-out.svg' },
};

interface IconDict {
    'icon-name': string;
    'variants'?: string[];
}

const ICONS: IconDict[] = [];

function addToIconList(iconName: string, variants: string[] = []): void {
    const iconDict: IconDict = { 'icon-name': iconName };
    if (variants.length) {
        iconDict.variants = variants;
    }
    ICONS.push(iconDict);
}

function removeKeyFromDict<T extends object>(originalDict: T, keyToRemove: keyof T): Omit<T, keyof T> {
    const newDict = { ...originalDict };
    delete newDict[keyToRemove];
    return newDict as Omit<T, keyof T>;
}

function dictToCssWithClasses(cssDict: StyleVariant, addVisibility: boolean = false): string {
    let cssString = Object.entries(cssDict)
        .filter(([, styles]) => styles)
        .map(([className, styles]) => `.${className} { ${styles}; }`)
        .join('\n');
    if (addVisibility) {
        cssString += '\n:host{visibility:hidden}';
    }
    return cssString;
}

function removeFromGlob(fileToRemove: string): void {
    SVG_FILES = SVG_FILES.filter(file => path.basename(file) !== fileToRemove);
}

function kebabToPascal(kebabStr: string): string {
    return kebabStr
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('');
}

function makeCss(extra: string[] = []): string {
    return [':host { display: flex; }', ...extra].join('\n');
}

function addMarkupToSvg(rawSvg: string, classVariant: boolean = false): string {
    let svgContent = rawSvg.replace(/(height="[^"]*"|width="[^"]*")/g, '');
    svgContent = svgContent.replace('<svg', '<svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)}');
    if (classVariant) {
        svgContent = svgContent.replace('<svg', '<svg class={this?.variant}');
    }
    return svgContent;
}

function makeE2e(iconName: string): string {
    return `
import { newE2EPage } from '@stencil/core/testing';

describe('${iconName}', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<${iconName}></${iconName}>');
        const element = await page.find('${iconName}');
        expect(element).toHaveClass('hydrated');
    });
});
`;
}

function makeTsx(iconName: string, svgContent: string, variant: string = '', variantList: string[] = []): string {
    const variantProp = variant ? `@Prop() ${variant};` : '';
    return `
import { Component, Host, h, Prop } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: '${iconName}',
    shadow: true,
    styleUrl: '${iconName}.css',
})
export class ${kebabToPascal(iconName)} {
    @Prop() width: string | number;
    @Prop() height: string | number;
    @Prop() _style: string;
    ${variantProp}

    render(){
        ${svgContent}
    }
}
`;
}

// Main execution
for (const [key, subDict] of Object.entries(STYLED_VARIANT_DICT)) {
    const rawSvg = fs.readFileSync(path.join(SVG_DIR, subDict.file), 'utf8');
    const svgContent = addMarkupToSvg(rawSvg, true);
    const cssDict = removeKeyFromDict(subDict, 'file') as StyleVariant;
    const variantList = Object.keys(cssDict);
    const iconName = `coreproject-shape-${key}`;
    const tsx = makeTsx(iconName, `return(<Host>${svgContent}</Host>)`, `variant!: ${variantList.map(s => `"${s}"`).join(' | ')}`, variantList);
    const css = makeCss([':host{visibility:hidden}', dictToCssWithClasses(cssDict, true)]);
    const directoryPath = path.join(SRC_DIR, iconName);
    fs.mkdirSync(directoryPath, { recursive: true });
    fs.writeFileSync(path.join(directoryPath, `${iconName}.tsx`), tsx);
    fs.writeFileSync(path.join(directoryPath, `${iconName}.css`), css);
    addToIconList(iconName, variantList);
    removeFromGlob(subDict.file);
}

for (const [key, subDict] of Object.entries(VARIANT_DICT)) {
    const variantList: string[] = [];
    const svgContentList: string[] = [];

    Object.entries(subDict).forEach(([subKey, fileName], index) => {
        const rawSvg = fs.readFileSync(path.join(SVG_DIR, fileName), 'utf8');
        const svgContent = addMarkupToSvg(rawSvg);
        svgContentList.push(`${index === 0 ? 'if' : 'else if'} (this.variant === "${subKey}") {return(<Host>${svgContent}</Host>);}`);
        variantList.push(subKey);
        removeFromGlob(fileName);
    });

    const iconName = `coreproject-shape-${key}`;
    const tsx = makeTsx(iconName, svgContentList.join('\n'), `variant!: ${variantList.map(s => `"${s}"`).join(' | ')}`, variantList);
    const css = makeCss();
    const directoryPath = path.join(SRC_DIR, iconName);
    fs.mkdirSync(directoryPath, { recursive: true });
    fs.writeFileSync(path.join(directoryPath, `${iconName}.tsx`), tsx);
    fs.writeFileSync(path.join(directoryPath, `${iconName}.css`), css);
    addToIconList(iconName, variantList);
}

for (const file of SVG_FILES) {
    const rawSvg = fs.readFileSync(file, 'utf8');
    const svgContent = addMarkupToSvg(rawSvg);
    const fileName = path.basename(file).split('.')[0];
    const iconName = LOGOS.has(fileName) ? `coreproject-logo-${fileName}` : `coreproject-shape-${fileName}`;
    const directoryPath = path.join(SRC_DIR, iconName);
    fs.mkdirSync(directoryPath, { recursive: true });

    const tsx = makeTsx(iconName, `return(<Host>${svgContent}</Host>)`);
    const css = makeCss();
    const e2e = makeE2e(iconName);

    fs.writeFileSync(path.join(directoryPath, `${iconName}.tsx`), tsx);
    fs.writeFileSync(path.join(directoryPath, `${iconName}.css`), css);

    const testDir = path.join(directoryPath, 'test');
    fs.mkdirSync(testDir, { recursive: true });
    fs.writeFileSync(path.join(testDir, `${iconName}.e2e.ts`), e2e);

    addToIconList(iconName);
}

fs.writeFileSync(path.join(BASE_DIR, 'icons.json'), JSON.stringify(ICONS, null, 2));
