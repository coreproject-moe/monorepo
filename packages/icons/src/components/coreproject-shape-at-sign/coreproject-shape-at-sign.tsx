import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-shape-at-sign",
	shadow: true,
	styleUrl: "coreproject-shape-at-sign.css"
})
export class CoreprojectShapeAtSign {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() _style: string;

	render() {
		return (
			<Host>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					height={this?.height}
					width={this?.width}
					style={css_to_jsx(this?._style)}
					data-marker="v"
				>
					<circle cx="12" cy="12" r="4"></circle>
					<path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
				</svg>
			</Host>
		);
	}
}
