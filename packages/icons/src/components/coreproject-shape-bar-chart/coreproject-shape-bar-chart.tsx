import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-shape-bar-chart",
	shadow: true,
	styleUrl: "coreproject-shape-bar-chart.scss"
})
export class CoreprojectShapeBarChart {
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
				>
					<line x1="12" y1="20" x2="12" y2="10"></line>
					<line x1="18" y1="20" x2="18" y2="4"></line>
					<line x1="6" y1="20" x2="6" y2="16"></line>
				</svg>
			</Host>
		);
	}
}
