import glob
import os
from pathlib import Path
import re
import shutil
import json

BASE_DIR = Path(__file__).resolve().parent
SVG_DIR = os.path.join(BASE_DIR, "svg")
SRC_DIR = os.path.join(BASE_DIR.parent.parent, "icons", "src", "components")

SVG_FILES = glob.glob(os.path.join(SVG_DIR, "*.svg"))

if os.path.isdir(SRC_DIR):
    while True:
        ask = input("Do you want to delete the `src/components` directory (y/n):")
        if "y" in ask:
            shutil.rmtree(SRC_DIR)
            break

LOGOS = {"figma", "github"}

STYLED_VARIANT_DICT = {
    "thumbs": {
        "file": "thumbs-up.svg",
        "up": "transform: rotate(0deg)",
        "down": "transform: rotate(90deg)",
    },
    "trending": {
        "file": "trending-up.svg",
        "up": "transform: rotate(0deg)",
        "down": "transform: rotate(90deg)",
    },
    "corner": {
        "file": "corner-down-right.svg",
        "down-right": "transform: rotate(0deg)",
        "down-left": "transform: scaleX(-1)",
        "left-down": "transform: rotate(90deg)",
        "left-up": "transform: rotate(90deg) scaleX(-1)",
        "up-left": "transform: rotate(180deg)",
        "up-right": "transform: rotate(180deg) scaleX(-1)",
        "right-up": "transform: rotate(270deg)",
        "right-down": "transform: rotate(270deg) scaleX(-1)",
    },
}

VARIANT_DICT = {
    "align": {
        "center": "align-center.svg",
        "justify": "align-justify.svg",
        "left": "align-left.svg",
        "right": "align-right.svg",
    },
    "bell": {"on": "bell.svg", "off": "bell-off.svg"},
    "book": {"open": "book-open.svg", "close": "book.svg"},
    "download": {"arrow": "download.svg", "cloud": "download-cloud.svg"},
    "edit": {
        "box": "edit-box.svg",
        "pencil": "edit-pencil.svg",
        "line-with-pencil": "edit-line-with-pencil.svg",
    },
    "eye": {"open": "eye-open.svg", "close": "eye-close.svg"},
    "file": {
        "normal": "file.svg",
        "minus": "file-minus.svg",
        "plus": "file-plus.svg",
        "text": "file-text.svg",
    },
    "folder": {
        "normal": "folder.svg",
        "minus": "folder-minus.svg",
        "plus": "folder-plus.svg",
    },
    "link": {"tilted": "link-tilted.svg", "horizontal": "link-horizontal.svg"},
    "plus": {
        "no-border": "plus-no-border.svg",
        "circle": "plus-circle.svg",
        "square": "plus-square.svg",
    },
    "shield": {"on": "shield.svg", "off": "shield-off.svg"},
    "toggle": {"off": "toggle-left.svg", "on": "toggle-right.svg"},
    "trash": {
        "with-lines": "trash-with-lines.svg",
        "without-lines": "trash-without-lines.svg",
    },
    "upload": {"arrow": "upload.svg", "cloud": "upload-cloud.svg"},
    "user": {
        "normal": "user.svg",
        "check": "user-check.svg",
        "minus": "user-minus.svg",
        "plus": "user-plus.svg",
        "x": "user-x.svg",
    },
    "volume": {
        "off": "volume.svg",
        "half": "volume-half.svg",
        "full": "volume-full.svg",
        "mute": "volume-mute.svg",
    },
    "x": {
        "no-border": "x-no-border.svg",
        "circle": "x-circle.svg",
        "octagon": "x-octagon.svg",
        "square": "x-square.svg",
    },
    "zoom": {"in": "zoom-in.svg", "out": "zoom-out.svg"},
}

ICONS = []


def add_to_icon_list(icon_name, variants=[]):
    icon_dict = {"icon-name": icon_name}
    if variants:
        icon_dict["variants"] = variants
    ICONS.append(icon_dict)


def remove_key_from_dict(original_dict, key_to_remove):
    return {key: value for key, value in original_dict.items() if key != key_to_remove}


def dict_to_css_with_classes(css_dict, add_visibility=False):
    css_string = "\n".join(
        f".{class_name} {{ {styles}; }}"
        for class_name, styles in css_dict.items()
        if styles
    )
    if add_visibility:
        css_string += "\n:host{visibility:hidden}"
    return css_string


def remove_from_glob(file_to_remove):
    global SVG_FILES
    SVG_FILES = [file for file in SVG_FILES if os.path.basename(file) != file_to_remove]


def kebab_to_pascal(kebab_str):
    return "".join(word.capitalize() for word in kebab_str.split("-"))


def make_css(extra=[]):
    return "\n".join([":host { display: flex; }"] + extra)


def add_markup_to_svg(raw_svg, class_variant=False):
    height_width_pattern = re.compile(r'(height="[^"]*"|width="[^"]*")')
    svg_content = re.sub(height_width_pattern, "", raw_svg)
    svg_content = re.sub(
        r"<svg",
        "<svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)}",
        svg_content,
    )
    if class_variant:
        svg_content = re.sub(r"<svg", "<svg class={this?.variant}", svg_content)
    return svg_content


