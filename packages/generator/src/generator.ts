import { join, resolve, basename } from 'path';
import { readdirSync, readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { remove } from 'fs-extra';
import glob from 'glob';
import { kebabCase, camelCase } from 'lodash';

const BASE_DIR = resolve(__dirname);
const SVG_DIR = join(BASE_DIR, 'svg');
const SRC_DIR = join(BASE_DIR, '..', 'src', 'components');

const SVG_FILES = glob.sync(join(SVG_DIR, '*.svg'));

if (existsSync(SRC_DIR)) {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    readline.question('Do you want to delete the `src/components` directory (y/n):', (answer: string) => {
        if (answer.toLowerCase() === 'y') {
            remove(SRC_DIR);
        }
        readline.close();
    });
}

const LOGOS = new Set(['figma', 'github']);

const STYLED_VARIANT_DICT = {
    thumbs: { file: 'thumbs-up.svg', up: 'rotate(0deg)', down: 'rotate(90deg)' },
    trending: { file: 'trending-up.svg', up: 'rotate(0deg)', down: 'rotate(90deg)' },
    corner: {
        'file': 'corner-down-right.svg',
        'down-right': 'rotate(0deg)',
        'down-left': 'scaleX(-1)',
        'left-down': 'rotate(90deg)',
        'left-up': 'rotate(90deg) scaleX(-1)',
        'up-left': 'rotate(180deg)',
        'up-right': 'rotate(180deg) scaleX(-1)',
        'right-up': 'rotate(270deg)',
        'right-down': 'rotate(270deg) scaleX(-1)',
    },
};

const VARIANT_DICT = {
    align: { center: 'align-center.svg', justify: 'align-justify.svg', left: 'align-left.svg', right: 'align-right.svg' },
    bell: { on: 'bell.svg', off: 'bell-off.svg' },
    book: { open: 'book-open.svg', close: 'book.svg' },
    // Add the rest of the icons here
};

let ICONS: Array<{ iconName: string; variants?: string[] }> = [];

function addToIconList(iconName: string, variants: string[] = []) {
    ICONS.push({ iconName, variants });
}

function dictToCssWithClasses(cssDict: Record<string, string>, addVisibility = false): string {
    return (
        Object.entries(cssDict)
            .map(([className, styles]) => `.${className} { ${styles}; }`)
            .join('\n') + (addVisibility ? '\n:host{visibility:hidden}' : '')
    );
}

function removeFromGlob(fileToRemove: string) {
    SVG_FILES.splice(SVG_FILES.indexOf(fileToRemove), 1);
}

function makeCss(extra: string[] = []): string {
    return [':host { display: flex; }', ...extra].join('\n');
}

function addMarkupToSvg(rawSvg: string, classVariant = false): string {
    const svgContent = rawSvg.replace(/(height|width)="[^"]*"/g, '').replace('<svg', `<svg :height="height" :width="width" :style="cssToJsx(_style)"`);
    return classVariant ? svgContent.replace('<svg', '<svg :class="variant"') : svgContent;
}

function makeTsx(iconName: string, svgContent: string, variant: string = '', variantList: string[] = []): string {
    return `
import { Component, Prop, h } from '@stencil/core';

@Component({
    tag: '${iconName}',
    shadow: true,
    styleUrl: '${iconName}.css',
})
export class ${camelCase(iconName)} {
    @Prop() width: string | number;
    @Prop() height: string | number;
    @Prop() _style: string;
    ${variant ? `@Prop() variant!: ${variantList.map(v => `"${v}"`).join(' | ')};` : ''}

    render() {
        ${svgContent}
    }
}`;
}

function processStyledVariants() {
    Object.entries(STYLED_VARIANT_DICT).forEach(([key, subDict]) => {
        const rawSvg = readFileSync(join(SVG_DIR, subDict.file), 'utf-8');
        const svgContent = addMarkupToSvg(rawSvg, true);
        const cssDict = Object.fromEntries(Object.entries(subDict).filter(([k]) => k !== 'file'));
        const variantList = Object.keys(cssDict);
        const iconName = `coreproject-shape-${kebabCase(key)}`;
        const tsx = makeTsx(iconName, `return (<Host>${svgContent}</Host>);`, 'variant', variantList);
        const css = makeCss([dictToCssWithClasses(cssDict, true)]);

        const directoryPath = join(SRC_DIR, iconName);
        mkdirSync(directoryPath, { recursive: true });
        writeFileSync(join(directoryPath, `${iconName}.tsx`), tsx);
        writeFileSync(join(directoryPath, `${iconName}.css`), css);
        addToIconList(iconName, variantList);
        removeFromGlob(subDict.file);
    });
}

function processVariantDict() {
    Object.entries(VARIANT_DICT).forEach(([key, subDict]) => {
        const variantList: string[] = [];
        const svgContentList: string[] = [];
        Object.entries(subDict).forEach(([subKey, fileName], i) => {
            const rawSvg = readFileSync(join(SVG_DIR, fileName), 'utf-8');
            const svgContent = addMarkupToSvg(rawSvg);
            svgContentList.push(`${i === 0 ? 'if' : 'else if'} (this.variant === "${subKey}") { return (<Host>${svgContent}</Host>); }`);
            variantList.push(subKey);
            removeFromGlob(fileName);
        });
        const iconName = `coreproject-shape-${kebabCase(key)}`;
        const tsx = makeTsx(iconName, svgContentList.join('\n'), 'variant', variantList);
        const css = makeCss();

        const directoryPath = join(SRC_DIR, iconName);
        mkdirSync(directoryPath, { recursive: true });
        writeFileSync(join(directoryPath, `${iconName}.tsx`), tsx);
        writeFileSync(join(directoryPath, `${iconName}.css`), css);
        addToIconList(iconName, variantList);
    });
}

function processRemainingFiles() {
    SVG_FILES.forEach(file => {
        const rawSvg = readFileSync(file, 'utf-8');
        const svgContent = addMarkupToSvg(rawSvg);
        const fileName = basename(file, '.svg');
        const iconName = LOGOS.has(fileName) ? `coreproject-logo-${fileName}` : `coreproject-shape-${fileName}`;
        const directoryPath = join(SRC_DIR, iconName);

        mkdirSync(directoryPath, { recursive: true });
        const tsx = makeTsx(iconName, `return (<Host>${svgContent}</Host>);`);
        const css = makeCss();

        writeFileSync(join(directoryPath, `${iconName}.tsx`), tsx);
        writeFileSync(join(directoryPath, `${iconName}.css`), css);

        addToIconList(iconName);
    });
}

// Execute functions
processStyledVariants();
processVariantDict();
processRemainingFiles();

writeFileSync(join(BASE_DIR, 'icons.json'), JSON.stringify(ICONS, null, 2));
