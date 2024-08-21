import glob
import os
from pathlib import Path
import re
import shutil
import json

BASE_DIR = Path(__file__).resolve().parent
svg_directory_path = os.path.join(BASE_DIR, "svg")
src_directory_path = os.path.join(BASE_DIR.parent, "src", "components")

svg_files = glob.glob(os.path.join(svg_directory_path, "*.svg"))

if os.path.isdir(src_directory_path):
    while True:
        ask = input("Do you want to delete the `src/components` directory (y/n):")
        if "y" in ask:
            shutil.rmtree(src_directory_path)
            break

logos = {"figma", "github"}

styled_variant_dict = {
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

variant_dict = {
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
    "toggle": {
        "off": "toggle-left.svg",
        "on": "toggle-right.svg",
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
}


icons = []


def add_to_icon_list(icon_name, variants=[]):
    _dict = {}
    _dict.setdefault("icon-name", icon_name)

    if variants:
        _dict.setdefault("variants", variants)

    icons.append(_dict)


def remove_key_from_dict(original_dict, key_to_remove):
    return {key: value for key, value in original_dict.items() if key != key_to_remove}


def dict_to_css_with_classes(css_dict, add_visibility=False):
    css_string = ""
    for class_name, styles in css_dict.items():
        if styles:  # Only include non-empty styles
            if add_visibility:
                styles += ";visibility:display!important;"
            css_string += f".{class_name} {{ {styles}; }}"

    return css_string


def remove_from_glob(file_to_remove):
    global svg_files
    svg_files = [file for file in svg_files if os.path.basename(file) != file_to_remove]


def kebab_to_pascal(kebab_str):
    parts = kebab_str.split("-")
    pascal_str = "".join(word.capitalize() for word in parts)
    return pascal_str


def make_css(extra=[]):
    base = [":host { display: flex; }"]
    base.extend(extra)
    return "\n".join(base)


def add_markup_to_svg(raw_svg, class_variant=False):
    height_width_pattern = re.compile(r'(height="[^"]*"|width="[^"]*")')

    svg_content = re.sub(height_width_pattern, "", raw_svg)
    svg_content = re.sub(
        r"<svg",
        "<svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)}",
        svg_content,
    )
    if class_variant:
        svg_content = re.sub(
            r"<svg",
            "<svg class={this?.variant}",
            svg_content,
        )

    return svg_content


def make_e2e(icon_name):
    return f"""
import {{ newE2EPage }} from '@stencil/core/testing';

describe('{icon_name}', () => {{
    it('renders', async () => {{
        const page = await newE2EPage();
        await page.setContent(
            '<{icon_name}></{icon_name}>'
        );

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


for key, sub_dict in styled_variant_dict.items():
    with open(os.path.join(svg_directory_path, sub_dict["file"]), "r") as file:
        raw_svg = file.read()
    svg_content = add_markup_to_svg(raw_svg, class_variant=True)
    css_dict = remove_key_from_dict(sub_dict, "file")
    variant_list = list(css_dict.keys())
    icon_name = f"coreproject-shape-{key}"

    tsx = make_tsx(
        icon_name,
        f"""
            return(
                <Host>
                    {svg_content}
                </Host>
            )
        """,
        variant=f'variant!: {" | ".join([f'"{s}"' for s in variant_list])}',
        variant_list=variant_list,
    )
    css = make_css(
        [
            r":host{visibility:hidden}",
            dict_to_css_with_classes(css_dict, add_visibility=True),
        ],
    )
    directory_path = os.path.join(src_directory_path, icon_name)
    os.makedirs(directory_path, exist_ok=True)

    with open(os.path.join(directory_path, f"{icon_name}.tsx"), "w+") as f:
        f.write(tsx)

    with open(os.path.join(directory_path, f"{icon_name}.css"), "w+") as f:
        f.write(css)

    add_to_icon_list(icon_name, variant_list)
    remove_from_glob(sub_dict["file"])

for key, sub_dict in variant_dict.items():
    variant_list = []
    svg_content_list = []

    for i, (sub_key, file_name) in enumerate(sub_dict.items()):
        with open(os.path.join(svg_directory_path, file_name), "r") as file:
            raw_svg = file.read()
            svg_content = add_markup_to_svg(raw_svg)

            svg_content_list.append(
                f"""
            {"if" if i == 0 else "else if"} (this.variant === "{sub_key}") {{
                return(
                    <Host>
                        {svg_content}
                    </Host>
                );
            }}
            """
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

    directory_path = os.path.join(src_directory_path, icon_name)
    os.makedirs(directory_path, exist_ok=True)

    with open(os.path.join(directory_path, f"{icon_name}.tsx"), "w+") as f:
        f.write(tsx)

    with open(os.path.join(directory_path, f"{icon_name}.css"), "w+") as f:
        f.write(css)

    add_to_icon_list(icon_name, variant_list)

for file in svg_files:
    with open(file, "r") as file:
        raw_svg = file.read()

    svg_content = add_markup_to_svg(raw_svg)

    file_name = os.path.basename(str(file)).split(".")[0]

    if file_name in logos:
        icon_name = f"coreproject-logo-{file_name}"
    else:
        icon_name = f"coreproject-shape-{file_name}"

    directory_path = os.path.join(src_directory_path, icon_name)
    os.makedirs(directory_path, exist_ok=True)

    tsx = make_tsx(
        icon_name,
        f"""
        return(
            <Host>
                {svg_content}
            </Host>
        )
    """,
    )
    css = make_css()
    e2e = make_e2e(icon_name)
    #     spec = f"""

    # import {{ newSpecPage }} from '@stencil/core/testing';
    # import {{ {kebab_to_pascal(icon_name)} }} from '../{icon_name}';

    # describe('{icon_name}', () => {{

    # it('renders', async () => {{
    #         const page = await newSpecPage({{
    #             components: [{kebab_to_pascal(icon_name)}],
    #             html: `<{icon_name}></{icon_name}>`,
    #         }});
    #         expect(page.root).toEqualHtml(`
    #       <{icon_name}>
    #         <mock:shadow-root>
    #            {raw_svg}
    #         </mock:shadow-root>
    #       </{icon_name}>
    #     `)}});
    #     }});

    #     """

    with open(os.path.join(directory_path, f"{icon_name}.tsx"), "w+") as f:
        f.write(tsx)

    with open(os.path.join(directory_path, f"{icon_name}.css"), "w+") as f:
        f.write(css)

    test_dir = os.path.join(directory_path, "test")
    os.makedirs(test_dir, exist_ok=True)

    with open(os.path.join(test_dir, f"{icon_name}.e2e.ts"), "w+") as f:
        f.write(e2e)

    # with open(os.path.join(test_dir, f"{icon_name}.spec.ts"), "w+") as f:
    #     f.write(spec)
    add_to_icon_list(icon_name)


with open(os.path.join(BASE_DIR, "icons.json"), "w+") as f:
    json.dump(icons, f)
