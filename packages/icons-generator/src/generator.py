import glob
import os
from pathlib import Path
import re
import shutil
import json
import string
import itertools

BASE_DIR = Path(__file__).resolve().parent
SVG_DIR = os.path.join(BASE_DIR, "svg")
SRC_DIR = os.path.join(BASE_DIR.parent.parent, "icons", "src", "components")

SVG_FILES = glob.glob(os.path.join(SVG_DIR, "*.svg"))

if os.path.isdir(SRC_DIR):
    shutil.rmtree(SRC_DIR)

LOGOS = {"figma", "github", "reddit", "discord"}

STYLED_VARIANT_DICT = {
    "chevron": {
        "file": "chevron.svg",
        "up": "rotate: 0deg",
        "right": "rotate: 90deg",
        "down": "rotate: 180deg",
        "left": "rotate: 270deg",
    },
    "chevrons": {
        "file": "chevrons.svg",
        "up": "rotate: 0deg",
        "right": "rotate: 90deg",
        "down": "rotate: 180deg",
        "left": "rotate: 270deg",
    },
    "thumbs": {
        "file": "thumbs-up.svg",
        "up": "rotate: 0deg",
        "down": "rotate: 180deg",
    },
    "trending": {
        "file": "trending-up.svg",
        "up": "rotate: 0deg",
        "down": "rotate: 180deg;transform: scaleX(-1)",
    },
    "corner": {
        "file": "corner-down-right.svg",
        "down-right": "rotate: 0deg",
        "down-left": "transform: scaleX(-1)",
        "left-down": "rotate: 90deg",
        "left-up": "rotate: 90deg;transform: scaleX(-1)",
        "up-left": "rotate: 180deg",
        "up-right": "rotate: 180deg;transform: scaleX(-1)",
        "right-up": "rotate: 270deg",
        "right-down": "rotate:270deg;transform: scaleX(-1)",
    },
    "toggle": {
        "file": "toggle-left.svg",
        "off": "transform: scaleX(1)",
        "on": "transform: scaleX(-1)",
    },
    "arrow": {
        "file": "arrow.svg",
        "up": "rotate: 0deg",
        "right": "rotate: 90deg",
        "down": "rotate: 180deg",
        "left": "rotate: 270deg",
    },
    "media-skip": {
        "file": "fast-forward.svg",
        "fast-forward": "rotate: 0deg",
        "rewind": "rotate: 180deg",
    },
    "circle": {
        "file": "circle.svg",
        "outline": "fill: none",
        "filled": "fill: currentColor",
    },
}

VARIANT_DICT = {
    "align": {
        "center": "align-center.svg",
        "justify": "align-justify.svg",
        "left": "align-left.svg",
        "right": "align-right.svg",
    },
    "bell": {
        "on": "bell.svg",
        "off": "bell-off.svg",
    },
    "book": {
        "open": "book-open.svg",
        "close": "book.svg",
    },
    "cloud": {
        "on": "cloud.svg",
        "off": "cloud-off.svg",
    },
    "download": {
        "arrow": "download.svg",
        "cloud": "download-cloud.svg",
    },
    "edit": {
        "box": "edit-box.svg",
        "pencil": "edit-pencil.svg",
        "line-with-pencil": "edit-line-with-pencil.svg",
    },
    "eye": {
        "open": "eye-open.svg",
        "close": "eye-close.svg",
    },
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
    "link": {
        "tilted": "link-tilted.svg",
        "horizontal": "link-horizontal.svg",
    },
    "plus": {
        "no-border": "plus-no-border.svg",
        "circle": "plus-circle.svg",
        "square": "plus-square.svg",
    },
    "shield": {
        "on": "shield.svg",
        "off": "shield-off.svg",
    },
    "trash": {
        "with-lines": "trash-with-lines.svg",
        "without-lines": "trash-without-lines.svg",
    },
    "upload": {
        "arrow": "upload.svg",
        "cloud": "upload-cloud.svg",
    },
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
    "zoom": {
        "in": "zoom-in.svg",
        "out": "zoom-out.svg",
    },
    "settings": {
        "outline": "settings-outline.svg",
        "filled": "settings-filled.svg",
    },
    "zap": {
        "on": "zap.svg",
        "off": "zap-off.svg",
    },
}

ICONS = []


