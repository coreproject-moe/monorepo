import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import * as glob from "glob";
import { IconDict, StyledVariantDict, StyleVariant, VariantDict } from "./types";
import { pascalCase } from "es-toolkit/string";
import { LOGOS, STYLED_VARIANT_DICT, VARIANT_DICT } from "./dicts";

const __filename = fileURLToPath(import.meta.url);
const BASE_DIR = path.dirname(__filename);
const SVG_DIR = path.join(BASE_DIR, "..", "svg");
const SRC_DIR = path.join(BASE_DIR, "..", "..", "icons", "src", "components");

if (fs.existsSync(SRC_DIR)) {
	fs.rmdirSync(SRC_DIR, { recursive: true });
}

let SVG_FILES: string[] = glob.sync(`${SVG_DIR}/*.svg`);

const ICONS: IconDict[] = [];

function addToIconList(iconName: string, variants: string[] = []): void {
	const iconDict: IconDict = { "icon-name": iconName };
	if (variants.length) {
		iconDict.variants = variants;
	}
	ICONS.push(iconDict);
}

function removeKeyFromDict<T extends object>(
	originalDict: T,
	keyToRemove: keyof T
): Omit<T, keyof T> {
	const newDict = { ...originalDict };
	delete newDict[keyToRemove];
	return newDict as Omit<T, keyof T>;
}

function dictToCssWithClasses(cssDict: StyleVariant, addVisibility: boolean = false): string {
	let cssString = Object.entries(cssDict)
		.filter(([, styles]) => styles)
		.map(([className, styles]) => `.${className} { ${styles}; }`)
		.join("\n");
	if (addVisibility) {
		cssString += "\n:host{visibility:hidden}";
	}
	return cssString;
}

function removeFromGlob(fileToRemove: string): void {
	SVG_FILES = SVG_FILES.filter((file) => path.basename(file) !== fileToRemove);
}

function makeCss(extra: string[] = []): string {
	return [":host { display: flex; }", ...extra].join("\n");
}

function addMarkupToSvg(rawSvg: string, classVariant: boolean = false): string {
	let svgContent = rawSvg.replace(/(height="[^"]*"|width="[^"]*")/g, "");
	svgContent = svgContent.replace(
		"<svg",
		"<svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)}"
	);
	if (classVariant) {
		svgContent = svgContent.replace("<svg", "<svg class={this?.variant}");
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

function makeTsx(
	iconName: string,
	svgContent: string,
	variant: string = "",
	variantList: string[] = []
): string {
	const variantProp = variant ? `@Prop() ${variant};` : "";
	return `
import { Component, Host, h, Prop } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';


@Component({
    tag: '${iconName}',
    shadow: true,
    styleUrl: '${iconName}.css',
})
export class ${pascalCase(iconName)} {
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
	const rawSvg = fs.readFileSync(path.join(SVG_DIR, subDict.file), "utf8");
	const svgContent = addMarkupToSvg(rawSvg, true);
	const cssDict = removeKeyFromDict(subDict, "file") as StyleVariant;
	const variantList = Object.keys(cssDict);
	const iconName = `coreproject-shape-${key}`;
	const tsx = makeTsx(
		iconName,
		`return(<Host>${svgContent}</Host>)`,
		`variant!: ${variantList.map((s) => `"${s}"`).join(" | ")}`,
		variantList
	);
	const css = makeCss([":host{visibility:hidden}", dictToCssWithClasses(cssDict, true)]);
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
		const rawSvg = fs.readFileSync(path.join(SVG_DIR, fileName), "utf8");
		const svgContent = addMarkupToSvg(rawSvg);
		svgContentList.push(
			`${index === 0 ? "if" : "else if"} (this.variant === "${subKey}") {return(<Host>${svgContent}</Host>);}`
		);
		variantList.push(subKey);
		removeFromGlob(fileName);
	});

	const iconName = `coreproject-shape-${key}`;
	const tsx = makeTsx(
		iconName,
		svgContentList.join("\n"),
		`variant!: ${variantList.map((s) => `"${s}"`).join(" | ")}`,
		variantList
	);
	const css = makeCss();
	const directoryPath = path.join(SRC_DIR, iconName);
	fs.mkdirSync(directoryPath, { recursive: true });
	fs.writeFileSync(path.join(directoryPath, `${iconName}.tsx`), tsx);
	fs.writeFileSync(path.join(directoryPath, `${iconName}.css`), css);
	addToIconList(iconName, variantList);
}

for (const file of SVG_FILES) {
	const rawSvg = fs.readFileSync(file, "utf8");
	const svgContent = addMarkupToSvg(rawSvg);
	const fileName = path.basename(file).split(".")[0];
	const iconName = LOGOS.has(fileName)
		? `coreproject-logo-${fileName}`
		: `coreproject-shape-${fileName}`;
	const directoryPath = path.join(SRC_DIR, iconName);
	fs.mkdirSync(directoryPath, { recursive: true });

	const tsx = makeTsx(iconName, `return(<Host>${svgContent}</Host>)`);
	const css = makeCss();
	const e2e = makeE2e(iconName);

	fs.writeFileSync(path.join(directoryPath, `${iconName}.tsx`), tsx);
	fs.writeFileSync(path.join(directoryPath, `${iconName}.css`), css);

	const testDir = path.join(directoryPath, "test");
	fs.mkdirSync(testDir, { recursive: true });
	fs.writeFileSync(path.join(testDir, `${iconName}.e2e.ts`), e2e);

	addToIconList(iconName);
}

fs.writeFileSync(path.join(BASE_DIR, "icons.json"), JSON.stringify(ICONS, null, 2));
