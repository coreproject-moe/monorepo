import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-shape-italic",
	shadow: true,
	styleUrl: "coreproject-shape-italic.css"
})
export class CoreprojectShapeItalic {
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
					class="feather feather-italic"
					height={this?.height}
					width={this?.width}
					style={css_to_jsx(this?._style)}
				>
					<line x1="19" y1="4" x2="10" y2="4"></line>
					<line x1="14" y1="20" x2="5" y2="20"></line>
					<line x1="15" y1="4" x2="9" y2="20"></line>
				</svg>
			</Host>
		);
	}
}