def make_e2e(icon_name):
    return f"""
import {{ newE2EPage }} from '@stencil/core/testing';

describe('{icon_name}', () => {{
    it('renders', async () => {{
        const page = await newE2EPage();
        await page.setContent('<{icon_name}></{icon_name}>');
        const element = await page.find('{icon_name}');
        expect(element).toHaveClass('hydrated');
    }});
}});
"""


def make_tsx(icon_name, svg_content, variant="", variant_list=[]):
    variant_prop = f"@Prop() {variant};" if variant else ""
    return f"""
import {{ Component, Host, h, Prop }} from '@stencil/core';
import {{ css_to_jsx }} from '$utils/css_to_jsx';

@Component({{
    tag: '{icon_name}',
    shadow: true,
    styleUrl: '{icon_name}.css',
}})
export class {kebab_to_pascal(icon_name)} {{
    @Prop() width: string | number;
    @Prop() height: string | number;
    @Prop() _style: string;
    {variant_prop}

    render(){{
        {svg_content}
    }}
}}
"""


for key, sub_dict in STYLED_VARIANT_DICT.items():
    with open(os.path.join(SVG_DIR, sub_dict["file"]), "r") as file:
        raw_svg = file.read()
    svg_content = add_markup_to_svg(raw_svg, class_variant=True)
    css_dict = remove_key_from_dict(sub_dict, "file")
    variant_list = list(css_dict.keys())
    icon_name = f"coreproject-shape-{key}"
    tsx = make_tsx(
        icon_name,
        f"""return(<Host>{svg_content}</Host>)""",
        variant=f'variant!: {" | ".join([f'"{s}"' for s in variant_list])}',
        variant_list=variant_list,
    )
    css = make_css(
        [
            ":host{visibility:hidden}",
            dict_to_css_with_classes(css_dict, add_visibility=True),
        ]
    )
    directory_path = os.path.join(SRC_DIR, icon_name)
    os.makedirs(directory_path, exist_ok=True)
    with open(os.path.join(directory_path, f"{icon_name}.tsx"), "w+") as f:
        f.write(tsx)
    with open(os.path.join(directory_path, f"{icon_name}.css"), "w+") as f:
        f.write(css)
    add_to_icon_list(icon_name, variant_list)
    remove_from_glob(sub_dict["file"])

for key, sub_dict in VARIANT_DICT.items():
    variant_list = []
    svg_content_list = []
    for i, (sub_key, file_name) in enumerate(sub_dict.items()):
        with open(os.path.join(SVG_DIR, file_name), "r") as file:
            raw_svg = file.read()
            svg_content = add_markup_to_svg(raw_svg)
            svg_content_list.append(
                f"""{"if" if i == 0 else "else if"} (this.variant === "{sub_key}") {{return(<Host>{svg_content}</Host>);}}"""
            )
            variant_list.append(sub_key)
        remove_from_glob(file_name)
    icon_name = f"coreproject-shape-{key}"
    tsx = make_tsx(
        icon_name,
        "\n".join(svg_content_list),
        variant=f'variant!: {" | ".join([f'"{s}"' for s in variant_list])}',
        variant_list=variant_list,
    )
    css = make_css()
    directory_path = os.path.join(SRC_DIR, icon_name)
    os.makedirs(directory_path, exist_ok=True)
    with open(os.path.join(directory_path, f"{icon_name}.tsx"), "w+") as f:
        f.write(tsx)
    with open(os.path.join(directory_path, f"{icon_name}.css"), "w+") as f:
        f.write(css)
    add_to_icon_list(icon_name, variant_list)

for file in SVG_FILES:
    with open(file, "r") as file:
        raw_svg = file.read()
    svg_content = add_markup_to_svg(raw_svg)
    file_name = os.path.basename(str(file)).split(".")[0]
    if file_name in LOGOS:
        icon_name = f"coreproject-logo-{file_name}"
    else:
        icon_name = f"coreproject-shape-{file_name}"
    directory_path = os.path.join(SRC_DIR, icon_name)
    os.makedirs(directory_path, exist_ok=True)
    tsx = make_tsx(icon_name, f"""return(<Host>{svg_content}</Host>)""")
    css = make_css()
    e2e = make_e2e(icon_name)
    with open(os.path.join(directory_path, f"{icon_name}.tsx"), "w+") as f:
        f.write(tsx)
    with open(os.path.join(directory_path, f"{icon_name}.css"), "w+") as f:
        f.write(css)
    test_dir = os.path.join(directory_path, "test")
    os.makedirs(test_dir, exist_ok=True)
    with open(os.path.join(test_dir, f"{icon_name}.e2e.ts"), "w+") as f:
        f.write(e2e)
    add_to_icon_list(icon_name)

with open(os.path.join(BASE_DIR, "icons.json"), "w+") as f:
    json.dump(ICONS, f)
