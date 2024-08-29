import { StyledVariantDict, VariantDict } from "./types";

const _LOGOS = ["figma", "github", "reddit", "discord"];
export const LOGOS = new Set(_LOGOS);

export const STYLED_VARIANT_DICT: StyledVariantDict = {
	thumbs: {
		file: "thumbs-up.svg",
		up: "transform: rotate(0deg)",
		down: "transform: rotate(90deg)"
	},
	trending: {
		file: "trending-up.svg",
		up: "transform: rotate(0deg)",
		down: "transform: rotate(90deg)"
	},
	corner: {
		file: "corner-down-right.svg",
		"down-right": "transform: rotate(0deg)",
		"down-left": "transform: scaleX(-1)",
		"left-down": "transform: rotate(90deg)",
		"left-up": "transform: rotate(90deg) scaleX(-1)",
		"up-left": "transform: rotate(180deg)",
		"up-right": "transform: rotate(180deg) scaleX(-1)",
		"right-up": "transform: rotate(270deg)",
		"right-down": "transform: rotate(270deg) scaleX(-1)"
	}
};

export const VARIANT_DICT: VariantDict = {
	align: {
		center: "align-center.svg",
		justify: "align-justify.svg",
		left: "align-left.svg",
		right: "align-right.svg"
	},
	bell: { on: "bell.svg", off: "bell-off.svg" },
	book: { open: "book-open.svg", close: "book.svg" },
	download: { arrow: "download.svg", cloud: "download-cloud.svg" },
	edit: {
		box: "edit-box.svg",
		pencil: "edit-pencil.svg",
		"line-with-pencil": "edit-line-with-pencil.svg"
	},
	eye: { open: "eye-open.svg", close: "eye-close.svg" },
	file: {
		normal: "file.svg",
		minus: "file-minus.svg",
		plus: "file-plus.svg",
		text: "file-text.svg"
	},
	folder: {
		normal: "folder.svg",
		minus: "folder-minus.svg",
		plus: "folder-plus.svg"
	},
	link: { tilted: "link-tilted.svg", horizontal: "link-horizontal.svg" },
	plus: {
		"no-border": "plus-no-border.svg",
		circle: "plus-circle.svg",
		square: "plus-square.svg"
	},
	shield: { on: "shield.svg", off: "shield-off.svg" },
	toggle: { off: "toggle-left.svg", on: "toggle-right.svg" },
	trash: {
		"with-lines": "trash-with-lines.svg",
		"without-lines": "trash-without-lines.svg"
	},
	upload: { arrow: "upload.svg", cloud: "upload-cloud.svg" },
	user: {
		normal: "user.svg",
		check: "user-check.svg",
		minus: "user-minus.svg",
		plus: "user-plus.svg",
		x: "user-x.svg"
	},
	volume: {
		off: "volume.svg",
		half: "volume-half.svg",
		full: "volume-full.svg",
		mute: "volume-mute.svg"
	},
	x: {
		"no-border": "x-no-border.svg",
		circle: "x-circle.svg",
		octagon: "x-octagon.svg",
		square: "x-square.svg"
	},
	zoom: { in: "zoom-in.svg", out: "zoom-out.svg" }
};
