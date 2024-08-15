import glob
import os
from pathlib import Path
import re

BASE_DIR = Path(__file__).resolve().parent
svg_directory_path = os.path.join(BASE_DIR, "svg")
src_directory_path = os.path.join(BASE_DIR.parent, "src", "components")

svg_files = glob.glob(os.path.join(svg_directory_path, "*.svg"))


def kebab_to_pascal(kebab_str):
    parts = kebab_str.split("-")
    pascal_str = "".join(word.capitalize() for word in parts)
    return pascal_str


height_width_pattern = r'(height="[^"]*"|width="[^"]*")'


for file in svg_files:
    with open(file, "r") as file:
        svg_content = file.read()

    svg_content = re.sub(
        r"<svg", "<svg ref={el => (this.svg_element = el as SVGElement)}", svg_content
    )
    svg_content = re.sub(height_width_pattern, "", svg_content)

    file_name = os.path.basename(str(file)).split(".")[0]
    icon_name = f"coreproject-shape-{file_name}"
    directory_path = os.path.join(src_directory_path, icon_name)
    os.makedirs(directory_path, exist_ok=True)

    tsx = f"""
import {{ Component, Host, h, Prop, Watch }} from '@stencil/core';

@Component({{
    tag: '{icon_name}',
    shadow: true,
    styleUrl: '{icon_name}.css',
}})
export class {kebab_to_pascal(icon_name)} {{

    @Prop() width: string;
    @Prop() height: string;
    @Prop() _style: string;
    svg_element: SVGElement;

    @Watch('_style')
    watch_Style(newValue: string) {{
        if (this.svg_element && newValue) this.svg_element.setAttribute('style', newValue);
    }}

    @Watch('height')
    watchHeight(newValue: string) {{
        if (this.svg_element && newValue) this.svg_element.setAttribute('height', newValue);
    }}

    @Watch('width')
    watchWidth(newValue: string) {{
        if (this.svg_element && newValue) this.svg_element.setAttribute('width', newValue);
    }}

    render(){{
        return(
            <Host>
                {svg_content}
            </Host>
        )
    }}

}}

    
"""

    css = """
:host { display: flex; }
    """

    with open(os.path.join(directory_path, f"{icon_name}.tsx"), "w+") as f:
        f.write(tsx)

    with open(os.path.join(directory_path, f"{icon_name}.css"), "w+") as f:
        f.write(css)
