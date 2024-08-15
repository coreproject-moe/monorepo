import glob
import os
from pathlib import Path
import re

BASE_DIR = Path(__file__).resolve().parent
svg_directory_path = os.path.join(BASE_DIR, "svg")
src_directory_path = os.path.join(BASE_DIR.parent, "src", "components")

svg_files = glob.glob(os.path.join(svg_directory_path, "*.svg"))

logos = ["figma"]


def kebab_to_pascal(kebab_str):
    parts = kebab_str.split("-")
    pascal_str = "".join(word.capitalize() for word in parts)
    return pascal_str


height_width_pattern = r'(height="[^"]*"|width="[^"]*")'


for file in svg_files:
    with open(file, "r") as file:
        raw_svg = file.read()

    svg_content = re.sub(
        r"<svg", "<svg ref={el => (this.svg_element = el as SVGElement)}", raw_svg
    )
    svg_content = re.sub(height_width_pattern, "", svg_content)

    file_name = os.path.basename(str(file)).split(".")[0]

    if file_name in logos:
        icon_name = f"coreproject-logo-{file_name}"
    else:
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

    e2e = f"""
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