def letter_generator_iterator():
    letters = list(string.digits + string.ascii_letters)
    length = 1
    while True:
        for combination in itertools.product(letters, repeat=length):
            yield "".join(combination)
        length += 1


letter_generator = letter_generator_iterator()


def add_to_icon_list(icon_name, icon_type, variants=[]):
    icon_dict = {"icon-name": icon_name, "type": icon_type}

    if variants:
        icon_dict["variants"] = variants
    ICONS.append(icon_dict)


def remove_key_from_dict(original_dict, key_to_remove):
    return {key: value for key, value in original_dict.items() if key != key_to_remove}


def dict_to_css_with_classes(css_dict, add_ampersand=False, add_visibility=False):
    css_string = "\n".join(
        f"{"&" if add_ampersand else ""}.{class_name} {{ {styles}; {'visibility: visible !important;' if add_visibility else ""}; }};"
        for class_name, styles in css_dict.items()
        if styles
    )

    return css_string


def remove_from_glob(file_to_remove):
    global SVG_FILES
    SVG_FILES = [file for file in SVG_FILES if os.path.basename(file) != file_to_remove]


def kebab_to_pascal(kebab_str):
    return "".join(word.capitalize() for word in kebab_str.split("-"))


def make_css(marker, visibility=False, extra=[]):
    css = f"""
    :host {{
        display:block;
    }};
    svg[coreproject-icon-{marker}]{{
        display: flex;
        {"visibility: hidden !important;" if visibility else ""}
        {"\n;".join(extra)}
    }};
    """

    return css


def extract_svg_dimensions(svg_content: str):
    # Regex to capture height and width attributes in the <svg> tag
    pattern = r'<svg[^>]*\bwidth\s*=\s*"([^"]+)"[^>]*\bheight\s*=\s*"([^"]+)"'

    match = re.search(pattern, svg_content)

    if match:
        width = match.group(1)
        height = match.group(2)
        return {"width": width, "height": height}
    else:
        raise SyntaxError("Malformed `svg`: `svg` doesn't have `width` or `height`")


def add_markup_to_svg(raw_svg, marker, class_variant=False):
    svg_content = raw_svg.strip()

    # Remove both height and width attributes from the <svg> tag
    height_width_pattern = re.compile(
        r'(<svg[^>]*?)\s*(height="[^"]*"|width="[^"]*")(?:\s*(height="[^"]*"|width="[^"]*"))?'
    )
    svg_content = re.sub(height_width_pattern, r"\1", svg_content)

    svg_content = re.sub(
        r"(<svg[^>]*?)>",
        rf"\1 height={{this.height}} width={{this.width}} part='svg' coreproject-icon-{marker}=''>",
        svg_content,
    )
    # Remove xmlns and other contains
    svg_content = re.sub(
        r'(<svg[^>]*?)\s*(xmlns="[^"]*")(?:\s*(xmlns="[^"]*"))?', r"\1", svg_content
    )

    # Optionally add class to the <svg> tag
    if class_variant:
        svg_content = re.sub(
            r"(<svg[^>]*?)>", r"\1 class={this?.variant}>", svg_content
        )

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


def make_tsx(icon_name, svg_content, width, height, variant_list=[]):
    variant = (
        f'variant!: {" | ".join([f'"{s}"' for s in variant_list])}'
        if variant_list
        else ""
    )
    variant_prop = f"@Prop() {variant};" if variant else ""
    render_check = (
        f"""
    componentWillLoad(){{
        if(!{variant_list}.includes(this.variant)) throw new Error(`'{icon_name}' (${{this.variant}}) not in {variant_list}`);
    }}
    """
        if variant_list
        else ""
    )

    return f"""
import {{ Component, Host, h, Prop }} from '@stencil/core';

@Component({{
    tag: '{icon_name}',
    shadow: true,
    styleUrl: '{icon_name}.scss',
}})
export class {kebab_to_pascal(icon_name)} {{
    @Prop() width: string | number = {width};
    @Prop() height: string | number = {height};
    {variant_prop}
    {render_check}

    render(){{
        {svg_content}
    }}
}}
"""


