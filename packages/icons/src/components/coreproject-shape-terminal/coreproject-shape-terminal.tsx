import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-shape-terminal",
	shadow: true,
	styleUrl: "coreproject-shape-terminal.css"
})
export class CoreprojectShapeTerminal {
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
					data-marker="0H"
				>
					<polyline points="4 17 10 11 4 5"></polyline>
					<line x1="12" y1="19" x2="20" y2="19"></line>
				</svg>
			</Host>
		);
	}
}
