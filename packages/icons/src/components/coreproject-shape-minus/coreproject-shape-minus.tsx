import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-shape-minus",
	shadow: true,
	styleUrl: "coreproject-shape-minus.scss"
})
export class CoreprojectShapeMinus {
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
					data-marker="0h"
				>
					<line x1="5" y1="12" x2="19" y2="12"></line>
				</svg>
			</Host>
		);
	}
}