for key, sub_dict in STYLED_VARIANT_DICT.items():
    with open(os.path.join(SVG_DIR, sub_dict["file"]), "r") as file:
        raw_svg = file.read()

    svg_dimensions = extract_svg_dimensions(raw_svg)
    svg_height = svg_dimensions["height"]
    svg_width = svg_dimensions["width"]
    svg_marker = next(letter_generator)
    svg_content = add_markup_to_svg(raw_svg, svg_marker, class_variant=True)
    css_dict = remove_key_from_dict(sub_dict, "file")
    variant_list = list(css_dict.keys())
    icon_name = f"coreproject-shape-{key}"

    tsx = make_tsx(
        icon_name,
        f"""return(<Host>{svg_content}</Host>)""",
        height=svg_height,
        width=svg_width,
        variant_list=variant_list,
    )
    css = make_css(
        marker=svg_marker,
        visibility=True,
        extra=[
            dict_to_css_with_classes(css_dict, add_ampersand=True, add_visibility=True),
        ],
    )
    directory_path = os.path.join(SRC_DIR, icon_name)
    os.makedirs(directory_path, exist_ok=True)
    with open(os.path.join(directory_path, f"{icon_name}.tsx"), "w+") as f:
        f.write(tsx)
    with open(os.path.join(directory_path, f"{icon_name}.scss"), "w+") as f:
        f.write(css)
    add_to_icon_list(key, "shape", variant_list)
    remove_from_glob(sub_dict["file"])

for key, sub_dict in VARIANT_DICT.items():
    variant_list = []
    svg_content_list = []
    svg_marker = next(letter_generator)

    for i, (sub_key, file_name) in enumerate(sub_dict.items()):
        with open(os.path.join(SVG_DIR, file_name), "r") as file:
            raw_svg = file.read()
            svg_content = add_markup_to_svg(raw_svg, svg_marker)
            svg_content_list.append(
                f"""{"if" if i == 0 else "else if"} (this.variant === "{sub_key}") {{return(<Host>{svg_content}</Host>);}}"""
            )
            variant_list.append(sub_key)
        remove_from_glob(file_name)
    icon_name = f"coreproject-shape-{key}"

    svg_dimensions = extract_svg_dimensions(raw_svg)
    svg_height = svg_dimensions["height"]
    svg_width = svg_dimensions["width"]

    tsx = make_tsx(
        icon_name,
        "\n".join(svg_content_list),
        height=svg_height,
        width=svg_width,
        variant_list=variant_list,
    )
    css = make_css(marker=svg_marker)
    directory_path = os.path.join(SRC_DIR, icon_name)
    os.makedirs(directory_path, exist_ok=True)
    with open(os.path.join(directory_path, f"{icon_name}.tsx"), "w+") as f:
        f.write(tsx)
    with open(os.path.join(directory_path, f"{icon_name}.scss"), "w+") as f:
        f.write(css)
    add_to_icon_list(key, "shape", variant_list)

for file in SVG_FILES:
    with open(file, "r") as file:
        raw_svg = file.read()

    svg_dimensions = extract_svg_dimensions(raw_svg)
    svg_height = svg_dimensions["height"]
    svg_width = svg_dimensions["width"]
    svg_marker = next(letter_generator)
    svg_content = add_markup_to_svg(raw_svg, svg_marker)
    file_name = os.path.basename(str(file)).split(".")[0]

    if file_name in LOGOS:
        add_to_icon_list(file_name, "logo")
        icon_name = f"coreproject-logo-{file_name}"
    else:
        add_to_icon_list(file_name, "shape")
        icon_name = f"coreproject-shape-{file_name}"
    directory_path = os.path.join(SRC_DIR, icon_name)
    os.makedirs(directory_path, exist_ok=True)
    tsx = make_tsx(
        icon_name,
        f"""return(<Host>{svg_content}</Host>)""",
        height=svg_height,
        width=svg_width,
    )
    css = make_css(marker=svg_marker)
    e2e = make_e2e(icon_name)
    with open(os.path.join(directory_path, f"{icon_name}.tsx"), "w+") as f:
        f.write(tsx)
    with open(os.path.join(directory_path, f"{icon_name}.scss"), "w+") as f:
        f.write(css)
    test_dir = os.path.join(directory_path, "test")
    os.makedirs(test_dir, exist_ok=True)
    with open(os.path.join(test_dir, f"{icon_name}.e2e.ts"), "w+") as f:
        f.write(e2e)


with open(os.path.join(BASE_DIR, "icons.json"), "w+") as f:
    json.dump(ICONS, f)
